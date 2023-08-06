import { URLBaseBackend } from "@/src/utlis/envs";
import { getTokensFromLocalStorage } from "@/src/utlis/localstorage";
import axios from "axios";

interface Repuesta {
  networkError?: boolean;
  errors?: any;
  data?: any;
  isSuccess?: boolean;
}

export default async function fetchSigninGoogle(
  id_token_google: string
): Promise<Repuesta> {
  const source = axios.CancelToken.source();
  const { tokens } = getTokensFromLocalStorage();
  try {
    const response = await axios.post(
      `${URLBaseBackend}/auth/google/logincreate/`,
      { id_token: id_token_google },
      {
        cancelToken: source.token,
        headers: {
          Authorization: `JWT ${tokens?.accessToken}`,
        },
      }
    );

    if (response.status === 200) {
      return {
        data: response?.data,
        isSuccess: true,
      };
    } else {
      return {
        errors: response?.data,
        isSuccess: false,
      };
    }
  } catch (e: any) {
    if (e.code === "ERR_NETWORK") {
      return {
        isSuccess: false,
        networkError: true,
      };
    }
    return {
      isSuccess: false,
      errors: e?.response?.data,
    };
  } finally {
    source.cancel();
  }
}

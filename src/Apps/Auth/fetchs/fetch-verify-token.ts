interface Repuesta {
  networkError?: boolean;
  errors?: any;
  data?: any;
  isSuccess?: boolean;
}
import { URLBaseBackend } from "@/src/utlis/envs";
import { getTokensFromLocalStorage } from "@/src/utlis/localstorage";
import axios, { AxiosResponse, CancelTokenSource } from "axios";

const fetchVerifyToken = async (): Promise<Repuesta> => {
  const source: CancelTokenSource = axios.CancelToken.source();
  const { tokens } = getTokensFromLocalStorage();
  try {
    const response: AxiosResponse = await axios.post(
      `${URLBaseBackend}/auth/jwt/verify/`,
      {
        token: tokens?.accessToken,
      },
      {
        cancelToken: source.token,
      }
    );
    if (response.status == 200) {
      return {
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
        networkError: true,
        isSuccess: false,
      };
    }
    return {
      errors: e?.response?.data,
      isSuccess: false,
    };
  } finally {
    source.cancel();
  }
};

export default fetchVerifyToken;

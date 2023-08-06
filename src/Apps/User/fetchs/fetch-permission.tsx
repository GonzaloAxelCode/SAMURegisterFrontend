import { URLBaseBackend } from "@/src/utlis/envs";
import { getTokensFromLocalStorage } from "@/src/utlis/localstorage";
import axios, { AxiosResponse, CancelTokenSource } from "axios";
import { Respuesta } from "../../Auth/auth.model";

const fetchGrantPermission = async (
  email: string,
  gratnPermission: boolean
): Promise<Respuesta> => {
  const source: CancelTokenSource = axios.CancelToken.source();
  const { tokens } = getTokensFromLocalStorage();
  try {
    const response: AxiosResponse = await axios.post(
      `${URLBaseBackend}/auth/${
        gratnPermission ? "ativate_permission" : "descativate_permission"}`,
      {
        email,
      },
      {
        cancelToken: source.token,
        headers: {
          Authorization: `JWT ${tokens?.accessToken}`,
        },
      }
    );
    if (response.status === 204) {
      return {
        isSuccess: true,
        data: response.data,
      };
    } else {
      return {
        isSuccess: false,
        errors: response?.data,
      };
    }
  } catch (e: any) {
    if (e.code === "ERR_NETWORK") {
      return {
        isSuccess: false,
      };
    }
    return {
      isSuccess: false,
      errors: e?.response?.data,
    };
  } finally {
    source.cancel();
  }
};

export default fetchGrantPermission;

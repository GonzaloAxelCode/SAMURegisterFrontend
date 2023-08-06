import { URLBaseBackend } from "@/src/utlis/envs";
import axios, { AxiosResponse, CancelTokenSource } from "axios";
import { Respuesta, UserRegisterData } from "../auth.model";

export const registerFetch = async (
  user: UserRegisterData
): Promise<Respuesta> => {
  const source: CancelTokenSource = axios.CancelToken.source();

  try {
    const response: AxiosResponse = await axios.post(
      `${URLBaseBackend}/auth/users/`,
      user,
      {
        cancelToken: source.token,
      }
    );
    if (response.status == 201) {
      return {
        isSuccess: true,
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
};

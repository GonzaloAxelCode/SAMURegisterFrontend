import axios, { AxiosResponse, CancelTokenSource } from "axios";

import { URLBaseBackend } from "@/src/utlis/envs";

interface Respuesta {
  networkError?: boolean;
  errors?: any;
  data?: any;
  isSuccess?: boolean;
}

const fetchCreateToken = async (userAuth: any): Promise<Respuesta> => {
  const source: CancelTokenSource = axios.CancelToken.source();
 
  try {
    const response: AxiosResponse = await axios.post(
      `${URLBaseBackend}/auth/jwt/create/`,
      userAuth
    );
    if (response.status === 200) {
      return {
        isSuccess: true,
        data: response?.data,
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
        networkError: true,
        isSuccess: false,
      };
    }
    return {
      errors: e.response?.data,

      isSuccess: false,
    };
  } finally {
    source.cancel();
  }
};

export default fetchCreateToken;

import { URLBaseBackend } from "@/src/utlis/envs";
import axios, { AxiosResponse, CancelTokenSource } from "axios";
import { DataActivation, Respuesta } from "../auth.model";

const fetchActivation = async (data: DataActivation): Promise<Respuesta> => {
  const source: CancelTokenSource = axios.CancelToken.source();
  try {
    const response: AxiosResponse = await axios.post(
      `${URLBaseBackend}/auth/users/activation/`,
      data,
      {
        cancelToken: source.token,
      }
    );
    
    if (response.status === 204) {
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
      errors: e?.response?.data,
      isSuccess: false,
    };
  } finally {
    source.cancel();
  }
};

export default fetchActivation;

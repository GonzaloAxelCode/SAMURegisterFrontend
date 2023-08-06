import { URLBaseBackend } from "@/src/utlis/envs";
import { getTokensFromLocalStorage } from "@/src/utlis/localstorage";
import axios, { AxiosResponse, CancelTokenSource } from "axios";
import { Respuesta } from "../../Auth/auth.model";

const fetchGetMedicos = async (): Promise<Respuesta> => {
  const source: CancelTokenSource = axios.CancelToken.source();
  const { tokens } = getTokensFromLocalStorage();
  try {
    const response: AxiosResponse = await axios.get(
      `${URLBaseBackend}/api/get-medicos`,
      {
        cancelToken: source.token,
        headers: {
          Authorization: `JWT ${tokens?.accessToken}`,
        },
      }
    );
    if (response.status === 200) {
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

export default fetchGetMedicos;

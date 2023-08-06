import { REDUCER_VERIFICAR_TOKEN } from "../authSlice";
import fetchVerifyToken from "../fetchs/fetch-verify-token";

export const verifyToken = async (dispatch: any) => {
  dispatch(
    REDUCER_VERIFICAR_TOKEN({
      loadingVerificarToken: true,
    })
  );
  const { isSuccess } = await fetchVerifyToken();

  if (isSuccess) {
    dispatch(
      REDUCER_VERIFICAR_TOKEN({
        isAuthenticated: true,
        loadingVerificarToken: false,
      })
    );
  } else {
    dispatch(
      REDUCER_VERIFICAR_TOKEN({
        isAuthenticated: false,
        loadingVerificarToken: false,
      })
    );
  }
};

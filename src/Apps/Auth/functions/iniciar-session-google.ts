import { getTokensFromLocalStorage, saveTokensToLocalStorage } from "@/src/utlis/localstorage";
import { REDUCER_INICIAR_SESSION_GOOGLE } from "../authSlice";
import fetchSigninGoogle from "../fetchs/fetch-signin-google";

const IniciarSessionGoogle = async (id_token_google: string, dispatch: any) => {
  dispatch(
    REDUCER_INICIAR_SESSION_GOOGLE({
      loadingInciarSessionGoogle: true,
      
    })
  );
  const { errors, data, isSuccess } = await fetchSigninGoogle(id_token_google);

  if (isSuccess) {
    saveTokensToLocalStorage({
      accessToken: data.access,
      refreshToken: data.refresh,
    });
    let { tokens } = getTokensFromLocalStorage();
    dispatch(REDUCER_INICIAR_SESSION_GOOGLE({
      loadingInciarSessionGoogle: false,
      refresh: tokens?.refreshToken,
      access: tokens?.accessToken,
      isAuthenticated: true,
    }));
    saveTokensToLocalStorage({
      accessToken: data?.access,
      refreshToken: data?.refresh,
    });
  } else {
    dispatch(REDUCER_INICIAR_SESSION_GOOGLE({
      loadingInciarSessionGoogle: false,
      errors: errors,
      isAuthenticated: false,
    }));
  }
};

export default IniciarSessionGoogle;

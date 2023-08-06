import {
  getTokensFromLocalStorage,
  saveTokensToLocalStorage,
} from "@/src/utlis/localstorage";
import { REDUCER_INICIAR_SESSION } from "../authSlice";
import fetchCreateToken from "../fetchs/fetch-create-token";

const iniciarSession = async (user: any, dispatch: any) => {
  dispatch(
    REDUCER_INICIAR_SESSION({
      loadingIniciarSession: true,
    })
  );
  const { isSuccess, errors, data } = await fetchCreateToken(user);
  if (isSuccess) {
    saveTokensToLocalStorage({
      accessToken: data.access,
      refreshToken: data.refresh,
    });
    let { tokens } = getTokensFromLocalStorage();
    dispatch(
      REDUCER_INICIAR_SESSION({
        refresh: tokens?.refreshToken,
        access: tokens?.accessToken,
        loadingIniciarSession: false,
        isAuthenticated: true,
      })
    );
  } else {
    dispatch(
      REDUCER_INICIAR_SESSION({
        loginErrors: errors,
        loadingIniciarSession: false,
        isAuthenticated: false,
      })
    );
  }
};

export default iniciarSession;

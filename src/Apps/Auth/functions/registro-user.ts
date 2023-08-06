import { REDUCER_LOAD_MESSAGE } from "../../Messages/messageSlice";
import { UserAuthRegister } from "../auth.model";
import { REDUCER_REGISTRO } from "../authSlice";
import { registerFetch } from "../fetchs/fetch-register";

export default async function signUp(user: UserAuthRegister, dispatch: any) {
  dispatch(
    REDUCER_REGISTRO({
      loadingRegistro: true,
    })
  );

  const { isSuccess, errors, networkError } = await registerFetch(user);

  if (isSuccess) {
    dispatch(
      REDUCER_LOAD_MESSAGE({
        severity: "success",
        text: "Registro exitoso, por favor revisa tu correo electronico.",
        show: true,
      })
    );
    dispatch(
      REDUCER_REGISTRO({
        loadingRegistro: false,
      })
    );
  } else {
    if (networkError) {
      dispatch(
        REDUCER_LOAD_MESSAGE({
          severity: "error",
          text: "Error del servidor",
          show: true,
        })
      );
    }
    dispatch(
      REDUCER_REGISTRO({
        loadingRegistro: false,
        registerErrors: errors,
      })
    );
  }
}



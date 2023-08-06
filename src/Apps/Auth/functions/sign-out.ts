import { clearTokensLocalstorage } from "@/src/utlis/localstorage";
import { Dispatch } from "redux";
import { REDUCER_CERRAR_SESSION } from "../authSlice";

export const signOut = async (dispatch: Dispatch<any>) => {
  
  dispatch(
    REDUCER_CERRAR_SESSION({
      refresh: "",
      access: "",
      isAuthenticated: false,
    })
  );
  await clearTokensLocalstorage();
};

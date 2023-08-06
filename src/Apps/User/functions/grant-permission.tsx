import { Dispatch } from "redux";
import { REDUCER_LOAD_MESSAGE } from "../../Messages/messageSlice";
import fetchGrantPermission from "../fetchs/fetch-permission";
import { REDUCER_GRANT_PERMISSION } from "../userSlice";

export const grantPermission = async (
  email: string,
  grantPermission: boolean,
  dispatch: Dispatch<any>
) => {
  dispatch(
    REDUCER_GRANT_PERMISSION({
      loadingGrantPermission: true,
    })
  );
  const { errors, isSuccess } = await fetchGrantPermission(
    email,
    grantPermission
  );
  if (isSuccess) {
    dispatch(
      REDUCER_GRANT_PERMISSION({
        loadingGrantPermission: false,
      })
    );
    dispatch(
      REDUCER_LOAD_MESSAGE({
        text: "Permisos actualizados para el usuario",
        severity: "info",
        show: true,
      })
    );
  } else {
    dispatch(
      REDUCER_LOAD_MESSAGE({
        text: "No se pudo otorgar",
        severity: "error",
        show: true,
      })
    );
    dispatch(
      REDUCER_GRANT_PERMISSION({
        errors,
        loadUsers: false,
      })
    );
  }

  return isSuccess;
};

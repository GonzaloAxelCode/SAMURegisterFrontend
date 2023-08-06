import { Dispatch } from "redux";
import { REDUCER_LOAD_MESSAGE } from "../../Messages/messageSlice";
import { REDUCER_ADD_ATENCION } from "../atencionSlice";
import fetchAddAtencion from "../fetchs/fetch-add-atencion";
import { AtencionAdd } from "../model.atencion";

export const addToAtencion= async (
  newDiagnostico: AtencionAdd,
  dispatch: Dispatch<any>
) => {
  dispatch(
    REDUCER_ADD_ATENCION({
      newAtencion: null,
      loadingAddAtencion: true,
    })
  );

  const { errors, isSuccess, data, networkError } = await fetchAddAtencion(
    newDiagnostico
  );
  if (isSuccess) {
    dispatch(
      REDUCER_LOAD_MESSAGE({
        severity: "success",
        text: "Diagnostico añadido con exito.",
        show: true,
      })
    );
    dispatch(
      REDUCER_ADD_ATENCION({
        newAtencion: data,
        loadingAddAtencion: false,
      })
    );
  } else {
    dispatch(
      REDUCER_LOAD_MESSAGE({
        severity: "error",
        text: "Error en agregar",
        show: true,
      })
    );
    dispatch(
      REDUCER_ADD_ATENCION({
        newAtencion: null,
        loadingAddAtencion: false,
      })
    );
  }

  return isSuccess;
};

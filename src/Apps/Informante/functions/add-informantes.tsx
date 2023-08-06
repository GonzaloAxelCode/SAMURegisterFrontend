import { Dispatch } from "redux";
import { REDUCER_LOAD_MESSAGE } from "../../Messages/messageSlice";

import fetchAddInformante from "../fetchs/fetch-add-informante";
import { REDUCER_ADD_INFORMANTE } from "../informanteSlice";
import { InformanteAdd } from "../model.informante";

export const addToInformante = async (
  newDiagnostico: InformanteAdd,
  dispatch: Dispatch<any>
) => {
  dispatch(
    REDUCER_ADD_INFORMANTE({
      newInformante: null,
      loadingAddInformante: true,
    })
  );

  const { errors, isSuccess, data, networkError } = await fetchAddInformante(
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
      REDUCER_ADD_INFORMANTE({
        newInformante: data,
        loadingAddInformante: false,
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
      REDUCER_ADD_INFORMANTE({
        newInformante: null,
        loadingAddInformante: false,
        errors,
      })
    );
  }

  return isSuccess;
};

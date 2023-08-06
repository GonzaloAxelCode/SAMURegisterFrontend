import { Dispatch } from "redux";
import { REDUCER_LOAD_MESSAGE } from "../../Messages/messageSlice";
import { DiagnosticoAdd, REDUCER_ADD_DIAGNOSTICO } from "../diagnosticoSlice";
import fetchAddDiagnostico from "../fetchs/ftech-add-diagnostico";

export const addToDiagnostico = async (
  newDiagnostico: DiagnosticoAdd,
  dispatch: Dispatch<any>
) => {
  dispatch(
    REDUCER_ADD_DIAGNOSTICO({
      loadingAdded: true,
      newDiagnostico: null,
    })
  );
  dispatch(
    REDUCER_LOAD_MESSAGE({
      severity: "success",
      text: "Diagnostico añadido con exito.",
      show: true,
    })
  );
  const { errors, isSuccess, data, networkError } = await fetchAddDiagnostico(
    newDiagnostico
  );
  if (isSuccess) {
    dispatch(
      REDUCER_ADD_DIAGNOSTICO({
        newDiagnostico: data,
        loadingAdded: false,
      })
    );
  } else {
    dispatch(
      REDUCER_ADD_DIAGNOSTICO({
        newDiagnostico: null,
        errors,
        loadingAdded: false,
      })
    );
  }

  return isSuccess;
};

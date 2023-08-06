import { Dispatch } from "redux";
import { REDUCER_LOAD_MESSAGE } from "../../Messages/messageSlice";
import fetchAddMedico from "../fetchs/fetch-add-medico";
import { REDUCER_ADD_MEDICO } from "../medicoSlice";
import { MedicoAdd } from "../model.medico";

export const addToMedico = async (
  newMedico: MedicoAdd,
  dispatch: Dispatch<any>
) => {
  dispatch(
    REDUCER_ADD_MEDICO({
      loadingAddMedico: true,
      newMedico: null,
    })
  );

  const { errors, isSuccess, data, networkError } = await fetchAddMedico(
    newMedico
  );
  if (isSuccess) {
    dispatch(
      REDUCER_ADD_MEDICO({
        newMedico: data,
        loadingAddMedico: false,
      })
    );
    dispatch(
      REDUCER_LOAD_MESSAGE({
        severity: "success",
        text: "Registro añadido con exito.",
        show: true,
      })
    );
  } else {
    dispatch(
      REDUCER_LOAD_MESSAGE({
        severity: "error",
        text: "Error al insertar",
        show: true,
      })
    );
    dispatch(
      REDUCER_ADD_MEDICO({
        newMedico: null,
        loadingAddMedico: false,
      })
    );
  }

  return isSuccess;
};

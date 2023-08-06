import { Dispatch } from "redux";
import { REDUCER_LOAD_MESSAGE } from "../../Messages/messageSlice";
import fetchAddPaciente from "../fetchs/fetch-add-paciente";
import { PacienteAdd } from "../model.paciente";
import { REDUCER_ADD_PACIENTE } from "../pacienteSlice";

export const addToPaciente = async (
  newDiagnostico: PacienteAdd,
  dispatch: Dispatch<any>
) => {
  dispatch(
    REDUCER_ADD_PACIENTE({
      newPaciente: null,
      loadingAddPaciente: true,
    })
  );

  const { errors, isSuccess, data, networkError } = await fetchAddPaciente(
    newDiagnostico
  );
  if (isSuccess) {
    dispatch(
      REDUCER_LOAD_MESSAGE({
        severity: "success",
        text: "Paciente añadido con exito.",
        show: true,
      })
    );
    dispatch(
      REDUCER_ADD_PACIENTE({
        newPaciente: data,
        loadingAddPaciente: false,
      })
    );
  } else {
    dispatch(
      REDUCER_LOAD_MESSAGE({
        severity: "error",
        text: "No se agrego.Servidor inactivo.",
        show: true,
      })
    );
    dispatch(
      REDUCER_ADD_PACIENTE({
        newPaciente: null,
        errors,
        loadingAddPaciente: false,
      })
    );
  }

  return isSuccess;
};

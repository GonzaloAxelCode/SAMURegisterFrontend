import { Dispatch } from "redux";
import fetchGetPacientes from "../fetchs/fetch-get-pacientes";
import { REDUCER_LOAD_PACIENTES } from "../pacienteSlice";

export const getPacientes = async (dispatch: Dispatch<any>) => {
  dispatch(
    REDUCER_LOAD_PACIENTES({
      loaderPacientes: true,
    })
  );
  const { errors, isSuccess, data, networkError } = await fetchGetPacientes();
  if (isSuccess) {
    dispatch(
      REDUCER_LOAD_PACIENTES({
        pacientes: data.results,
        countPacientes: data.count,
        next: data.next,
        previous: data.previous,
        loaderPacientes: false,
      })
    );
  } else {
    dispatch(
      REDUCER_LOAD_PACIENTES({
        errors,
        loaderPacientes: false,
      })
    );
  }

  return isSuccess;
};

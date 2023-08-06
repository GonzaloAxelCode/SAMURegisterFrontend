import { Dispatch } from "redux";
import { REDUCER_LOAD_DIAGNOSTICO } from "../diagnosticoSlice";
import fetchGetDiagnosticos from "../fetchs/fetch-get-diagnostico";

export const getDiagnosticos = async (dispatch: Dispatch<any>) => {
  dispatch(
    REDUCER_LOAD_DIAGNOSTICO({
      loaderDiagnosticos: true,
    })
  );
  const { errors, isSuccess, data, networkError } =
    await fetchGetDiagnosticos();
  if (isSuccess) {
    dispatch(
      REDUCER_LOAD_DIAGNOSTICO({
        diagnosticos: data.results,
        countDiagnosticos: data.count,
        next: data.next,
        previous: data.previous,
        loaderDiagnosticos: false,
      })
    );
  } else {
    dispatch(
      REDUCER_LOAD_DIAGNOSTICO({
        errors,
        loaderDiagnosticos: false,
      })
    );
  }

  return isSuccess;
};

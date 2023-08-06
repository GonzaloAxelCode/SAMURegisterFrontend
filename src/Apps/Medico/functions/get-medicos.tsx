import { Dispatch } from "redux";
import fetchGetMedicos from "../fetchs/fetch-get-medicos";
import { REDUCER_LOAD_MEDICOS } from "../medicoSlice";

export const getMedicos = async (dispatch: Dispatch<any>) => {
  dispatch(
    REDUCER_LOAD_MEDICOS({
      loaderMedicos: true,
    })
  );
  const { errors, isSuccess, data, networkError } = await fetchGetMedicos();
  if (isSuccess) {
    dispatch(
      REDUCER_LOAD_MEDICOS({
        medicos: data.results,
        countMedicos: data.count,
        next: data.next,
        previous: data.previous,
        loaderMedicos: false,
      })
    );
  } else {
    dispatch(
      REDUCER_LOAD_MEDICOS({
        loaderMedicos: false,
      })
    );
  }

  return isSuccess;
};

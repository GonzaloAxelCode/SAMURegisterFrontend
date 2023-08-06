import { Dispatch } from "redux";
import fetchGetInformantes from "../fetchs/fetch-get-informantes";
import { REDUCER_LOAD_INFORMANTES } from "../informanteSlice";

export const getInformantes = async (dispatch: Dispatch<any>) => {
  dispatch(
    REDUCER_LOAD_INFORMANTES({
      loaderInformantes: true,
    })
  );
  const { errors, isSuccess, data, networkError } = await fetchGetInformantes();
  if (isSuccess) {
    dispatch(
      REDUCER_LOAD_INFORMANTES({
        informantes: data.results,
        countInformantes: data.count,
        next: data.next,
        previous: data.previous,
        loaderInformantes: false,
      })
    );
  } else {
    dispatch(
      REDUCER_LOAD_INFORMANTES({
        loaderInformantes: false,
      })
    );
  }

  return isSuccess;
};

import { Dispatch } from "redux";
import fetchGetPersonal from "../fetchs/fetch-personal";
import { REDUCER_LOAD_PERSONAL } from "../personalSlice";

export const getPersonal = async (dispatch: Dispatch<any>) => {
  dispatch(
    REDUCER_LOAD_PERSONAL({
      loaderPersonal: true,
    })
  );
  const { errors, isSuccess, data, networkError } = await fetchGetPersonal();
  if (isSuccess) {
    dispatch(
      REDUCER_LOAD_PERSONAL({
        personal: data.results,
        countPersonal: data.count,
        next: data.next,
        previous: data.previous,
        loaderPersonal: false,
      })
    );
  } else {
    dispatch(
      REDUCER_LOAD_PERSONAL({
        errors,
        loaderPersonal: false,
      })
    );
  }

  return isSuccess;
};

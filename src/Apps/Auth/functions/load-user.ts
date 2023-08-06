import { Dispatch } from "redux";

import { REDUCER_LOAD_USER } from "../authSlice";
import getUserFetch from "../fetchs/get-user-fetch";

export const loadUser = async (dispatch: Dispatch<any>) => {
  dispatch(
    REDUCER_LOAD_USER({
      loadingLoadUser: true,
    })
  );
  const { errors, isSuccess, data, networkError } = await getUserFetch();
  if (isSuccess) {
    dispatch(
      REDUCER_LOAD_USER({
        user: data,
        loadingLoadUser: false,
      })
    );
  } else {
    dispatch(
      REDUCER_LOAD_USER({
        loadUserErrors: errors,
        loadingLoadUser: false,
      })
    );
  }

  return isSuccess;
};

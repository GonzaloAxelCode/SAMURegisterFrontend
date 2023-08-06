import { Dispatch } from "redux";
import { REDUCER_LOAD_ATENCIONES } from "../atencionSlice";
import fetchGetAtenciones from "../fetchs/fetch-get-atenciones";

export const getAtenciones = async (dispatch: Dispatch<any>) => {
  dispatch(
    REDUCER_LOAD_ATENCIONES({
      loaderAtenciones: true,
    })
  );
  const { errors, isSuccess, data, networkError } = await fetchGetAtenciones();
  if (isSuccess) {
    dispatch(
      REDUCER_LOAD_ATENCIONES({
        atenciones: data.results,
        countAtenciones: data.count,
        next: data.next,
        previous: data.previous,
        loaderAtenciones: false,
      })
    );
  } else {
    dispatch(
      REDUCER_LOAD_ATENCIONES({
        errors,
        loaderAtenciones: false,
      })
    );
  }

  return isSuccess;
};

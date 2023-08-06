import { Dispatch } from "redux";
import { REDUCER_LOAD_MESSAGE } from "../../Messages/messageSlice";
import fetchAddPersonal from "../fetchs/fetch-add-personal";
import { PersonalAdd } from "../model.personal";
import { REDUCER_ADD_PERSONAL } from "../personalSlice";

export const addToPersonal = async (
  newDiagnostico: PersonalAdd,
  dispatch: Dispatch<any>
) => {
  dispatch(
    REDUCER_ADD_PERSONAL({
      loadingAddPersonal: true,
      newPersonal: null,
    })
  );
  dispatch(
    REDUCER_LOAD_MESSAGE({
      severity: "success",
      text: "Diagnostico añadido con exito.",
      show: true,
    })
  );
  const { errors, isSuccess, data, networkError } = await fetchAddPersonal(
    newDiagnostico
  );
  if (isSuccess) {
    dispatch(
      REDUCER_ADD_PERSONAL({
        newPersonal: data,
        loadingAddPersonal: false,
      })
    );
  } else {
    dispatch(
      REDUCER_ADD_PERSONAL({
        newPersonal: null,
        errors,
        loadingAddPersonal: false,
      })
    );
  }

  return isSuccess;
};

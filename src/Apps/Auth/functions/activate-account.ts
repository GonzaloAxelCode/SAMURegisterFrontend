import { DataActivation } from "../auth.model";
import { REDUCER_ACTIVATE_ACCOUNT } from "../authSlice";
import fetchActivation from "../fetchs/fetch-activate";

const activateAccount = async (data: DataActivation, dispatch: any) => {
  dispatch(
    REDUCER_ACTIVATE_ACCOUNT({
      loadingActivateAccount: true,
    })
  );

  const { isSuccess, errors } = await fetchActivation(data);

  if (isSuccess) {
    dispatch(
      REDUCER_ACTIVATE_ACCOUNT({
        loadingActivateAccount: false,
      })
    );
  } else {
    dispatch(
      REDUCER_ACTIVATE_ACCOUNT({
        loadingActivateAccount: false,
        activateErrors: errors,
      })
    );
  }
  return isSuccess;
};

export default activateAccount;

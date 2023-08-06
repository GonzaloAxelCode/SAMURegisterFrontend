import { Dispatch } from "redux";
import fetchGetUsers from "../fetchs/fetch-get-users.";
import { REDUCER_LOAD_USERS } from "../userSlice";

export const getUsers = async (dispatch: Dispatch<any>) => {
  dispatch(
    REDUCER_LOAD_USERS({
      loadUsers: true,
    })
  );
  const { errors, isSuccess, data, networkError } = await fetchGetUsers();
  if (isSuccess) {
    dispatch(
      REDUCER_LOAD_USERS({
        users: data,
        countUsers: data?.lenght,
        loadUsers: false,
      })
    );
  } else {
    dispatch(
      REDUCER_LOAD_USERS({
        errors,
        loadUsers: false,
      })
    );
  }

  return isSuccess;
};

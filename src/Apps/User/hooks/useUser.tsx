import { RootState } from "@/src/modern_redux/store";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../functions/get-users";
import { grantPermission } from "../functions/grant-permission";

const useUser = () => {
  const dispatch = useDispatch();
  const { loadUsers, users, countUsers, loadingGrantPermission } = useSelector(
    (state: RootState) => state.User
  );

  const loadAllUsers = async () => {
    await getUsers(dispatch);
  };

  const grantPermissionWithEmail = async (
    email: string,
    permission: boolean
  ) => {
    await grantPermission(email, permission, dispatch);
  };
  return {
    loadAllUsers,
    loadUsers,
    users,
    countUsers,
    grantPermissionWithEmail,
    loadingGrantPermission,
  };
};

export default useUser;

import { createSlice } from "@reduxjs/toolkit";
export interface UserData {
  users?: User[];
  countUsers?: number;
  loadUsers?: boolean;
  errors?: any;
  loadingGrantPermission?: boolean;
}

export interface User {
  id?: number;
  last_login?: string | null;
  is_superuser?: boolean;
  email?: string;
  nickname?: string;
  first_name?: string;
  last_name?: string;
  photo_url?: string;
  date_joined?: string;
  is_active?: boolean;
  is_staff?: boolean;
  is_registered_with_google?: boolean;
  desactivate_account?: boolean;
  groups?: any[];
  user_permissions?: any[];
}

const UserState: UserData = {
  users: [],
  countUsers: 0,
  loadUsers: false,
  errors: {},
  loadingGrantPermission: false,
};

const funcionPura = (state: UserData, action: { payload: UserData }) => ({
  ...state,
  ...action.payload,
});

export const userSlice = createSlice({
  name: "user",
  initialState: UserState,
  reducers: {
    REDUCER_LOAD_USERS: funcionPura,
    REDUCER_GRANT_PERMISSION: funcionPura,
  },
});

export const { REDUCER_LOAD_USERS, REDUCER_GRANT_PERMISSION } =
  userSlice.actions;

export default userSlice.reducer;

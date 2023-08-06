import { getTokensFromLocalStorage } from "@/src/utlis/localstorage";
import { createSlice } from "@reduxjs/toolkit";
import { LoginErrors } from "./auth.model";
export interface UserAccountData {
  last_login?: string;
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
  groups?: string[];
  user_permissions?: string[];
  
}

const { tokens } = getTokensFromLocalStorage();
// Tipos
export interface AuthStateType {
  loadingIniciarSession?: boolean;
  loadingInciarSessionGoogle?: boolean;
  loadingRegistro?: boolean;
  loadingRegistroGoogle?: boolean;
  loadingCerrarSession?: boolean;
  loadingVerificarToken?: boolean;
  loadingRefrescarToken?: boolean;
  loadingLoadUser?: boolean;
  loadingActivateAccount?: boolean;
  user?: UserAccountData;
  errors?: any;
  access?: string;
  refresh?: string;
  isAuthenticated?: boolean;
  loginErrors?: LoginErrors;
  registerErrors?: any;
  activateErrors?: any;
  loadUserErrors?: any;
}

//estado inicial (no poner Null)
const AuthState: AuthStateType = {
  loadingIniciarSession: false,
  loadingInciarSessionGoogle: false,
  loadingRegistro: false,
  loadingRegistroGoogle: false,
  loadingCerrarSession: false,
  loadingVerificarToken: false,
  loadingRefrescarToken: false,
  loadingLoadUser: false,
  loadingActivateAccount: false,
  user: {},
  loginErrors: {},
  registerErrors: {},
  activateErrors: {},
  loadUserErrors: {},
  access: tokens?.accessToken || "",
  refresh: tokens?.refreshToken || "",
  isAuthenticated: false,
};

//funcion Pura
const funcionPura = (
  state: AuthStateType,
  action: { payload: AuthStateType }
) => ({
  ...state,
  ...action.payload,
});

//Slice
export const authSlice = createSlice({
  name: "auth",
  initialState: AuthState,
  //Reducers
  reducers: {
    REDUCER_INICIAR_SESSION: funcionPura,
    REDUCER_INICIAR_SESSION_GOOGLE: funcionPura,
    REDUCER_REGISTRO: funcionPura,
    REDUCER_REGISTRO_GOOGLE: funcionPura,
    REDUCER_CERRAR_SESSION: funcionPura,
    REDUCER_VERIFICAR_TOKEN: funcionPura,
    REDUCER_REFRESCAR_TOKEN: funcionPura,
    REDUCER_LOAD_USER: funcionPura,
    REDUCER_ACTIVATE_ACCOUNT: funcionPura,
  },
});

export const {
  REDUCER_INICIAR_SESSION,
  REDUCER_INICIAR_SESSION_GOOGLE,
  REDUCER_REGISTRO,
  REDUCER_REGISTRO_GOOGLE,
  REDUCER_CERRAR_SESSION,
  REDUCER_VERIFICAR_TOKEN,
  REDUCER_REFRESCAR_TOKEN,
  REDUCER_LOAD_USER,
  REDUCER_ACTIVATE_ACCOUNT,
} = authSlice.actions;

export default authSlice.reducer;

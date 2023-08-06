import { RootState } from "@/src/modern_redux/store";
import { GoogleLogin } from "@react-oauth/google";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserAuthRegister } from "../auth.model";
import { REDUCER_INICIAR_SESSION } from "../authSlice";
import activateAccount from "../functions/activate-account";
import { verifyToken } from "../functions/check-auth";
import iniciarSession from "../functions/iniciar-session";
import IniciarSessionGoogle from "../functions/iniciar-session-google";
import { loadUser } from "../functions/load-user";
import signUp from "../functions/registro-user";
import { signOut } from "../functions/sign-out";
const useAuth = () => {
  const [timeCountTimeActivate, setCountTimeActivate] = useState(6);
  const dispatch = useDispatch();
  const router = useRouter();
  const {
    isAuthenticated,
    loadingIniciarSession,
    loginErrors,
    registerErrors,
    loadingRegistro,
    activateErrors,
    loadingActivateAccount,
    user,
    errors,
    loadingLoadUser,
    loadingVerificarToken,
  } = useSelector((state: RootState) => state.Auth);

  const authGoogle = async (token_google: any) => {
    await IniciarSessionGoogle(token_google, dispatch);
    await verifyToken(dispatch);
    await loadUser(dispatch);
  };
  const checkAuthenticated = async () => {
    await verifyToken(dispatch);
  };

  const LogOutFull = async () => {
    await signOut(dispatch);
  };

  const SignInWithEmail = async (user: any) => {
    await iniciarSession(user, dispatch);
  };
  const clearErrors = () => {
    dispatch(
      REDUCER_INICIAR_SESSION({
        loginErrors: {},
        activateErrors: {},
        errors: {},
        registerErrors: {},
      })
    );
  };

  const registerUserWithEmail = async (user: UserAuthRegister) => {
    await signUp(user, dispatch);
  };

  const activateAccountFromEmail = async (data: any) => {
    await activateAccount(data, dispatch);

    setInterval(() => {
      setCountTimeActivate(
        (timeCountTimeActivate) => timeCountTimeActivate - 1
      );
    }, 1000);
  };

  const loadUserAccount = async () => {
    await loadUser(dispatch);
  };

  useEffect(() => {
    if (timeCountTimeActivate <= 0) {
      router.push("/");
    }
    console.log("useEffect useAuth");
  }, [timeCountTimeActivate]);

  return {
    GoogleLogin,
    authGoogle,
    isAuthenticated,
    loadingLoadUser,
    SignInWithEmail,
    checkAuthenticated,
    LogOutFull,
    loadingIniciarSession,
    loadingVerificarToken,
    loadingRegistro,
    loginErrors,
    registerErrors,
    clearErrors,
    registerUserWithEmail,
    activateErrors,
    loadingActivateAccount,
    activateAccountFromEmail,
    loadUserAccount,
    timeCountTimeActivate,
    user,
    errors,
    is_admin: user?.is_superuser,
    has_permissions: user?.desactivate_account,
  };
};

export default useAuth;

import useAuth from "@/src/Apps/Auth/hooks/useAuth";
import { Message } from "primereact/message";
import { useState } from "react";

export default function LoginBox({ show, changeBox }: any) {
  const {
    GoogleLogin,
    authGoogle,
    SignInWithEmail,
    loadingIniciarSession,
    loginErrors,
    clearErrors,
    errors,
  } = useAuth();
  const [loginForm, setLoginForm] = useState<any>({
    email: "",
    password: "",
  });
  return (
    <div className={` ${!show && "hidden"} flex min-h-full`}>
      <div className="flex h-screen flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96 ">
          <div className="w-full flex flex-col justify-center items-center">
            <img
              className="text-center"
              width={200}
              src="https://res.cloudinary.com/ddksrkond/image/upload/v1687316127/samu/download-removebg-preview_iidvap.png"
              alt="Your Company"
            />
            <h2 className="text-red-500 text-xl mt-4 font-bold">
              Incio de Session
            </h2>
          </div>

          <div className="mt-8">
            <div className="mt-6">
              <form
                className="space-y-6"
                onSubmit={async (e) => {
                  e.preventDefault();
                  clearErrors();
                  SignInWithEmail(loginForm);
                }}
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Usuario Email
                  </label>
                  <div className="mt-1">
                    <input
                      placeholder="Ingresa tu gmail"
                      onChange={(e: any) => {
                        clearErrors();
                        setLoginForm({
                          ...loginForm,
                          email: e.target.value,
                        });
                      }}
                      type="email"
                      required
                      className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                  <small id="email-help" style={{ color: "red" }}>
                    {loginErrors?.email}
                  </small>
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Contraseña
                  </label>
                  <div className="mt-1">
                    <input
                      placeholder="Ingresa tu password"
                      onChange={(e: any) => {
                        clearErrors();
                        setLoginForm({
                          ...loginForm,
                          password: e.target.value,
                        });
                      }}
                      name="password"
                      type="password"
                      required
                      className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                  <small id="email-help" style={{ color: "red" }}>
                    {loginErrors?.password}
                  </small>
                  <small id="email-help" style={{ color: "red" }}>
                    {loginErrors?.detail}
                  </small>
                </div>

                <div className="flex items-center justify-between">
                  {/* Registrar usuario al sistema */}
                  <div className="flex items-center">
                    <a
                      onClick={() => changeBox("register")}
                      href="#"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Registrarse
                    </a>
                  </div>

                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Olvido su contraseña?
                    </a>
                  </div>
                </div>

                <div className="flex flex-col items-center w-full">
                  <button
                    onClick={() => clearErrors()}
                    type="submit"
                    className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    {loadingIniciarSession && <span>Loading...</span>}
                    {!loadingIniciarSession && <span>Entrar</span>}
                  </button>
                  <span className="text center">or</span>
                  <div
                    className="w-full flex justify-center"
                    onClick={() => clearErrors()}
                  >
                    <GoogleLogin
                      width="384px"
                      size="large"
                      onSuccess={(credentialResponse) => {
                        authGoogle(credentialResponse.credential);
                      }}
                      onError={() => {
                        console.log("Login Failed");
                      }}
                    />
                  </div>
                  <div className="w-full mt-5">
                    {errors?.error && (
                      <Message
                        className="w-full"
                        severity="error"
                        text={errors?.error}
                      />
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="relative hidden w-0 flex-1 lg:block">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="https://res.cloudinary.com/dswooop8k/image/upload/v1685466180/standard_samu_m0klc4.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

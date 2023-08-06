import { UserAuthRegister } from "@/src/Apps/Auth/auth.model";
import useAuth from "@/src/Apps/Auth/hooks/useAuth";
import { Tooltip } from "primereact/tooltip";
import { useState } from "react";

const RegisterBox = ({ show, changeBox }: any) => {
  const {
    registerUserWithEmail,
    registerErrors,
    loadingRegistro,
    clearErrors,
  } = useAuth();

  const [registerForm, setRegisterForm] = useState<UserAuthRegister>({
    email: "",
    nickname: "",
    password: "",
    re_password: "",
    last_name: "",
    first_name: "",
  });
  return (
    <div
      className={`${
        !show && "hidden"
      } min-h-full flex flex-col justify-center  sm:px-6 lg:px-8`}
    >
      <div className=" sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
            <img
              width={200}
              className="mx-auto"
              src="https://res.cloudinary.com/ddksrkond/image/upload/v1687316127/samu/download-removebg-preview_iidvap.png"
              alt="Workflow"
            />{" "}
            <h2 className="text-red-500 text-xl mt-4 font-bold">
              Registro de Usuario
            </h2>
          </div>
          <form
            className="space-y-1 mt-4"
            onSubmit={(e) => {
              e.preventDefault();

              clearErrors();
              registerUserWithEmail(registerForm);
            }}
          >
            <div>
              <div className="block text-sm font-medium text-gray-700">
                <span className="flex">
                  Nombre Usuario Unico
                  <Tooltip target=".custom-target-icon" />
                  <i
                    className="custom-target-icon p-text-secondary p-overlay-badge"
                    data-pr-tooltip="Debe ser unico"
                    data-pr-position="right"
                    data-pr-at="right top"
                    data-pr-my="left center-2"
                    style={{ fontSize: "10px", cursor: "pointer" }}
                  >
                    <img
                      className="w-5 h-5"
                      src="https://icons.veryicon.com/png/o/miscellaneous/cockpit/tooltip-2.png"
                      alt=""
                    />
                  </i>
                </span>
              </div>

              <div className="mt-1">
                <input
                  placeholder="Ingresa tu usuario unico"
                  onChange={(e) => {
                    clearErrors();
                    setRegisterForm({
                      ...registerForm,
                      nickname: e.target.value,
                    });
                  }}
                  name="nickname"
                  type="text"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <span
                className="text-xs"
                style={{ color: "red", maxWidth: "250px" }}
              >
                {registerErrors?.nickname}
              </span>
            </div>

            <div>
              <div className="block text-sm font-medium text-gray-700">
                Nombres
              </div>
              <div className="mt-1">
                <input
                  placeholder="Ingresa tus nombres"
                  onChange={(e) => {
                    clearErrors();
                    setRegisterForm({
                      ...registerForm,
                      first_name: e.target.value,
                    });
                  }}
                  name="first_name"
                  type="text"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <span
                className="text-xs"
                style={{ color: "red", maxWidth: "250px" }}
              >
                {registerErrors?.first_name}
              </span>
            </div>

            <div>
              <label
                htmlFor="last_name"
                className="block text-sm font-medium text-gray-700"
              >
                Apellidos
              </label>
              <div className="mt-1">
                <input
                  placeholder="Ingresa tus apellidos"
                  onChange={(e) => {
                    clearErrors();
                    setRegisterForm({
                      ...registerForm,
                      last_name: e.target.value,
                    });
                  }}
                  name="last_name"
                  type="text"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <span
                className="text-xs"
                style={{ color: "red", maxWidth: "250px" }}
              >
                {registerErrors?.last_name}
              </span>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Correo Electronico
              </label>
              <div className="mt-1">
                <input
                  placeholder="Ingresa tu Email"
                  onChange={(e) => {
                    clearErrors();
                    setRegisterForm({
                      ...registerForm,
                      email: e.target.value,
                    });
                  }}
                  name="email"
                  type="email"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <span
                className="text-xs "
                style={{ color: "red", maxWidth: "250px" }}
              >
                {registerErrors?.email}
              </span>{" "}
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Contraseña
              </label>
              <div className="mt-1">
                <input
                  placeholder="Ingresa tu password"
                  onChange={(e) => {
                    clearErrors();
                    setRegisterForm({
                      ...registerForm,
                      password: e.target.value,
                    });
                  }}
                  name="password"
                  type="password"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <span
                className="text-xs"
                style={{ color: "red", maxWidth: "250px" }}
              >
                {registerErrors?.password}
              </span>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Repite la Contraseña
              </label>
              <div className="mt-1">
                <input
                  placeholder="Repite tu password"
                  name="re_password"
                  type="password"
                  onChange={(e) => {
                    clearErrors();
                    setRegisterForm({
                      ...registerForm,
                      re_password: e.target.value,
                    });
                  }}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <span
                className="text-xs"
                style={{ color: "red", maxWidth: "250px" }}
              >
                {registerErrors?.re_password}
                {registerErrors?.detail}
                {registerErrors?.non_field_errors}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm flex justify-center">
                <a
                  onClick={() => changeBox("login")}
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Ya tienes una Cuenta?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-sky-600 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
              >
                {loadingRegistro && <span>Loading ...</span>}
                {!loadingRegistro && <span>Registrarse</span>}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterBox;

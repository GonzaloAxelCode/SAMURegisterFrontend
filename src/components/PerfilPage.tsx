import useAuth from "../Apps/Auth/hooks/useAuth";

const PerfilPage = () => {

  function formattedDate(dateString: any) {
    const date = new Date(dateString);

    const options: any = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };

    return date.toLocaleDateString("es-ES", options);
  }
  const { user } = useAuth();
  return (
    <div className="p-6">
      <div className="px-4 sm:px-0">
        <h3
          className="text-base font-semibold leading-7 text-gray-900 text-xl"
          style={{ fontSize: "23px" }}
        >
          Informacion de Perfil
        </h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
          Informacion del usuario autenticado
        </p>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Username
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {user?.nickname}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Nombres y Apellidos
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {user?.first_name} {user?.last_name}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Email
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {user?.email}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Tipo de Usuario
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {user?.is_superuser ? " ADMIN" : "USUARIO ORDINARIO"}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Estado de la cuenta
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {user?.is_active ? "ACTIVO" : "NO ESTA ACTIVO"}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Permisos de la cuenta
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {user?.desactivate_account
                ? "PERMISOS DESACTIVADOS"
                : "PERMISOS ACTIVADOS"}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Informacion de su Permisos
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {user?.is_superuser ? (
                <span>
                  Esta cuenta es de tipo ADMINISTRADOR, tiene la autoridad para
                  dar permisos a los usuarios ORDINARIOS para otorgar y denegar
                  sus permisos.
                </span>
              ) : (
                <span>
                  {user?.desactivate_account
                    ? "Esta cuenta esta desactivada, si no se solicita al administrador , este procedera a eliminar la cuenta por la inactividad."
                    : "La cuenta esta activada por el administrador, puede registrar y actualizar correctamente los registros, pero no tiene el permiso para eliminar."}
                </span>
              )}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Ultima Session
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {formattedDate(user?.last_login)}
              
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default PerfilPage;

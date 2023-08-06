import useAuth from "@/src/Apps/Auth/hooks/useAuth";
interface Props {
  uid: string;
  token: string;
}

const Activate = ({ uid, token }: Props) => {
  const {
    activateAccountFromEmail,
    loadingActivateAccount,
    activateErrors,
    clearErrors,
    timeCountTimeActivate,
  } = useAuth();
  return (
    <div
      className={` min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8`}
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          className="mx-auto h-12 w-auto"
          src="https://res.cloudinary.com/dswooop8k/image/upload/v1685465908/logof_c5rsqx.png"
          alt="Workflow"
        />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Regristrate en el Sistema
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              clearErrors();
              activateAccountFromEmail({ uid, token });
            }}
          >
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-sky-600 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
              >
                {loadingActivateAccount && <span>Loading ...</span>}
                {!loadingActivateAccount && <span>Activar Cuenta</span>}
              </button>
            </div>
            <span className="text-sm text-red-500">
              {activateErrors?.detail}
            </span>
            <span className="text-sm text-red-500">
              {activateErrors?.token}
            </span>
            <span className="text-sm text-red-500">{activateErrors?.uid}</span>
            <br />
            {timeCountTimeActivate !== 6 && (
              <span className="text-sm ">
                Redirigiendo... en {timeCountTimeActivate}
              </span>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};
export async function getServerSideProps({
  query,
}: {
  query: { uid: string; token: string };
}) {
  const { uid, token } = query;

  return {
    props: { uid, token: token[0] },
  };
}
export default Activate;

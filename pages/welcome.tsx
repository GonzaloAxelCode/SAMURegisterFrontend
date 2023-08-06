import { useRouter } from "next/router";
const Welcome = () => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-center mt-8">
      <div className="flex items-center flex-col justify-center">
        <div className="mb-10 text-center">
          <p className="font-heading text-2xl font-semibold leading-normal leading-normal text-muted-800 ">
            <span>Bienvenido al sistema de Registros SAMU Register</span>
          </p>
          <p className="font-alt text-sm font-normal leading-normal leading-normal text-muted-800 ">
            <span>
              Or you can skip this step. You can always add more files later
            </span>
          </p>
        </div>
        <div className="px-4">
          <div className="flex min-h-[400px] items-center justify-center">
            <div className="mx-auto w-full text-center max-w-xs">
              <div className="mx-auto max-w-xs">
                <img
                  src="https://tairo.cssninja.io/img/illustrations/wizard/upload.svg"
                  className="mx-auto max-w-[210px] rounded-full"
                  alt="Upload files"
                />
              </div>
              <div className="mx-auto max-w-sm">
                <h4 className="font-heading text-xl font-medium leading-normal leading-normal text-muted-800 mb-1 mt-4 dark:text-white">
                  Upload project files
                </h4>
                <p className="text-muted-400 font-sans text-sm">
                  Add files to your project if you have them handy. Dont worry,
                  you can also manage files later.
                </p>
                <div className="mt-2 text-center">
                  <button
                    onClick={() => router.push("/")}
                    type="button"
                    className="text-primary-500 font-sans underline underline-offset-4"
                  >
                    {" "}
                    Continuar{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;

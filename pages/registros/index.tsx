import Layout from "@/src/components/Layout";
import useCountRegisters from "@/src/hooks/useCountRegisters";
import Link from "next/link";

const Register = () => {
  const {
    countPersonal,
    countPacientes,
    countMedicos,
    countInformantes,
    countDiagnosticos,
    countAtenciones,
  } = useCountRegisters();

  const items = [
    {
      label: "MEDICOS",
      icon: "pi",
      href: "/registros/medicos",
      description:
        "Registra y gestiona la información de los médicos de emergencia del SAMU.",
      count: countMedicos,
    },
    {
      label: "PERSONAL MEDICO",
      icon: "pi",
      href: "/registros/personal_medico",
      count: countPersonal,
      description:
        "Registro del personal médico especializado en emergencias SAMU.",
    },
    {
      label: "PACIENTE",
      icon: "pi",
      href: "/registros/paciente",
      count: countPacientes,
      description:
        "Administra la información de pacientes atendidos en situaciones críticas.",
    },
    {
      label: "INFORMANTE ATENCION",
      icon: "pi",
      href: "/registros/informante_atencion",
      count: countInformantes,
      description:
        "Gestiona los informantes de atención en situaciones de emergencia.",
    },
    {
      label: "DIAGNOSTICO",
      icon: "pi",
      href: "/registros/diagnostico",
      count: countDiagnosticos,
      description:
        "Registra y consulta diagnósticos médicos en situaciones de emergencia.",
    },
    {
      label: "ATENCION",
      icon: "pi",
      href: "/registros/atencion",
      count: countAtenciones,
      description:
        "Realiza el seguimiento de las atenciones médicas en emergencias.",
    },
  ];
  return (
    <Layout>
      <div className="mx-auto w-full max-w-5xl">
        <div className="relative w-full">
          <div className="absolute end-0 top-2 z-20">
            <div className="group/nui-dropdown inline-flex items-center justify-center text-right z-20">
              <div
                data-headlessui-state=""
                className="relative text-left w-9 h-9"
              >
                <div
                  id="headlessui-menu-button-307"
                  aria-haspopup="menu"
                  aria-expanded="false"
                ></div>
                {/**/}
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col">
            <div className="mx-auto w-full max-w-md text-center">
              <p
                className="font-heading  font-medium leading-normal leading-normal mt-4"
                style={{ fontSize: "30px" }}
              >
                Registros
              </p>
              <p className="font-alt text-sm font-normal leading-normal leading-normal text-muted-400 mb-3 mt-1">
                Hey everyone, Iam a product manager from New York and Iam
                looking for new opportunities in the software business.
              </p>
              <div className="divide-muted-200 divide-muted-800 flex items-center justify-center divide-x">
                <div className="text-muted-400 flex h-8 items-center gap-1 px-4">
                  <svg
                    data-v-cd102a71=""
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    className="icon h-5 w-5"
                    width="1em"
                    height="1em"
                    viewBox="0 0 256 256"
                  >
                    <g fill="currentColor">
                      <path
                        d="M128 112a36 36 0 1 1 36-36a36 36 0 0 1-36 36Zm60 24a36 36 0 1 0 36 36a36 36 0 0 0-36-36Zm-120 0a36 36 0 1 0 36 36a36 36 0 0 0-36-36Z"
                        opacity=".2"
                      />
                      <path d="M172 76a44 44 0 1 0-44 44a44.05 44.05 0 0 0 44-44Zm-44 28a28 28 0 1 1 28-28a28 28 0 0 1-28 28Zm60 24a44 44 0 1 0 44 44a44.05 44.05 0 0 0-44-44Zm0 72a28 28 0 1 1 28-28a28 28 0 0 1-28 28ZM68 128a44 44 0 1 0 44 44a44.05 44.05 0 0 0-44-44Zm0 72a28 28 0 1 1 28-28a28 28 0 0 1-28 28Z" />
                    </g>
                  </svg>
                  <p className="font-sans text-sm font-normal leading-normal leading-normal">
                    500+ registros
                  </p>
                </div>
                <div className="text-muted-400 hidden h-8 items-center gap-1 px-4 sm:flex">
                  <svg
                    data-v-cd102a71=""
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    className="icon h-5 w-5"
                    width="1em"
                    height="1em"
                    viewBox="0 0 256 256"
                  >
                    <g fill="currentColor">
                      <path
                        d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96Z"
                        opacity=".2"
                      />
                      <path d="M173.66 98.34a8 8 0 0 1 0 11.32l-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 0ZM232 128A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88Z" />
                    </g>
                  </svg>
                  <p className="font-sans text-sm font-normal leading-normal leading-normal">
                    {items.length} modulos
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5">
            <section className="pb-[100px]">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7 pt-12 p-3">
                {items.map((el: any, index: number) => {
                  return (
                    <Link href={el.href} key={index}>
                      {/*  */}
                      <div
                        style={{ transition: "0.1s all" }}
                        className="relative flex flex-col bg-white rounded-xl overflow-hidden shadow-lg hover:border-black border-2"
                      >
                        <div className="p-5">
                          <img
                            alt="Wallet"
                            src="https://tairo.cssninja.io/img/illustrations/dashboards/health/doctor.svg"
                            className="mb-5 w-[60px] h-[60px]"
                          />
                          <h6
                            className="text-gray-900 font-bold"
                            style={{ fontSize: 14 }}
                          >
                            {" "}
                            {el.label}{" "}
                          </h6>
                          <small className="text-gray-700 dark:text-gray-400 py-2 text-xs">
                            {" "}
                            {el.description}{" "}
                          </small>
                          <div className="text-red-500 font-bold ">
                            <span className="text-xl">{el.count}</span> <span> registros</span>
                          </div>
                          <div className="flex items-center mt-4">
                            <svg
                              width={20}
                              height={20}
                              viewBox="0 0 16 16"
                              className="fill-gray-700 dark:fill-white z-10"
                            >
                              <path d="M15.7063 8.70625L11.7063 12.7063C11.3153 13.0972 10.6825 13.0966 10.2922 12.7063C9.90156 12.3156 9.90156 11.6828 10.2922 11.2922L12.5875 9H1C0.447187 9 0 8.55313 0 7.97188C0 7.39063 0.447187 7 1 7H12.5875L10.2944 4.70688C9.90375 4.31625 9.90375 3.68344 10.2944 3.29282C10.685 2.90219 11.3178 2.90219 11.7084 3.29282L15.7084 7.29282C16.0969 7.68438 16.0969 8.31563 15.7063 8.70625Z" />
                            </svg>
                            <div
                              style={{ width: 10, height: 10 }}
                              className="rounded-full bg-primary-100 dark:bg-primary-300 -ml-1"
                            />
                          </div>
                        </div>
                        <img
                          alt="Wallet"
                          src="https://res.cloudinary.com/ddksrkond/image/upload/v1687316127/samu/download-removebg-preview_iidvap.png"
                          className="mb-5 w-[40px] h-[15px] absolute right-3 top-3"
                        />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Register;

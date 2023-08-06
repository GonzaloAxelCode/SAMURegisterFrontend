import Layout from "@/src/components/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <div className="flex items-center justify-center pt-32 ">
        <div className="bg-white">
          <div className="mx-auto max-w-7xl py-12 px-4 text-center sm:px-6 lg:py-16 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              <span className="block">
                ¡Bienvenido al sistema de llamadas de emergencia!
              </span>
            </h2>
            <br></br>
            <h6 className="text-1xl font-sans tracking-tight text-gray-600  text-sm">
              <span className="block">
                Estimado personal de trabajo, este sistema le permitirá ingresar
                y administrar los datos de las llamadas de emergencia recibidas.
              </span>
            </h6>

            <div className="mt-8 flex justify-center">
              <div className="inline-flex rounded-md shadow">
                <Link
                  href="/registros"
                  className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
                >
                  Ingresar Datos
                </Link>
              </div>
              <div className="ml-3 inline-flex">
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-100 px-5 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200"
                >
                  No Emergencia
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-6 sm:px-0 max-w-sm"></div>
    </Layout>
  );
}

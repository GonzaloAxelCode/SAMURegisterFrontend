import { DiagnosticoAdd } from "@/src/Apps/Diagnostico/diagnosticoSlice";
import useDiagnostico from "@/src/Apps/Diagnostico/hooks/useDiagnostico";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
export default function FormularioDiagnostico({
  isHidden = false,
}: {
  isHidden?: boolean;
}) {
  type ModeForm = "add" | "update";
  const [modeForm, setModeForm] = useState<ModeForm>("add");
  const { addNewDiganostico, loadingAdded, diagnosticos } = useDiagnostico();
  const validationSchema = Yup.object({
    condicion_antes: Yup.string().max(200),
    observaciones: Yup.string().max(200),
    condicion_despues: Yup.string().max(200),
    derivado_EESS: Yup.string().max(100),
    derivado_medico: Yup.string().max(100),
  });

  const [initialValues, setInitialValues] = useState<DiagnosticoAdd>({
    condicion_antes: "",
    observaciones: "",
    condicion_despues: "",
    derivado_EESS: "",
    derivado_medico: "",
  });

  const handleSubmit = (values: DiagnosticoAdd) => {
    addNewDiganostico(values);
    console.log(values);
  };
  //
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
  if (isHidden) {
    return null;
  }
  return (
    <div className="grid  grid-cols-1 lg:grid-cols-2 gap-2 sticky">
      <div className="col-span-1 ">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          enableReinitialize={true}
        >
          {({ dirty, resetForm }) => (
            <Form className="space-y-8 divide-y divide-gray-200">
              <div className="pt-8 mb-12">
                <div>
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    Información del Diagnóstico
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Por favor complete los siguientes campos del formulario:
                  </p>
                </div>
                <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                  {/* Condición Antes */}
                  <div className="sm:col-span-6">
                    <label
                      htmlFor="condicion_antes"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Condición Antes
                    </label>
                    <Field
                      as="textarea"
                      id="condicion_antes"
                      name="condicion_antes"
                      rows={3}
                      style={{ border: "1px solid #DADADA" }}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                    <ErrorMessage
                      name="condicion_antes"
                      component="div"
                      className="text-red-500"
                    />
                  </div>

                  {/* Observaciones */}
                  <div className="sm:col-span-6">
                    <label
                      htmlFor="observaciones"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Observaciones
                    </label>
                    <Field
                      style={{ border: "1px solid #DADADA" }}
                      as="textarea"
                      id="observaciones"
                      name="observaciones"
                      rows={3}
                      className="block   w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500  sm:text-sm"
                    />
                    <ErrorMessage
                      name="observaciones"
                      component="div"
                      className="text-red-500"
                    />
                  </div>

                  {/* Condición Después */}
                  <div className="sm:col-span-6">
                    <label
                      htmlFor="condicion_despues"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Condición Después
                    </label>
                    <Field
                      as="textarea"
                      style={{ border: "1px solid #DADADA" }}
                      id="condicion_despues"
                      name="condicion_despues"
                      rows={3}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                    <ErrorMessage
                      name="condicion_despues"
                      component="div"
                      className="text-red-500"
                    />
                  </div>

                  {/* Derivado a EESS */}
                  <div className="sm:col-span-6">
                    <label
                      htmlFor="derivado_EESS"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Derivado a EESS
                    </label>
                    <Field
                      type="text"
                      id="derivado_EESS"
                      name="derivado_EESS"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                    <ErrorMessage
                      name="derivado_EESS"
                      component="div"
                      className="text-red-500"
                    />
                  </div>

                  {/* Derivado a Médico */}
                  <div className="sm:col-span-6">
                    <label
                      htmlFor="derivado_medico"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Derivado a Médico
                    </label>
                    <Field
                      type="text"
                      id="derivado_medico"
                      name="derivado_medico"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                    <ErrorMessage
                      name="derivado_medico"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                </div>
              </div>

              <div className="fixed bottom-0 p-4 pt-5 bg-white w-full z-10">
                <div className="flex justify-start">
                  <button
                    style={{ borderRadius: "50px" }}
                    type="submit"
                    className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    {loadingAdded && "Loading ..."}
                    {!loadingAdded && "Agregar"}
                  </button>

                  <button
                    style={{ borderRadius: "50px" }}
                    type="button"
                    onClick={() => {
                      setInitialValues({
                        condicion_antes: "",
                        observaciones: "",
                        condicion_despues: "",
                        derivado_EESS: "",
                        derivado_medico: "",
                      });
                    }}
                    className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-gray-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                  >
                    Limpiar
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

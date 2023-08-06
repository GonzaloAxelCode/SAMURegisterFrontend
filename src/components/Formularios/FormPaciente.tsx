import usePaciente from "@/src/Apps/Paciente/hooks/usePaciente";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";

export default function FormularioPaciente({
  isHidden = false,
}: {
  isHidden?: boolean;
}) {
  const { loadingAddPaciente, addNewPaciente } = usePaciente();
  const [initialValues, setInitialValues] = useState<any>({
    nombres: "",
    apellidos: "",
    genero: "",
    dni: "",
    tipo_seguro: "",
    empresa_aseguradora: "",
    edad: "",
    tipo_edad: "",
    prioridad_emergencia: "",
    accidente: "",
    condicion_antes: "",
    condicion_despues: "",
    telefono_paciente: "",
  });

  const validationSchema = Yup.object().shape({
    nombres: Yup.string().required("Este campo es requerido"),
    apellidos: Yup.string().required("Este campo es requerido"),
    genero: Yup.string().required("Este campo es requerido"),
    dni: Yup.string().required("Este campo es requerido"),
    edad: Yup.number().required("Este campo es requerido").positive().integer(),
    tipo_edad: Yup.string().required("Este campo es requerido"),
    telefono_paciente: Yup.string().required("Este campo es requerido"),
  });

  // Función para manejar el envío del formulario
  const handleSubmit = (values: any) => {
    // Si la opción "Hora actual" está marcada, asignamos la hora actual al campo "hora"
    // Aquí puedes agregar la lógica para enviar los datos del formulario
    addNewPaciente(values);
    //console.log(values);
  };
  if (isHidden) {
    return null;
  }
  return (
    <div className="grid  grid-cols-1 lg:grid-cols-2 gap-2 sticky">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="space-y-8 divide-y divide-gray-200">
          <div className="space-y-8 divide-y divide-gray-200">
            <div className="pt-8">
              <div>
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Registro de Datos del Paciente
                </h3>
              </div>
              <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                {/* Nombres del Paciente */}
                <div className="sm:col-span-3">
                  <label
                    htmlFor="nombres"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Nombres
                  </label>
                  <Field
                    type="text"
                    id="nombres"
                    name="nombres"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                  <ErrorMessage
                    name="nombres"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                {/* Apellidos del Paciente */}
                <div className="sm:col-span-3">
                  <label
                    htmlFor="apellidos"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Apellidos
                  </label>
                  <Field
                    type="text"
                    id="apellidos"
                    name="apellidos"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                  <ErrorMessage
                    name="apellidos"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                {/* Género del Paciente */}
                <div className="sm:col-span-3">
                  <label
                    htmlFor="genero"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Género
                  </label>
                  <Field
                    as="select"
                    id="genero"
                    name="genero"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  >
                    <option value="">Seleccione</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Femenino">Femenino</option>
                    <option value="No especificado">No especificado</option>
                  </Field>
                  <ErrorMessage
                    name="genero"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                {/* DNI del Paciente */}
                <div className="sm:col-span-3">
                  <label
                    htmlFor="dni"
                    className="block text-sm font-medium text-gray-700"
                  >
                    DNI
                  </label>
                  <Field
                    type="text"
                    id="dni"
                    name="dni"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                  <ErrorMessage
                    name="dni"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                {/* Tipo de Seguro */}
                <div className="sm:col-span-3">
                  <label
                    htmlFor="tipo_seguro"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Tipo de Seguro
                  </label>
                  <Field
                    type="text"
                    id="tipo_seguro"
                    name="tipo_seguro"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                {/* Empresa Aseguradora */}
                <div className="sm:col-span-3">
                  <label
                    htmlFor="empresa_aseguradora"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Empresa Aseguradora
                  </label>
                  <Field
                    type="text"
                    id="empresa_aseguradora"
                    name="empresa_aseguradora"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                {/* Edad del Paciente */}
                <div className="sm:col-span-3">
                  <label
                    htmlFor="edad"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Edad
                  </label>
                  <Field
                    type="number"
                    id="edad"
                    name="edad"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                  <ErrorMessage
                    name="edad"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                {/* Tipo de Edad */}
                <div className="sm:col-span-3">
                  <label
                    htmlFor="tipo_edad"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Tipo de Edad
                  </label>
                  <Field
                    as="select"
                    id="tipo_edad"
                    name="tipo_edad"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  >
                    <option value="">Seleccione</option>
                    <option value="Años">Años</option>
                    <option value="Meses">Meses</option>
                    <option value="Días">Días</option>
                  </Field>
                  <ErrorMessage
                    name="tipo_edad"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                {/* Prioridad de Emergencia */}
                <div className="sm:col-span-3">
                  <label
                    htmlFor="prioridad_emergencia"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Prioridad de Emergencia
                  </label>
                  <Field
                    type="text"
                    id="prioridad_emergencia"
                    name="prioridad_emergencia"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                {/* Accidente */}
                <div className="sm:col-span-3">
                  <label
                    htmlFor="accidente"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Accidente
                  </label>
                  <Field
                    type="text"
                    id="accidente"
                    name="accidente"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                {/* Condición Antes */}
                <div className="sm:col-span-3">
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
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                {/* Condición Después */}
                <div className="sm:col-span-3">
                  <label
                    htmlFor="condicion_despues"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Condición Después
                  </label>
                  <Field
                    as="textarea"
                    id="condicion_despues"
                    name="condicion_despues"
                    rows={3}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                {/* Teléfono del Paciente */}
                <div className="sm:col-span-3">
                  <label
                    htmlFor="telefono_paciente"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Teléfono del Paciente
                  </label>
                  <Field
                    type="text"
                    id="telefono_paciente"
                    name="telefono_paciente"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                  <ErrorMessage
                    name="telefono_paciente"
                    component="div"
                    className="text-red-500"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="pt-5">
            <div className="flex justify-end"></div>
          </div>

          <div className="fixed bottom-0 p-4 pt-5 bg-white w-full z-10">
            <div className="flex justify-start">
              <button
                style={{ borderRadius: "50px" }}
                type="submit"
                className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                {loadingAddPaciente && "Loading ..."}
                {!loadingAddPaciente && "Agregar"}
              </button>

              <button
                style={{ borderRadius: "50px" }}
                type="button"
                onClick={() => {
                  setInitialValues({
                    nombres: "",
                    apellidos: "",
                    genero: "",
                    dni: "",
                    tipo_seguro: "",
                    empresa_aseguradora: "",
                    edad: "",
                    tipo_edad: "",
                    prioridad_emergencia: "",
                    accidente: "",
                    condicion_antes: "",
                    condicion_despues: "",
                    telefono_paciente: "",
                  });
                }}
                className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-gray-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                Limpiar
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

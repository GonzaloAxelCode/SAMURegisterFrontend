import useMedico from "@/src/Apps/Medico/hooks/useMedico";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
export default function FormularioMedico({
  isHidden = false,
}: {
  isHidden?: boolean;
}) {
  const { addNewMedico, loadingAddMedico } = useMedico();
  const [initialValues, setInitialValues] = useState<any>({
    nombres: "",
    apellidos: "",
    n_colegiatura: "",
    dni: "",
    telefono: "",
  });
  const formik = useFormik<any>({
    initialValues,
    validationSchema: Yup.object({
      nombres: Yup.string()
        .matches(/^[a-zA-Z\s]*$/, "Ingrese los nombres sin ningun caracter")
        .required("Este campo es obligatorio"),
      apellidos: Yup.string()
        .matches(/^[a-zA-Z\s]*$/, "Ingrese los apellidos sin ningun caracter")
        .required("Ingrese los apellidos del médico"),
      n_colegiatura: Yup.string().matches(
        /^[0-9]{9}$/,
        "El Nro debe tener 9 dígitos"
      ),
      dni: Yup.string()
        .required("Ingrese el DNI")
        .matches(/^[0-9]{8}$/, "El DNI debe tener 8 dígitos"),
      telefono: Yup.string().matches(
        /^[0-9]{9}$/,
        "El Numero debe tener 9 dígitos"
      ),
    }),
    onSubmit: (values) => {
      //console.log(values);
      addNewMedico(values);
    },
  });

  if (isHidden) {
    return null;
  }
  return (
    <div className="grid  grid-cols-1 lg:grid-cols-2 gap-2 sticky">
      <form
        className="space-y-8 divide-y divide-gray-200"
        onSubmit={formik.handleSubmit}
      >
        <div className="space-y-8 divide-y divide-gray-200">
          <div className="pt-8">
            <div>
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Informacion del Personal Medico Ingresante
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Por favor complete los siguientes campos del formulario:
              </p>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nombres
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="nombres"
                    name="nombres"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.nombres}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                  {formik.touched.nombres && formik.errors.nombres && (
                    <div className="text-red-500">{`${formik.errors.nombres}`}</div>
                  )}
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Apellidos
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="apellidos"
                    name="apellidos"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.apellidos}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                  {formik.touched.apellidos && formik.errors.apellidos && (
                    <div className="text-red-500">
                      {`${formik.errors.apellidos}`}
                    </div>
                  )}
                </div>
              </div>

              {/* colegiatura */}

              <div className="sm:col-span-4">
                <label
                  htmlFor="text"
                  className="block text-sm font-medium text-gray-700"
                >
                  Numero de Colegiatura
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="n_colegiatura"
                    name="n_colegiatura"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.n_colegiatura}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                  {formik.touched.n_colegiatura &&
                    formik.errors.n_colegiatura && (
                      <div className="text-red-500">
                        {`${formik.errors.n_colegiatura}`}
                      </div>
                    )}
                </div>
              </div>

              {/* dni */}
              <div className="sm:col-span-4">
                <label
                  htmlFor="text"
                  className="block text-sm font-medium text-gray-700"
                >
                  DNI
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="dni"
                    name="dni"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.dni}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                  {formik.touched.dni && formik.errors.dni && (
                    <div className="text-red-500">{`${formik.errors.dni}`}</div>
                  )}
                </div>
              </div>
              {/* telefono */}

              <div className="sm:col-span-4">
                <label
                  htmlFor="text"
                  className="block text-sm font-medium text-gray-700"
                >
                  Telefono Celular
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="telefono"
                    name="telefono"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.telefono}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                  {formik.touched.telefono && formik?.errors.telefono && (
                    <div className="text-red-500">{`${formik.errors.telefono}`}</div>
                  )}
                </div>
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
              {loadingAddMedico && "Loading ..."}
              {!loadingAddMedico && "Agregar"}
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
      </form>
    </div>
  );
}

import usePersonal from "@/src/Apps/Personal/hooks/usePersonal";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
export default function FormularioPersonal({
  isHidden = false,
}: {
  isHidden?: boolean;
}) {
  const [initialValues, setInitialValues] = useState<any>({
    nombres: "",
    apellidos: "",
    sexo: "",//no esta definico en BD
    turno: "",
    cargo: "",//no esta definico en BD
    dni: "",
    salida_cantidad:0,
  });
  const { addNewPersonal, loadingAddPersonal } = usePersonal();
  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      nombres: Yup.string()
        .matches(/^[a-zA-Z\s]*$/, "Ingrese los nombres sin ningun caracter")
        .required("Este campo es obligatorio"),
      apellidos: Yup.string()
        .matches(/^[a-zA-Z\s]*$/, "Ingrese los apellidos sin ningun caracter")
        .required("Ingrese los apellidos del médico"),
      sexo: Yup.string().required("Seleccione el sexo"),
      turno: Yup.string().required("Seleccione el turno"),
      cargo: Yup.string().required("Seleccione el cargo"),
      dni: Yup.string()
        .required("Ingrese el DNI")
        .matches(/^[0-9]{8}$/, "El DNI debe tener 8 dígitos"),
    }),
    onSubmit: (values) => {
      console.log(values);
      addNewPersonal(values)
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

              <div className="sm:col-span-3">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-gray-700"
                >
                  Sexo
                </label>
                <div className="mt-1">
                  <select
                    id="sexo"
                    name="sexo"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.sexo}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  >
                    <option value="">Seleccione</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Femenino">Femenino</option>
                  </select>
                  {formik.touched.sexo && formik.errors.sexo && (
                    <div className="text-red-500">{`${formik.errors.sexo}`}</div>
                  )}
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-gray-700"
                >
                  Cargo
                </label>
                <div className="mt-1">
                  <select
                    id="cargo"
                    name="cargo"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.cargo}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  >
                    <option value="">Seleccione</option>
                    <option value="ENFERMERA">ENFERMERA/RO</option>
                    <option value="PILOTO">PILOTO</option>
                    <option value="AUXILIAR">AUXILIAR</option>
                  </select>
                  {formik.touched.cargo && formik.errors.cargo && (
                    <div className="text-red-500">{`${formik.errors.cargo}`}</div>
                  )}
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-gray-700"
                >
                  Turno
                </label>
                <div className="mt-1">
                  <select
                    id="turno"
                    name="turno"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.turno}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  >
                    <option value="">Seleccione</option>
                    <option value="MAÑANA">MAÑANA</option>
                    <option value="TARDE">TARDE</option>
                    <option value="NOCHE">NOCHE</option>
                  </select>
                  {formik.touched.turno && formik.errors.turno && (
                    <div className="text-red-500">{`${formik.errors.turno}`}</div>
                  )}
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="email"
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
              {loadingAddPersonal && "Loading ..."}
              {!loadingAddPersonal && "Agregar"}
            </button>

            <button
              style={{ borderRadius: "50px" }}
              type="button"
              onClick={() => {
                setInitialValues({
                  nombres: "",
                  apellidos: "",
                  sexo: "",
                  turno: "",
                  cargo: "",
                  dni: "",
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

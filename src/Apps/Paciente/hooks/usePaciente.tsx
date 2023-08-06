import { RootState } from "@/src/modern_redux/store";
import { useDispatch, useSelector } from "react-redux";
import { addToPaciente } from "../functions/add.paciente";
import { getPacientes } from "../functions/get-pacientes";
import { PacienteAdd } from "../model.paciente";

const usePaciente = () => {
  const dispatch = useDispatch();
  const { loaderPacientes, pacientes, countPacientes, loadingAddPaciente } =
    useSelector((state: RootState) => state.Paciente);
  const loadAllPacientes = async () => {
    await getPacientes(dispatch);
  };

  const addNewPaciente = async (data: PacienteAdd) => {
    await addToPaciente(data, dispatch);
  };
  return {
    loadAllPacientes,
    loaderPacientes,
    pacientes,
    countPacientes,
    addNewPaciente,
    loadingAddPaciente,
  };
};

export default usePaciente;

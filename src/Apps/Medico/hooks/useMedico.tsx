import { RootState } from "@/src/modern_redux/store";
import { useDispatch, useSelector } from "react-redux";
import { addToMedico } from "../functions/add-medico";
import { getMedicos } from "../functions/get-medicos";
import { MedicoAdd } from "../model.medico";

const useMedico = () => {
  const dispatch = useDispatch();
  const { medicos, loaderMedicos, countMedicos,loadingAddMedico } = useSelector(
    (state: RootState) => state.Medico
  );

  const loadAllMedicos = async () => {
    await getMedicos(dispatch);
  };
  const addNewMedico = async (data: MedicoAdd) => {
    await addToMedico(data, dispatch);
  };
  return {
    addNewMedico,
    loadAllMedicos,
    medicos,
    countMedicos,
    loaderMedicos,
    loadingAddMedico
  };
};

export default useMedico;

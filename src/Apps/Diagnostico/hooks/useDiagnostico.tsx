import { RootState } from "@/src/modern_redux/store";
import { useDispatch, useSelector } from "react-redux";
import { DiagnosticoAdd } from "../diagnosticoSlice";
import { addToDiagnostico } from "../functions/add-diagnostico";
import { getDiagnosticos } from "../functions/get-diagnosticos";

const useDiagnostico = () => {
  const {
    diagnosticos,
    loaderDiagnosticos,
    countDiagnosticos,
    errors,
    loadingAdded,
  } = useSelector((state: RootState) => state.Diagnostico);
  const dispatch = useDispatch();
  const loadAllDiagnosticos = async () => {
    await getDiagnosticos(dispatch);
  };

  const addNewDiganostico = async (data: DiagnosticoAdd) => {
    await addToDiagnostico(data, dispatch);
  };

  return {
    loadAllDiagnosticos,
    diagnosticos,
    loaderDiagnosticos,
    countDiagnosticos,
    addNewDiganostico,
    errors,
    loadingAdded,
  };
};

export default useDiagnostico;

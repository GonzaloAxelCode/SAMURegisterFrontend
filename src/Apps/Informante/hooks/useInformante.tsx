import { RootState } from "@/src/modern_redux/store";
import { useDispatch, useSelector } from "react-redux";
import { addToInformante } from "../functions/add-informantes";
import { getInformantes } from "../functions/getInformantes";
import { InformanteAdd } from "../model.informante";

const useInformante = () => {
  const dispatch = useDispatch();
  const {
    loaderInformantes,
    countInformantes,
    errors,
    informantes,
    loadingAddInformante,
  } = useSelector((state: RootState) => state.Informante);
  const loadAllInformantes = async () => {
    await getInformantes(dispatch);
  };

  const addNewInformante = async (data: InformanteAdd) => {
    await addToInformante(data, dispatch);
  };

  return {
    loadAllInformantes,
    loadingAddInformante,
    addNewInformante,
    loaderInformantes,
    countInformantes,
    errors,
    informantes,
  };
};

export default useInformante;

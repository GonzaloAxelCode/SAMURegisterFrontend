import { RootState } from "@/src/modern_redux/store";
import { useDispatch, useSelector } from "react-redux";
import { addToAtencion } from "../functions/add-atencion";
import { getAtenciones } from "../functions/get-atenciones";
import { AtencionAdd } from "../model.atencion";

const useAtencion = () => {
  const dispatch = useDispatch();
  const { atenciones, loaderAtenciones, countAtenciones, loadingAddAtencion } =
    useSelector((state: RootState) => state.Atencion);

  const loadAllAtenciones = async () => {
    await getAtenciones(dispatch);
  };

  const addNewAtencion = async (data: AtencionAdd) => {
    await addToAtencion(data, dispatch);
  };
  return {
    atenciones,
    loaderAtenciones,
    countAtenciones,
    loadAllAtenciones,
    addNewAtencion,
    loadingAddAtencion,
  };
};

export default useAtencion;

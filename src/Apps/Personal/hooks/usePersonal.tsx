import { RootState } from "@/src/modern_redux/store";
import { useDispatch, useSelector } from "react-redux";
import { addToPersonal } from "../functions/add-personal";
import { getPersonal } from "../functions/get-personal";
import { PersonalAdd } from "../model.personal";

const usePersonal = () => {
  const dispatch = useDispatch();
  const { personal, loaderPersonal, countPersonal, loadingAddPersonal } =
    useSelector((state: RootState) => state.Personal);
  const loadAllPersonal = async () => {
    await getPersonal(dispatch);
  };

  const addNewPersonal = async (data: PersonalAdd) => {
    await addToPersonal(data, dispatch);
  };
  return {
    addNewPersonal,
    loadAllPersonal,
    personal,
    loaderPersonal,
    countPersonal,
    loadingAddPersonal,
  };
};

export default usePersonal;

import { createContext, useState } from "react";

interface ValuesDataContext {
  visibleModalEdit?: number;
  setVisibleModalEdit: any;
}
export const UIContext = createContext({} as ValuesDataContext);

const UIProvider = ({ children }: any) => {
  const [visibleModalEdit, setVisibleModalEdit] = useState(0);

  const values: ValuesDataContext = {
    visibleModalEdit,
    setVisibleModalEdit,
  };
  return <UIContext.Provider value={values}>{children}</UIContext.Provider>;
};

export default UIProvider;

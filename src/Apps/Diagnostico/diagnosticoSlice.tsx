import { createSlice } from "@reduxjs/toolkit";
export interface DiagnosticoData {
  diagnosticos?: Diagnostico[];
  loaderDiagnosticos?: boolean;
  loadingAdded?: boolean;
  countDiagnosticos?: number;
  next?: string | null;
  previous?: string | null;
  errors?: any;
}

export interface Diagnostico {
  id_diagnostico: number;
  codigo?: string;
  condicion_antes?: string;
  observaciones?: string;
  condicion_despues?: string;
  derivado_EESS?: string;
  derivado_medico?: string;
  date_joined?: string;
}
export interface DiagnosticoAdd {
  condicion_antes?: string;
  observaciones?: string;
  condicion_despues?: string;
  derivado_EESS?: string;
  derivado_medico?: string;
}

const DiagnosticoState: DiagnosticoData = {
  diagnosticos: [],
  countDiagnosticos: 0,
  loaderDiagnosticos: false,
  loadingAdded: false,
  next: null,
  previous: null,
  errors: {},
};

const funcionPura = (
  state: DiagnosticoData,
  action: { payload: DiagnosticoData }
) => ({
  ...state,
  ...action.payload,
});
interface Payload extends DiagnosticoData {
  newDiagnostico: Diagnostico | null;
}

const funcionPuraAddTempStatus = (
  state: DiagnosticoData,
  action: {
    payload: Payload;
  }
) => {
  let currentDiagnosticosList: any = state.diagnosticos;
  let newDiagnostico = action.payload.newDiagnostico;
  if (newDiagnostico === null) {
    return { ...state, ...action.payload };
  } else {
    return {
      ...state,
      ...action.payload,
      diagnosticos: [action.payload.newDiagnostico, ...currentDiagnosticosList],
    };
  }
};

export const diagnosticoSlice = createSlice({
  name: "diagnostico",
  initialState: DiagnosticoState,
  reducers: {
    REDUCER_LOAD_DIAGNOSTICO: funcionPura,
    REDUCER_ADD_DIAGNOSTICO: funcionPuraAddTempStatus,
  },
});

export const { REDUCER_LOAD_DIAGNOSTICO, REDUCER_ADD_DIAGNOSTICO } =
  diagnosticoSlice.actions;

export default diagnosticoSlice.reducer;

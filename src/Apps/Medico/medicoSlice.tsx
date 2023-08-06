export interface MedicoData {
  medicos?: Medico[];
  loaderMedicos?: boolean;
  loadingAddMedico?: boolean;
  countMedicos?: number;
  next?: string | null;
  previous?: string | null;
  errors?: any;
}
import { createSlice } from "@reduxjs/toolkit";
export interface Medico {
  id_medico?: number;
  nombres?: string;
  apellidos?: string;
  n_colegiatura?: string;
  dni?: string;
  telefono?: string;
  activate?: boolean;
  date_joined?: string;
  date_updated?: string;
}

const MedicoState: MedicoData = {
  medicos: [],
  countMedicos: 0,
  next: null,
  previous: null,
  loaderMedicos: false,
  loadingAddMedico: false,
  errors: {},
};

const funcionPura = (state: MedicoData, action: { payload: MedicoData }) => ({
  ...state,
  ...action.payload,
});

interface Payload extends MedicoData {
  newMedico: Medico | null;
}
const funcionPuraAddTempStatus = (
  state: MedicoData,
  action: {
    payload: Payload;
  }
) => {
  let currentMedicosList: any = state.medicos;
  let newMedico = action.payload.newMedico;
  if (newMedico === null) {
    return { ...state, ...action.payload };
  } else {
    return {
      ...state,
      ...action.payload,
      medicos: [action.payload.newMedico, ...currentMedicosList],
    };
  }
};

export const medicoSlice = createSlice({
  name: "auth",
  initialState: MedicoState,
  reducers: {
    REDUCER_LOAD_MEDICOS: funcionPura,
    REDUCER_ADD_MEDICO: funcionPuraAddTempStatus,
  },
});

export const { REDUCER_LOAD_MEDICOS, REDUCER_ADD_MEDICO } = medicoSlice.actions;

export default medicoSlice.reducer;

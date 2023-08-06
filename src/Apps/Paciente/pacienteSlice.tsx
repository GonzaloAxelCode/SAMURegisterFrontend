import { createSlice } from "@reduxjs/toolkit";
export interface PacienteData {
  pacientes?: Paciente[];
  loaderPacientes?: boolean;
  countPacientes?: number;
  next?: string | null;
  previous?: string | null;
  errors?: any;
  loadingAddPaciente?: boolean;
}

export interface Paciente {
  paciente_id?: number;
  nombres: string;
  apellidos: string;
  genero: string;
  dni: string;
  tipo_seguro?: string;
  empresa_aseguradora?: string;
  edad: number;
  tipo_edad?: string;
  prioridad_emergencia?: string;
  accidente?: string;
  condicion_antes?: string;
  condicion_despues?: string;
  telefono_paciente?: string;
}

const PacienteState: PacienteData = {
  pacientes: [],
  countPacientes: 0,
  next: null,
  previous: null,
  loaderPacientes: false,
  errors: {},
  loadingAddPaciente: false,
};

const funcionPura = (
  state: PacienteData,
  action: { payload: PacienteData }
) => ({
  ...state,
  ...action.payload,
});

interface Payload extends PacienteData {
  newPaciente: Paciente | null;
}

const funcionPuraAddTempStatus = (
  state: PacienteData,
  action: {
    payload: Payload;
  }
) => {
  let list: any = state.pacientes;
  let newPaciente = action.payload.newPaciente;
  if (newPaciente === null) {
    return { ...state, ...action.payload };
  } else {
    return {
      ...state,
      ...action.payload,
      pacientes: [action.payload.newPaciente, ...list],
    };
  }
};

export const pacienteSlice = createSlice({
  name: "auth",
  initialState: PacienteState,
  reducers: {
    REDUCER_LOAD_PACIENTES: funcionPura,
    REDUCER_ADD_PACIENTE: funcionPuraAddTempStatus,
  },
});

export const { REDUCER_LOAD_PACIENTES, REDUCER_ADD_PACIENTE } =
  pacienteSlice.actions;

export default pacienteSlice.reducer;

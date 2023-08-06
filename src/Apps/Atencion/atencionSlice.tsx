import { createSlice } from "@reduxjs/toolkit";
export interface AtencionData {
  atenciones?: Atencion[];
  loaderAtenciones?: boolean;
  countAtenciones?: number;
  next?: string | null;
  previous?: string | null;
  errors?: any;
  loadingAddAtencion?: boolean;
}

export interface Atencion {
  id_atencion: number;
  tipo_emergencia?: string;
  tipo_atencion?: string;
  traslado: boolean;
  direccion?: string;
  referencia?: string;
  sector?: string;
  sub_sector?: string;
  distrito?: string;
  provincia?: string;
  region?: string;
  hora_salida_ambulancia?: string;
  hora_llegada?: string;
  hora_salida?: Date;
  hora_llegada_EESS?: string;
  id_personal?: number;
  id_medico?: number;
  id_diagnostico?: number;
  id_paciente?: number;
  id_informante_atencion?: number;
}

const AtencionState: AtencionData = {
  atenciones: [],
  loaderAtenciones: false,
  countAtenciones: 0,
  previous: null,
  next: null,
  errors: {},
  loadingAddAtencion: false,
};

const funcionPura = (
  state: AtencionData,
  action: { payload: AtencionData }
) => ({
  ...state,
  ...action.payload,
});

interface Payload extends AtencionData {
  newAtencion: Atencion | null;
}

const funcionPuraAddTempStatus = (
  state: AtencionData,
  action: {
    payload: Payload;
  }
) => {
  let list: any = state.atenciones;
  let newAtencion = action.payload.newAtencion;
  if (newAtencion === null) {
    return { ...state, ...action.payload };
  } else {
    return {
      ...state,
      ...action.payload,
      atenciones: [action.payload.newAtencion, ...list],
    };
  }
};

export const atencionSlice = createSlice({
  name: "atencion",
  initialState: AtencionState,
  reducers: {
    REDUCER_LOAD_ATENCIONES: funcionPura,
    REDUCER_ADD_ATENCION: funcionPuraAddTempStatus,
  },
});

export const { REDUCER_LOAD_ATENCIONES, REDUCER_ADD_ATENCION } =
  atencionSlice.actions;

export default atencionSlice.reducer;

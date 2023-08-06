import { createSlice } from "@reduxjs/toolkit";
export interface InformanteData {
  informantes?: Informante[];
  loaderInformantes?: boolean;
  countInformantes?: number;
  next?: string | null;
  previous?: string | null;
  loadingAddInformante?: boolean;
  errors?: any;
}

export interface Informante {
  id_llamada?: number;
  tipo_llamada?: string;
  fecha?: string;
  hora?: string;
  turno?: string;
  telefono_infor?: string;
  nombres_infor?: string;
  apellidos_infor?: string;
  dni_infor?: string;
  gen_infor?: string;
}

const InformanteState: InformanteData = {
  informantes: [],
  loaderInformantes: false,
  countInformantes: 0,
  next: null,
  previous: null,
  loadingAddInformante: false,
};

const funcionPura = (
  state: InformanteData,
  action: { payload: InformanteData }
) => ({
  ...state,
  ...action.payload,
});
interface Payload extends InformanteData {
  newInformante: Informante | null;
}
const funcionPuraAddTempStatus = (
  state: InformanteData,
  action: {
    payload: Payload;
  }
) => {
  let list: any = state.informantes;
  let newInformante = action.payload.newInformante;
  if (newInformante === null) {
    return { ...state, ...action.payload };
  } else {
    return {
      ...state,
      ...action.payload,
      informantes: [action.payload.newInformante, ...list],
    };
  }
};

export const informanteSlice = createSlice({
  name: "informante",
  initialState: InformanteState,
  reducers: {
    REDUCER_LOAD_INFORMANTES: funcionPura,
    REDUCER_ADD_INFORMANTE: funcionPuraAddTempStatus,
  },
});

export const { REDUCER_LOAD_INFORMANTES, REDUCER_ADD_INFORMANTE } =
  informanteSlice.actions;

export default informanteSlice.reducer;

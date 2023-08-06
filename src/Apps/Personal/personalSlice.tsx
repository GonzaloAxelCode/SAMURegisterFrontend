import { createSlice } from "@reduxjs/toolkit";
export interface PesonalData {
  personal?: Personal[];
  countPersonal?: 0;
  next?: string | null;
  previous?: string | null;
  loaderPersonal?: boolean;
  loadingAddPersonal?: boolean;
  errors?: any;
}

export interface Personal {
  id_personal?: number;
  nombres?: string;
  apellidos?: string;
  turno?: string;
  dni?: string;
  salida_cantidad?: number;
}

const InformanteState: PesonalData = {
  personal: [],
  countPersonal: 0,
  next: null,
  previous: null,
  loaderPersonal: false,
  errors: {},
};

const funcionPura = (state: PesonalData, action: { payload: PesonalData }) => ({
  ...state,
  ...action.payload,
});

interface Payload extends PesonalData {
  newPersonal: Personal | null;
}

const funcionPuraAddTempStatus = (
  state: PesonalData,
  action: {
    payload: Payload;
  }
) => {
  let list: any = state.personal;
  let newPersonal = action.payload.newPersonal;
  if (newPersonal === null) {
    return { ...state, ...action.payload };
  } else {
    return {
      ...state,
      ...action.payload,
      personal: [action.payload.newPersonal, ...list],
    };
  }
};

export const personalSlice = createSlice({
  name: "personal",
  initialState: InformanteState,
  reducers: {
    REDUCER_LOAD_PERSONAL: funcionPura,
    REDUCER_ADD_PERSONAL: funcionPuraAddTempStatus,
  },
});

export const { REDUCER_LOAD_PERSONAL, REDUCER_ADD_PERSONAL } =
  personalSlice.actions;

export default personalSlice.reducer;

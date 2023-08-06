import { createSlice } from "@reduxjs/toolkit";
interface MessageType {
  severity?: "success" | "info" | "warn" | "error";
  text?: string;
  show?: boolean;
}

const MessageState: MessageType = {
  severity: "info",
  text: "",
  show: false,
};

const funcionPura = (state: MessageType, action: { payload: MessageType }) => ({
  ...state,
  ...action.payload,
});

export const messageSlice = createSlice({
  name: "auth",
  initialState: MessageState,
  reducers: {
    REDUCER_LOAD_MESSAGE: funcionPura,
  },
});

export const { REDUCER_LOAD_MESSAGE } = messageSlice.actions;

export default messageSlice.reducer;

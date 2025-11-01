import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  helpModalOn: true,
};

const helpSlice = createSlice({
  name: "players",
  initialState,
  reducers: {
    helpModalOn: (state) => {
      return {
        ...state,
        helpModalOn: true,
      };
    },
    helpModalOff: (state) => {
      return {
        ...state,
        helpModalOn: false,
      };
    },
  },
});

export const { helpModalOn, helpModalOff } = helpSlice.actions;

export default helpSlice.reducer;

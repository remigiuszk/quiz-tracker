import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  layout: "horizontal",
  settingsModalOn: false,
  layoutChoiceVisible: false,
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    settingsModalOn: (state) => {
      state.settingsModalOn = true;
    },
    settingsModalOff: (state) => {
      state.settingsModalOn = false;
    },
    setLayout: (state, action) => {
      state.layout = action.payload;
    },
    showLayoutChoice: (state) => {
      state.layoutChoiceVisible = true;
    },
    hideLayoutChoice: (state) => {
      state.layoutChoiceVisible = false;
    },
  },
});

export const {
  settingsModalOn,
  settingsModalOff,
  setLayout,
  showLayoutChoice,
  hideLayoutChoice,
} = settingsSlice.actions;

export default settingsSlice.reducer;

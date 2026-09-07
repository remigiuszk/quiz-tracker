import { configureStore } from "@reduxjs/toolkit";
import playersReducer from "./players/playersSlice";
import helpReducer from "./help/helpSlice";
import settingsReducer from "./settings/settingsSlice";

export const store = configureStore({
  reducer: {
    players: playersReducer,
    help: helpReducer,
    settings: settingsReducer,
  },
});

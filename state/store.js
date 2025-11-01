import { configureStore } from "@reduxjs/toolkit";
import playersReducer from "./players/playersSlice";
import helpReducer from "./help/helpSlice";

export const store = configureStore({
  reducer: {
    players: playersReducer,
    help: helpReducer
  },
});

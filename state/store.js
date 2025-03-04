import { configureStore } from "@reduxjs/toolkit";
import playersReducer from "./players/playersSlice";

export const store = configureStore({
  reducer: {
    players: playersReducer,
  },
});

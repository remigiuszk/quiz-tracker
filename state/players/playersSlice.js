import { createSlice } from "@reduxjs/toolkit";
import { PLAYER_COLORS } from "../../constants";

const initialState = {
  playerList: [
    {
      name: "Player 1",
      color: PLAYER_COLORS[0].colorCode,
      id: Math.random().toString(),
      score: 0,
    },
    {
      name: "Player 2",
      color: PLAYER_COLORS[1].colorCode,
      id: Math.random().toString(),
      score: 0,
    },
  ],
};

const playersSlice = createSlice({
  name: "players",
  initialState,
  reducers: {
    addNewPlayer: (state) => {
      state.playerList = [
        ...state.playerList,
        {
          name: "Player" + (state.playerList.length + 1),
          color: PLAYER_COLORS[state.playerList.length + 1].colorCode,
          id: Math.random().toString(),
          score: 0,
        },
      ];
    },
    resetPlayers: (state) => {
      state.playerList = initialState.playerList;
    },
  },
});

export const { addNewPlayer, resetPlayers } = playersSlice.actions;

export default playersSlice.reducer;

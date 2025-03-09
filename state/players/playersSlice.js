import { createSlice } from "@reduxjs/toolkit";
import { PLAYER_COLORS } from "../../constants";
import uuid from "react-native-uuid";

const initialState = {
  playerList: [
    {
      name: "Player 1",
      color: PLAYER_COLORS[0].colorCode,
      id: uuid.v4(),
      score: 0,
    },
    {
      name: "Player 2",
      color: PLAYER_COLORS[1].colorCode,
      id: uuid.v4(),
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
          id: uuid.v4(),
          score: 0,
        },
      ];
    },
    resetPlayers: (state) => {
      state.playerList = [...initialState.playerList];
    },
    incrementPlayerScore: (state, action) => {
      console.log(action);
      state.playerList = state.playerList.map((player) =>
        player.id === action.payload
          ? { ...player, score: player.score + 1 }
          : player
      );
    },
  },
});

export const { addNewPlayer, resetPlayers, incrementPlayerScore } =
  playersSlice.actions;

export default playersSlice.reducer;

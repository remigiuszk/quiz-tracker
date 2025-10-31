import { createSlice } from "@reduxjs/toolkit";
import { PLAYER_COLORS } from "../../constants";
import uuid from "react-native-uuid";
import { useLocalization } from "../../hooks/useLocalization";

const initialState = {
  playerList: [],
  manageModalPlayer: null,
  managePlayerModalOn: false,
  availableColors: PLAYER_COLORS,
};

const refreshColors = (currentState) => {
  const usedColors = currentState.playerList.map((player) => player.color);
  currentState.availableColors = PLAYER_COLORS.filter(
    (color) => !usedColors.includes(color.colorCode)
  );
};

const playersSlice = createSlice({
  name: "players",
  initialState,
  reducers: {
    createInitialPlayers: (state, action) => {
      const localizedPrefix = action.payload;
      state.playerList = [
        {
          name: localizedPrefix + "1",
          color: PLAYER_COLORS[0].colorCode,
          id: uuid.v4(),
          score: 0,
        },
        {
          name: localizedPrefix + "2",
          color: PLAYER_COLORS[1].colorCode,
          id: uuid.v4(),
          score: 0,
        },
      ];
      refreshColors(state);
    },
    addNewPlayer: (state, action) => {
      const localizedPrefix = action.payload;
      if (state.playerList.length < 10) {
        state.playerList = [
          ...state.playerList,
          {
            name: localizedPrefix + (state.playerList.length + 1),
            color:
              state.availableColors[
                Math.floor(Math.random() * state.availableColors.length)
              ].colorCode,
            id: uuid.v4(),
            score: 0,
          },
        ];
        refreshColors(state);
      }
    },
    resetPlayers: (state) => {
      state.playerList = state.playerList.map((player) => {
        return { ...player, score: 0 };
      });
    },
    incrementPlayerScore: (state, action) => {
      state.playerList = state.playerList.map((player) =>
        player.id === action.payload
          ? { ...player, score: player.score + 1 }
          : player
      );
    },
    decrementPlayerScore: (state) => {
      state.playerList = state.playerList.map((player) =>
        player.id === state.manageModalPlayer.id
          ? { ...player, score: player.score - 1 }
          : player
      );
    },
    resetPlayerScore: (state) => {
      state.playerList = state.playerList.map((player) =>
        player.id === state.manageModalPlayer.id
          ? { ...player, score: 0 }
          : player
      );
    },
    managePlayerMenuOn: (state, action) => {
      console.log(state, action);
      state.manageModalPlayer = state.playerList.find(
        (player) => player.id === action.payload
      );
      state.managePlayerModalOn = true;
      console.log(state);
    },
    managePlayerMenuOff: (state) => {
      return {
        ...state,
        managePlayerModalOn: false,
        manageModalPlayer: null,
      };
    },
    changePlayerName: (state, action) => {
      state.playerList = state.playerList.map((player) =>
        player.id === state.manageModalPlayer.id
          ? { ...player, name: action.payload }
          : player
      );
    },
    deletePlayer: (state, action) => {
      state.playerList = state.playerList.filter(
        (player) => player.id !== action.payload
      );
      state.manageModalPlayer = null;
      state.managePlayerModalOn = false;
      refreshColors(state);
    },
  },
});

export const {
  addNewPlayer,
  resetPlayers,
  incrementPlayerScore,
  decrementPlayerScore,
  resetPlayerScore,
  managePlayerMenuOff,
  managePlayerMenuOn,
  changePlayerName,
  deletePlayer,
  createInitialPlayers,
} = playersSlice.actions;

export default playersSlice.reducer;

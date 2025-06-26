import { StyleSheet, Text, View } from "react-native";
import PlayerContainer from "./player/playerContainer";
import { TEXT_STYLES, THEME } from "../../constants";
import { useSelector } from "react-redux";
import DefaultButton from "../shared/buttons/defaultButton";
import { addNewPlayer } from "../../state/players/playersSlice";

const PlayerList = () => {
  const players = useSelector((state) => state.players.playerList);

  if (!players || !Array.isArray(players) || players.length === 0) {
    return (
      <View style={styles.playersContainer}>
        <Text style={TEXT_STYLES.lightTextLarge}>
          no players added, add a player to get started
        </Text>
        <DefaultButton
          text="Add new player"
          action={addNewPlayer()}
          width="50%"
          height="15%"
        ></DefaultButton>
      </View>
    );
  }

  return (
    <View style={styles.playersContainer}>
      {players.map((player) => (
        <PlayerContainer
          player={player}
          key={player.id}
          playerCount={players.length}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  playersContainer: {
    width: "100%",
    height: "100%",
    flex: 10,
    backgroundColor: THEME.background1,
    padding: 6,
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
    alignContent: "center",
    gap: 12,
  },
});

export default PlayerList;

import { StyleSheet, View } from "react-native";
import PlayerContainer from "./player/playerContainer";
import { THEME } from "../../constants";
import { useSelector } from "react-redux";

const PlayerList = () => {
  const players = useSelector((state) => state.players.playerList);

  if (!players || !Array.isArray(players) || players.length === 0) {
    return null;
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

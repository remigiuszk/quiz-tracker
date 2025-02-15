import { StyleSheet, View } from "react-native";
import PlayerScore from "./Player/PlayerScore";
import PlayerTile from "./Player/PlayerTile";
import PlayerName from "./Player/PlayerName";

const PlayerContainer = ({ player }) => {
  return (
    <View style={styles.container}>
      <PlayerName style={styles.playerName} />
      <PlayerTile style={styles.playerTile} />
      <PlayerScore style={styles.playerScore} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "adb5bd",
    borderWidth: 6,
    borderColor: "blue",
    flexBasis: 100,
    flexShrink: 1,
  },
  playerName: { width: "100%", flex: 1 },
  playerTile: { width: "100%", flex: 3 },
  playerScore: { width: "100%", flex: 1 },
});

export default PlayerContainer;

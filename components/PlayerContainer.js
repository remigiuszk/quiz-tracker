import { StyleSheet, View } from "react-native";
import PlayerScore from "./Player/PlayerScore";
import PlayerTile from "./Player/PlayerTile";
import PlayerName from "./Player/PlayerName";
import { useEffect, useState } from "react";

const PlayerContainer = ({ player, playerCount }) => {
  const [containerDimensions, setContainerDimensions] = useState({
    width: "50%",
    height: "60%",
  });

  useEffect(() => {
    switch (playerCount) {
      case 1:
        setContainerDimensions({ width: "50%", height: "60%" });
        break;
      case 2:
        setContainerDimensions({ width: "40%", height: "20%" });
        break;
      default:
        setContainerDimensions({ width: "20%", height: "20%" });
        break;
    }
  }, [playerCount]);

  return (
    <View
      style={[
        styles.container,
        {
          width: containerDimensions.width,
          height: containerDimensions.height,
        },
      ]}
    >
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
  },
  playerName: { width: "100%", flex: 1 },
  playerTile: { width: "100%", flex: 3 },
  playerScore: { width: "100%", flex: 1 },
});

export default PlayerContainer;

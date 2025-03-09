import { StyleSheet, View } from "react-native";
import { useEffect, useState } from "react";
import { THEME, STYLES } from "../../../constants";
import PlayerName from "./playerName";
import PlayerTile from "./playerTile";
import PlayerScore from "./playerScore";

const PlayerContainer = ({ player, playerCount }) => {
  const [containerDimensions, setContainerDimensions] = useState({
    width: "40%",
    height: "85%",
  });

  useEffect(() => {
    switch (playerCount) {
      case 1:
        setContainerDimensions({ width: "40%", height: "85%" });
        break;
      case 2:
        setContainerDimensions({ width: "40%", height: "85%" });
        break;
      case 3:
        setContainerDimensions({ width: "30%", height: "85%" });
        break;
      default:
        setContainerDimensions({ width: "25%", height: "45%" });
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
        STYLES.shadow,
      ]}
    >
      <PlayerName name={player.name} />
      <PlayerTile color={player.color} id={player.id} />
      <PlayerScore
        color={player.color}
        score={player.score}
        playerCount={playerCount}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: THEME.foreground,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "space-around",
    gap: 10,
    padding: 16,
  },
});

export default PlayerContainer;

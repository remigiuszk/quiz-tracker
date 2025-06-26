import { StyleSheet, View } from "react-native";
import { useEffect, useState } from "react";
import { THEME, SHADOW_STYLES } from "../../../constants";
import PlayerName from "./playerName";
import PlayerTile from "./playerTile";
import PlayerScore from "./playerScore";
import PlayerContextMenu from "./playerContextMenu";

const PlayerContainer = ({ player, playerCount }) => {
  const [containerDimensions, setContainerDimensions] = useState({
    width: "40%",
    height: "85%",
    fontSize: 24,
  });

  useEffect(() => {
    switch (playerCount) {
      case 1:
        setContainerDimensions({ width: "40%", height: "85%", fontSize: 24 });
        break;
      case 2:
        setContainerDimensions({ width: "40%", height: "85%", fontSize: 24 });
        break;
      case 3:
        setContainerDimensions({ width: "30%", height: "85%", fontSize: 18 });
        break;
      case 7:
        setContainerDimensions({ width: "20%", height: "45%", fontSize: 14 });
        break;
      case 8:
        setContainerDimensions({ width: "20%", height: "45%", fontSize: 14 });
        break;
      case 9:
        setContainerDimensions({ width: "18%", height: "45%", fontSize: 14 });
        break;
      case 10:
        setContainerDimensions({ width: "18%", height: "45%", fontSize: 14 });
        break;
      default:
        setContainerDimensions({ width: "25%", height: "45%", fontSize: 14 });
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
        SHADOW_STYLES.default,
      ]}
    >
      <View style={styles.nameContainer}>
        <View style={{ flex: 1 }} />
        <PlayerName
          name={player.name}
          fontSize={containerDimensions.fontSize}
        />
        <PlayerContextMenu id={player.id} color={player.color} />
      </View>
      <PlayerTile color={player.color} id={player.id} />
      <PlayerScore
        color={player.color}
        score={player.score}
        playerCount={playerCount}
      />
    </View>
  );
  ``;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: THEME.background3,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "space-around",
    gap: 10,
    padding: 15,
  },
  nameContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    flex: 1,
    gap: 10,
  },
});

export default PlayerContainer;

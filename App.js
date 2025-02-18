import { SafeAreaView, StyleSheet, FlatList, View, Button } from "react-native";
import { useState, useEffect } from "react";
import * as ScreenOrientation from "expo-screen-orientation";
import Constants from "expo-constants";
import * as NavigationBar from "expo-navigation-bar";
import { PLAYER_COLORS, THEME, STYLES } from "./constants";
import PlayerContainer from "./components/PlayerContainer";

export default function App() {
  const [orientation, setOrientation] = useState(1);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    lockOrientation();
    NavigationBar.setPositionAsync("relative");
    NavigationBar.setVisibilityAsync("hidden");
    NavigationBar.setBehaviorAsync("inset-swipe");
    NavigationBar.setBackgroundColorAsync("black");
  }, []);

  const lockOrientation = async () => {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT
    );
    const o = await ScreenOrientation.getOrientationAsync();
    setOrientation(o);
  };

  const addNewPlayer = () => {
    setPlayers((currentPlayers) => [
      ...currentPlayers,
      {
        name: "Player" + (currentPlayers.length + 1),
        color: PLAYER_COLORS[currentPlayers.length].colorCode,
        id: Math.random().toString(),
      },
    ]);
  };

  const deleteAPlayer = () => {
    setPlayers((currentPlayers) => [
      currentPlayers.filter((player) => player.id !== currentPlayers[0].id),
    ]);
  };

  return (
    <SafeAreaView style={[styles.appContainer, STYLES.shadow]}>
      <View style={[styles.optionsBarContainer, STYLES.shadow]}>
        <Button width="" title="add" onPress={addNewPlayer}></Button>
        <Button title="delete" onPress={deleteAPlayer}></Button>
      </View>
      <View style={styles.playersContainer}>
        {players.map((player) => (
          <PlayerContainer
            player={player}
            key={player.id}
            playerCount={players.length}
          />
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    width: "100%",
    height: "100%",
    direction: "vertical",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: THEME.foreground,
  },
  optionsBarContainer: {
    width: "100%",
    flex: 1,
    backgroundColor: THEME.foreground,
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
  },
  playersContainer: {
    width: "100%",
    height: "100%",
    flex: 10,
    backgroundColor: THEME.background,
    padding: 6,
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
    alignContent: "center",
    gap: 12,
  },
});

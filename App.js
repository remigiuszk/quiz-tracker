import { SafeAreaView, StyleSheet, FlatList, View, Button } from "react-native";
import { useState, useEffect } from "react";
import * as ScreenOrientation from "expo-screen-orientation";
import Constants from "expo-constants";
import * as NavigationBar from "expo-navigation-bar";
import { PLAYER_COLORS } from "./constants";
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

    setPlayers((currentPlayers) => [
      {
        text: "Player",
        color: PLAYER_COLORS[0].colorCode,
        id: Math.random().toString(),
      },
    ]);
  }, []);

  const lockOrientation = async () => {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT
    );
    const o = await ScreenOrientation.getOrientationAsync();
    setOrientation(o);
  };

  const addNewPlayer = () => {
    console.log("adding");
    setPlayers((currentPlayers) => [
      ...currentPlayers,
      {
        text: "Player",
        color: PLAYER_COLORS[0].colorCode,
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
    <SafeAreaView style={styles.appContainer}>
      <View style={styles.optionsBarContainer}>
        <Button width="" title="add" onPress={addNewPlayer}></Button>
        <Button title="delete" onPress={deleteAPlayer}></Button>
      </View>
      <View style={styles.playersContainer}>
        {players.map((player) => (
          <PlayerContainer key={player.id} playerCount={players.length} />
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
    backgroundColor: "black",
  },
  optionsBarContainer: {
    width: "100%",
    flex: 1,
    backgroundColor: "gray",
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
  },
  playersContainer: {
    width: "100%",
    flex: 10,
    backgroundColor: "white",
    padding: 5,
    borderWidth: 6,
    borderColor: "red",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "space-evenly",
    flexWrap: "wrap",
    gap: 12,
  },
});

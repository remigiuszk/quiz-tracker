import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useState, useEffect } from "react";
import * as ScreenOrientation from "expo-screen-orientation";
import Constants from "expo-constants";
import changeNavigationBarColor from "react-native-navigation-bar-color";
import * as NavigationBar from "expo-navigation-bar";

export default function App() {
  const [orientation, setOrientation] = useState(1);

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

  const setNavigationBarColor = async () => {
    if (Platform.OS === "android") {
      await NavigationBar.setBackgroundColorAsync("black"); // Match your app's background
      await NavigationBar.setVisibilityAsync("hidden"); // Hide if you want a fullscreen look
    }
  };

  return (
    <SafeAreaView style={styles.appContainer}>
      <View style={styles.optionsBarContainer}></View>
      <View style={styles.playersContainer}></View>
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
  },
  playersContainer: {
    width: "100%",
    flex: 10,
    backgroundColor: "black",
  },
});

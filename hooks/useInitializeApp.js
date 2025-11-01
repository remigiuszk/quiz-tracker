import { useState, useEffect } from "react";
import * as ScreenOrientation from "expo-screen-orientation";
import * as NavigationBar from "expo-navigation-bar";
import * as Font from "expo-font";

export default function useInitializeApp() {
  const [orientation, setOrientation] = useState(1);
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    lockOrientation();
    loadFont();
  }, []);

  const lockOrientation = async () => {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT
    );
    const o = await ScreenOrientation.getOrientationAsync();
    setOrientation(o);
  };

  const initLayout = () => {
    NavigationBar.setPositionAsync("relative");
    NavigationBar.setVisibilityAsync("hidden");
    NavigationBar.setBehaviorAsync("inset-swipe");
    NavigationBar.setBackgroundColorAsync("black");
  };

  const loadFont = async () => {
    await Font.loadAsync({
      DigitalClock: require("../assets/fonts/ds-digi.ttf"),
    });
    setFontLoaded(true);
  };

  return { orientation, fontLoaded };
}

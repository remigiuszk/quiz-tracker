import { useState, useEffect } from "react";
import * as ScreenOrientation from "expo-screen-orientation";
import * as NavigationBar from "expo-navigation-bar";
import * as Font from "expo-font";

export default function useInitializeApp() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    loadFont();
  }, []);

  const loadFont = async () => {
    await Font.loadAsync({
      DigitalClock: require("../assets/fonts/ds-digi.ttf"),
    });
    setFontLoaded(true);
  };

  return { fontLoaded };
}

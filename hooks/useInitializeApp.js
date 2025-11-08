import { useState, useEffect } from "react";
import * as Font from "expo-font";
import * as ScreenOrientation from "expo-screen-orientation";
import { Platform } from "react-native";

export default function useInitializeApp() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        await ScreenOrientation.lockAsync(
          ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT
        );
      } catch {}
      await loadFont();
    })();
  }, []);

  const loadFont = async () => {
    await Font.loadAsync({
      DigitalClock: require("../assets/fonts/ds-digi.ttf"),
    });
    setFontLoaded(true);
  };

  return { fontLoaded };
}

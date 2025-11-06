import { useState, useEffect } from "react";
import * as Font from "expo-font";
import * as ScreenOrientation from "expo-screen-orientation";
import { Platform } from "react-native";

export default function useInitializeApp() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      // ANDROID: wymuś landscape na starcie (działa w Expo Go i w buildach)
      if (Platform.OS === "android") {
        try {
          await ScreenOrientation.lockAsync(
            ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT
          );
        } catch {}
      }
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

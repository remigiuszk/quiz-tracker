import { useState, useEffect } from "react";
import * as ScreenOrientation from "expo-screen-orientation";
import * as Font from "expo-font";

export default function useInitializeApp() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      await Promise.all([lockOrientationSafely(), loadFont()]);
    })();
  }, []);

  const lockOrientationSafely = async () => {
    try {
      // iOS: to zadziała tylko, jeśli w app.json orientacja zezwala na landscape (patrz sekcja 2)
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT
      );
    } catch {
      // jeśli iOS nie pozwala (zła konfiguracja), nie wywalaj aplikacji
    }
  };

  const loadFont = async () => {
    try {
      await Font.loadAsync({
        DigitalClock: require("../assets/fonts/ds-digi.ttf"),
      });
      setFontLoaded(true);
    } catch {
      setFontLoaded(false);
    }
  };

  return {fontLoaded };
}

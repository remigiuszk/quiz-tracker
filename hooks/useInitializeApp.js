import { useState, useEffect } from "react";
import * as ScreenOrientation from "expo-screen-orientation";
import * as Font from "expo-font";

export default function useInitializeApp() {
  const [orientation, setOrientation] = useState(1);
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    lockOrientation();
    loadFont();
  }, []);

  useEffect(() => {
    (async () => {
      await Promise.all([lockOrientationSafely(), loadFont()]);
    })();
  }, []);

  const lockOrientation = async () => {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT
    );
    const o = await ScreenOrientation.getOrientationAsync();
    setOrientation(o);
  };

  const lockOrientationSafely = async () => {
    try {
      // iOS: to zadziała tylko, jeśli w app.json orientacja zezwala na landscape (patrz sekcja 2)
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT
      );
    } catch {
      // jeśli iOS nie pozwala (zła konfiguracja), nie wywalaj aplikacji
    }
    try {
      const current = await ScreenOrientation.getOrientationAsync();
      setOrientation(current);
    } catch {
      setOrientation(null);
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

  return { orientation, fontLoaded };
}

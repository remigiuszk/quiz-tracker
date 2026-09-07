import { useState, useEffect } from "react";
import * as Font from "expo-font";
import * as ScreenOrientation from "expo-screen-orientation";
import { Platform } from "react-native";
import { store } from "../state/store";
import { setLayout, showLayoutChoice } from "../state/settings/settingsSlice";
import { loadPersistedSettings } from "../state/settings/settingsStorage";

export default function useInitializeApp() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      const persisted = await loadPersistedSettings();
      if (persisted?.layout) {
        store.dispatch(setLayout(persisted.layout));
      } else {
        store.dispatch(showLayoutChoice());
      }
      try {
        await ScreenOrientation.lockAsync(
          persisted?.layout === "vertical"
            ? ScreenOrientation.OrientationLock.PORTRAIT_UP
            : ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT
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

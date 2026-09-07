import { useEffect } from "react";
import { useSelector } from "react-redux";
import * as ScreenOrientation from "expo-screen-orientation";

export default function useOrientationSync() {
  const layout = useSelector((state) => state.settings.layout);

  useEffect(() => {
    (async () => {
      try {
        await ScreenOrientation.lockAsync(
          layout === "vertical"
            ? ScreenOrientation.OrientationLock.PORTRAIT_UP
            : ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT
        );
      } catch {}
    })();
  }, [layout]);
}

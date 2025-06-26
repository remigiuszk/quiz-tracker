import { StyleSheet } from "react-native";
import { THEME } from "../theme/theme";

const DEFAULT_TEXT = {
  letterSpacing: 1.3,
  textTransform: "uppercase",
  fontWeight: "600",
  fontFamily: "System",
  textAlign: "center",
};

export const TEXT_STYLES = StyleSheet.create({
  lightTextSmall: {
    ...DEFAULT_TEXT,
    color: THEME.textLight,
    fontSize: 18,
  },
  lightTextLarge: {
    ...DEFAULT_TEXT,
    color: THEME.textLight,
    fontSize: 24,
  },
  darkTextSmall: {
    ...DEFAULT_TEXT,
    color: THEME.textDark,
    fontSize: 18,
  },
  darkTextLarge: {
    ...DEFAULT_TEXT,
    color: THEME.textDark,
    fontSize: 24,
  },
});

import { StyleSheet } from "react-native";
import { THEME } from "../theme/theme";

const DEFAULT_TEXT = {
  letterSpacing: 1.3,
  textTransform: "uppercase",
  fontWeight: "600",
  fontFamily: "System",
  textAlign: "center",
};

const HELP_TEXT = {
  fontFamily: "Poppins-SemiBold",
  lineHeight: 22,
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
  helpTextQuestion: {
    ...HELP_TEXT,
    fontSize: 22,
    color: "#e0e0e0",
    fontWeight: "600",
    lineHeight: 28,
    letterSpacing: 0.3,
    textShadowColor: "rgba(0, 0, 0, 0.4)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  helpTextAnswer: {
    ...HELP_TEXT,
    fontSize: 16,
    color: THEME.textLight,
  },
  helpHeader: {
    ...DEFAULT_TEXT,
    fontSize: 32,
    color: THEME.primaryColor,
  },
});

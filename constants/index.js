import { StyleSheet } from "react-native";

export const PLAYER_COLORS = [
  { name: "Red", colorCode: "#ff595e" },
  { name: "Yellow", colorCode: "#ffca3a" },
  { name: "Green", colorCode: "#8ac926" },
  { name: "Blue", colorCode: "#1982c4" },
  { name: "Purple", colorCode: "#6a4c93" },
  { name: "Pink", colorCode: "#f15bb5" },
];

export const THEME = {
  background: "#1f1f1f",
  foreground: "#292929",
  foregroundLight: "#403f4c",
  foregroundBlack: "#121420",
  text: "#d6d5e3",
};

export const STYLES = StyleSheet.create({
  shadow: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.19,
    shadowRadius: 5.62,
    elevation: 6,
  },
});

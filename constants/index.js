import { StyleSheet } from "react-native";
import tinycolor from "tinycolor2";

export const PLAYER_COLORS = [
  { name: "Red", colorCode: "#ff595e" },
  { name: "Yellow", colorCode: "#ffca3a" },
  { name: "Green", colorCode: "#8ac926" },
  { name: "Blue", colorCode: "#1982c4" },
  { name: "Purple", colorCode: "#6a4c93" },
  { name: "Pink", colorCode: "#f15bb5" },
];

const blendWithWhite = (opacityPercentage) =>
  tinycolor.mix("#ffffff", "#121212", 100 - opacityPercentage).toHexString();

export const THEME = {
  backgroundBase: "#1f2021",
  background1: blendWithWhite(5),
  background2: blendWithWhite(7),
  background3: blendWithWhite(9),
  background4: blendWithWhite(11),
  text: "#d6d5e3",
};

export const STYLES = StyleSheet.create({
  shadow: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5.62,
    elevation: 8,
  },
  shadowBottom: {
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 6,
  },
});

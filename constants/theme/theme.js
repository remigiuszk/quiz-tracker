import tinycolor from "tinycolor2";

export const PLAYER_COLORS = [
  { name: "Red", colorCode: "#ff595e" },
  { name: "Yellow", colorCode: "#fcf068" },
  { name: "Green", colorCode: "#8ac926" },
  { name: "Blue", colorCode: "#1982c4" },
  { name: "Purple", colorCode: "#6a4c93" },
  { name: "Pink", colorCode: "#f15bb5" },
  { name: "Teal", colorCode: "#40f7a8" },
  { name: "White", colorCode: "#f2f7f5" },
  { name: "Orange", colorCode: "#ffab19" },
  { name: "Baby blue", colorCode: "#9decfa" },
];

const blendWithWhite = (opacityPercentage) =>
  tinycolor.mix("#ffffff", "#121212", 100 - opacityPercentage).toHexString();

export const THEME = {
  backgroundBase: "#121212",
  background1: blendWithWhite(5),
  background2: blendWithWhite(7),
  background3: blendWithWhite(9),
  background4: blendWithWhite(11),
  background5: blendWithWhite(13),
  background6: blendWithWhite(15),
  background7: blendWithWhite(17),
  primaryColor: "#bde69e",
  secondaryColor: "#C79EE6",
  textLight: "#A0A3BD",
  textDark: "#121212",
};

import { StyleSheet, Text, View } from "react-native";
import { THEME, STYLES } from "../../../constants";

const PlayerName = ({ name, fontSize }) => {
  return (
    <View style={[styles.textContainer, STYLES.shadow]}>
      <Text style={[{ fontSize: fontSize }, styles.playerText]}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    flex: 4,
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
  playerText: {
    color: "#A0A3BD",
    letterSpacing: 1.3, // większe rozstawienie liter
    textTransform: "uppercase", // wszystkie litery wielkie
    fontWeight: "600", // półpogrubiony
    fontFamily: "System",
    textAlign: "center",
  },
});

export default PlayerName;

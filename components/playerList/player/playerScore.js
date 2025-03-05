import { StyleSheet, Text, View } from "react-native";
import { THEME } from "../../../constants";

const PlayerScore = ({ color, score }) => {
  return (
    <View style={[styles.scoreContainer, { borderColor: color }]}>
      <Text style={[styles.scoreInput, { color: color }]} editable={false}>
        {score}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  scoreContainer: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    backgroundColor: THEME.background,
    padding: 1,
    borderRadius: 3,
    width: "32.5%",
    borderWidth: 1,
    textAlign: "center",
  },
  scoreInput: {
    fontSize: 20, // TODO: need to be responsive
    textAlign: "center",
    fontFamily: "DigitalClock",
    letterSpacing: 4,
    width: "100%",
  },
});

export default PlayerScore;

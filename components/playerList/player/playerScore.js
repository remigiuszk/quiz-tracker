import { StyleSheet, Text, View } from "react-native";
import { STYLES, THEME } from "../../../constants";

const PlayerScore = ({ color, score, playerCount }) => {
  const dynamicFlex = playerCount > 3 ? 2 : 1;

  return (
    <View
      style={[styles.scoreContainer, STYLES.shadow, { borderColor: color, flex: dynamicFlex }]}
    >
      <Text style={[styles.scoreInput, { color: color }]} editable={false}>
        {score}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  scoreContainer: {
    height: "100%",
    justifyContent: "center",
    backgroundColor: THEME.background2,
    padding: 1,
    borderRadius: 3,
    width: "40%",
    borderWidth: 0.3,
    textAlign: "center",
  },
  scoreInput: {
    fontSize: 30, // TODO: need to be responsive
    textAlign: "center",
    fontFamily: "DigitalClock",
    letterSpacing: 4,
    width: "100%",
    backgroundColor: THEME.background2
  },
});

export default PlayerScore;

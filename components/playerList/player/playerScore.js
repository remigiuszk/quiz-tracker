import { StyleSheet, Text, View, Pressable } from "react-native";
import { useDispatch } from "react-redux";
import { SHADOW_STYLES, THEME } from "../../../constants";
import { adjustPlayerScore } from "../../../state/players/playersSlice";

const PlayerScore = ({ id, color, score, playerCount }) => {
  const dispatch = useDispatch();
  const dynamicFlex = playerCount > 3 ? 2 : 1;
  const fontSize = playerCount > 6 ? 18 : 24;

  return (
    <View
      style={[
        styles.scoreContainer,
        SHADOW_STYLES.default,
        { borderColor: color, flex: dynamicFlex },
      ]}
    >
      <Pressable
        style={styles.step}
        android_ripple={{ color: "#dddddd" }}
        onPress={() => dispatch(adjustPlayerScore({ id, amount: -1 }))}
      >
        <Text style={[styles.stepLabel, { color: color }]}>-</Text>
      </Pressable>
      <Text style={[styles.scoreInput, { color: color, fontSize: fontSize }]}>
        {score}
      </Text>
      <Pressable
        style={styles.step}
        android_ripple={{ color: "#dddddd" }}
        onPress={() => dispatch(adjustPlayerScore({ id, amount: 1 }))}
      >
        <Text style={[styles.stepLabel, { color: color }]}>+</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  scoreContainer: {
    flexDirection: "row",
    height: "100%",
    alignItems: "center",
    backgroundColor: THEME.background2,
    padding: 1,
    borderRadius: 14,
    width: "85%",
    borderWidth: 1.5,
    overflow: "hidden",
  },
  step: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: THEME.background5,
  },
  stepLabel: {
    fontSize: 18,
    fontWeight: "700",
  },
  scoreInput: {
    flex: 2,
    textAlign: "center",
    fontFamily: "DigitalClock",
    backgroundColor: THEME.background2,
  },
});

export default PlayerScore;

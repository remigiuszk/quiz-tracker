import { StyleSheet, Text, View } from "react-native";
import { THEME } from "../../../constants";

const PlayerName = ({ name }) => {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.playerText}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    flex: 4,
    width: "100%",
  },
  playerText: {
    color: THEME.text,
    fontSize: 15,
    textAlign: "center",
  },
});

export default PlayerName;

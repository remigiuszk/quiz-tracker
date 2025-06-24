import { StyleSheet, Text, View } from "react-native";
import { SHADOW_STYLES, TEXT_STYLES } from "../../../constants";

const PlayerName = ({ name, fontSize }) => {
  return (
    <View style={[styles.textContainer, SHADOW_STYLES.default]}>
      <Text style={[{ fontSize: fontSize }, TEXT_STYLES.lightTextLarge]}>
        {name}
      </Text>
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
});

export default PlayerName;

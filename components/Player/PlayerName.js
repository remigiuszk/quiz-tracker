import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { THEME } from "./../../constants";

const PlayerName = ({ name }) => {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.playerText}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    width: "100%",
    padding: 8,
  },
  playerText: {
    color: THEME.text,
    fontSize: 20,
    textAlign: "center",
  },
});

export default PlayerName;

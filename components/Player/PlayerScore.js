import { StyleSheet, TextInput, View } from "react-native";

const PlayerScore = () => {
  return (
    <View style={styles.scoreContainer}>
      <TextInput style={styles.scoreInput} readOnly="true">
        55
      </TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  scoreContainer: {},
  scoreInput: {},
});

export default PlayerScore;

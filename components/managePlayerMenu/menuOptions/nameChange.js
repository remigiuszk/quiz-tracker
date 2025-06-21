import { Button, StyleSheet, TextInput, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { changePlayerName } from "../../../state/players/playersSlice";
import { useEffect, useState } from "react";
import { STYLES, THEME } from "../../../constants";

const NameChange = () => {
  const dispatch = useDispatch();
  const managedPlayer = useSelector((state) => state.players.manageModalPlayer);
  const [enteredName, setEnteredName] = useState("");

  useEffect(() => {
    if (managedPlayer?.name) {
      setEnteredName(managedPlayer.name);
    }
  }, [managedPlayer]);

  const inputHandler = (enteredText) => {
    setEnteredName(enteredText);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, STYLES.shadow]}
        onChangeText={inputHandler}
        value={enteredName}
        placeholder="Enter new name"
      ></TextInput>
      <Button
        title="Apply"
        onPress={() => dispatch(changePlayerName(enteredName))}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 6,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    gap: 12,
  },
  input: {
    color: THEME.background,
    borderColor: THEME.background,
    borderRadius: 5,
    borderWidth: 0.5,
    backgroundColor: THEME.foregroundLighter,
    width:"60%",
    textAlign:"center"
  },
});

export default NameChange;

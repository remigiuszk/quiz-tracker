import { Button, StyleSheet, TextInput, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { changePlayerName } from "../../../state/players/playersSlice";
import { useEffect, useState } from "react";
import { COMPONENT_STYLES, SHADOW_STYLES } from "../../../constants";

const NameChange = () => {
  const dispatch = useDispatch();
  const managedPlayer = useSelector((state) => state.players.manageModalPlayer);
  const [enteredName, setEnteredName] = useState("");

  useEffect(() => {
    if (managedPlayer?.name) {
      setEnteredName(managedPlayer.name);
    }
  }, []);

  const inputHandler = (enteredText) => {
    dispatch(changePlayerName(enteredText));
    setEnteredName(enteredText);
  };

  return (
    <View style={styles.container}>
      <TextInput
        maxLength={12}
        style={[
          COMPONENT_STYLES.defaultInput,
          styles.input,
          SHADOW_STYLES.default,
        ]}
        onChangeText={inputHandler}
        value={enteredName}
        placeholder="Enter new name"
      ></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
  input: {
    width: "60%",
    textAlign: "center",
  },
});

export default NameChange;

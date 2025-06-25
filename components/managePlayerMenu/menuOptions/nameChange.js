import { Button, StyleSheet, TextInput, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { changePlayerName } from "../../../state/players/playersSlice";
import { useEffect, useState } from "react";
import { COMPONENT_STYLES, SHADOW_STYLES } from "../../../constants";

const NameChange = () => {
  console.log("RENDER NameChange");
  const dispatch = useDispatch();
  //const managedPlayer = useSelector((state) => state.players.manageModalPlayer);
  const [enteredName, onChangeText] = useState("");

  // useEffect(() => {
  //   if (managedPlayer?.name && managedPlayer.name !== enteredName) {
  //     setEnteredName(managedPlayer.name);
  //     console.log("managed player" + managedPlayer.name);
  //   }
  // }, [managedPlayer]);

  return (
    <View style={styles.container}>
      <TextInput
        style={[
          COMPONENT_STYLES.defaultInput,
          styles.input,
          SHADOW_STYLES.default,
        ]}
        onChangeText={onChangeText}
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
    width: "60%",
    textAlign: "center",
  },
});

export default NameChange;

import { Button, StyleSheet, View } from "react-native";
import { PLAYER_COLORS, STYLES, THEME } from "../../constants";

const OptionsBar = () => {
  const addNewPlayer = () => {
    setPlayers((currentPlayers) => [
      ...currentPlayers,
      {
        name: "Player" + (currentPlayers.length + 1),
        color: PLAYER_COLORS[currentPlayers.length].colorCode,
        id: Math.random().toString(),
        score: 0,
      },
    ]);
  };

  const deleteAPlayer = () => {
    setPlayers((currentPlayers) => [
      currentPlayers.filter((player) => player.id !== currentPlayers[0].id),
    ]);
  };
  return (
    <View style={[styles.optionsBarContainer, STYLES.shadow]}>
      <Button width="" title="add" onPress={addNewPlayer}></Button>
      <Button title="delete" onPress={deleteAPlayer}></Button>
    </View>
  );
};
const styles = StyleSheet.create({
  optionsBarContainer: {
    width: "100%",
    flex: 1,
    backgroundColor: THEME.foreground,
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
  },
});

export default OptionsBar;

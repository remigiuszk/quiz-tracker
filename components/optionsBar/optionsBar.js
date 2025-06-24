import { Button, StyleSheet, View } from "react-native";
import { PLAYER_COLORS, STYLES, THEME } from "../../constants";
import { useDispatch } from "react-redux";
import { addNewPlayer, resetPlayers } from "../../state/players/playersSlice";

const OptionsBar = () => {
  const dispatch = useDispatch();

  return (
    <View style={[styles.optionsBarContainer, STYLES.shadowBottom]}>
      <Button
        width=""
        title="add"
        onPress={() => dispatch(addNewPlayer())}
      ></Button>
      <Button title="delete" onPress={() => dispatch(resetPlayers())}></Button>
    </View>
  );
};
const styles = StyleSheet.create({
  optionsBarContainer: {
    width: "100%",
    flex: 1,
    backgroundColor: THEME.background2,
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
  },
});

export default OptionsBar;

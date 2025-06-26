import { Button, StyleSheet, View } from "react-native";
import { SHADOW_STYLES, THEME } from "../../constants";
import { useDispatch } from "react-redux";
import { addNewPlayer, resetPlayers } from "../../state/players/playersSlice";
import IconButton from "../shared/buttons/iconButton";

const OptionsBar = () => {
  const dispatch = useDispatch();

  return (
    <View style={[styles.optionsBarContainer, SHADOW_STYLES.shadowBottom]}>
      <IconButton iconName="newPlayer" action={addNewPlayer()} width="50" height="50"/>
      <IconButton iconName="newGame" action={resetPlayers()} width="50" height="50"/>
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
    paddingRight:12,
  },
});

export default OptionsBar;

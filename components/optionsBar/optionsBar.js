import { Button, StyleSheet, View } from "react-native";
import { SHADOW_STYLES, THEME } from "../../constants";
import { useDispatch } from "react-redux";
import { addNewPlayer, resetPlayers } from "../../state/players/playersSlice";
import IconButton from "../shared/buttons/iconButton";

const OptionsBar = () => {
  const dispatch = useDispatch();

  return (
    <View style={[styles.optionsBarContainer, SHADOW_STYLES.shadowBottom]}>
      <IconButton
        iconName="newPlayer"
        action={addNewPlayer()}
        width="60"
        height="60"
      />
      <IconButton
        iconName="newGame"
        action={resetPlayers()}
        width="60"
        height="60"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  optionsBarContainer: {
    width: "100%",
    flex: 1.5,
    backgroundColor: THEME.background2,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    flexDirection: "row",
    paddingRight: 12,
    gap:6,
    paddingTop:30
  },
});

export default OptionsBar;

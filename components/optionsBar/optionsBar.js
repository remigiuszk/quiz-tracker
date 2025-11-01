import { Alert, Button, StyleSheet, View } from "react-native";
import { SHADOW_STYLES, THEME } from "../../constants";
import { useDispatch } from "react-redux";
import { addNewPlayer, resetPlayers } from "../../state/players/playersSlice";
import IconButton from "../shared/buttons/iconButton";
import { useLocalization } from "../../hooks/useLocalization";
import { helpModalOn } from "../../state/help/helpSlice";

const OptionsBar = () => {
  const dispatch = useDispatch();
  const localization = useLocalization();

  const newGameConfirmationAlert = () => {
    Alert.alert(
      localization.NEW_GAME_ALERT_TITLE,
      localization.NEW_GAME_ALERT_MSG,
      [
        {
          text: localization.ALERT_YES,
          onPress: () => dispatch(resetPlayers()),
        },
        {
          text: localization.ALERT_NO,
          style: "cancel",
        },
      ]
    );
  };

  return (
    <View style={[styles.optionsBarContainer, SHADOW_STYLES.default]}>
      <IconButton
        iconName="help"
        action={helpModalOn()}
        width="60"
        height="60"
      />
      <IconButton
        iconName="newPlayer"
        action={addNewPlayer(localization.PLAYER)}
        width="60"
        height="60"
      />
      <IconButton
        iconName="newGame"
        action={newGameConfirmationAlert}
        width="60"
        height="60"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  optionsBarContainer: {
    width: "100%",
    flex: 2,
    backgroundColor: THEME.background1,
    justifyContent: "flex-end",
    alignItems: "flex-start",
    flexDirection: "row",
    paddingRight: 12,
    borderColor: THEME.background3,
    borderBottomWidth: 1
  },
});

export default OptionsBar;

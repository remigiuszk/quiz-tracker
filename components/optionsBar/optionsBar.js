import { Alert, Button, StyleSheet, View } from "react-native";
import { SHADOW_STYLES, THEME } from "../../constants";
import { useDispatch } from "react-redux";
import { addNewPlayer, resetPlayers } from "../../state/players/playersSlice";
import IconButton from "../shared/buttons/iconButton";
import { useLocalization } from "../../hooks/useLocalization";

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
    <View style={[styles.optionsBarContainer, SHADOW_STYLES.shadowBottom]}>
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

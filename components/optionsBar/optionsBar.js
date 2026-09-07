import { Alert, Button, StyleSheet, View } from "react-native";
import { SHADOW_STYLES, THEME } from "../../constants";
import { useDispatch } from "react-redux";
import { addNewPlayer, resetPlayers } from "../../state/players/playersSlice";
import IconButton from "../shared/buttons/iconButton";
import { useLocalization } from "../../hooks/useLocalization";
import { helpModalOn } from "../../state/help/helpSlice";
import {
  settingsModalOn,
  showLayoutChoice,
} from "../../state/settings/settingsSlice";
import { clearPersistedSettings } from "../../state/settings/settingsStorage";

const OptionsBar = () => {
  const dispatch = useDispatch();
  const localization = useLocalization();

  const resetOnboarding = async () => {
    await clearPersistedSettings();
    dispatch(showLayoutChoice());
  };

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
      <View style={styles.iconGroup}>
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
      <View style={styles.iconGroup}>
        <IconButton
          iconName="settings"
          action={settingsModalOn()}
          onLongPress={resetOnboarding}
          width="60"
          height="60"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  optionsBarContainer: {
    width: "100%",
    backgroundColor: THEME.background1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderColor: THEME.background3,
    borderBottomWidth: 1
  },
  iconGroup: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
});

export default OptionsBar;

import {
  Alert,
  Modal,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementPlayerScore,
  deletePlayer,
  managePlayerMenuOff,
  resetPlayerScore,
} from "../../state/players/playersSlice";
import NameChange from "./menuOptions/nameChange";
import { useEffect, useState } from "react";
import { THEME, SHADOW_STYLES } from "../../constants";
import DefaultButton from "../shared/buttons/defaultButton";
import { useLocalization } from "../../hooks/useLocalization";

const ManagePlayerMenu = () => {
  const showModal = useSelector((state) => state.players.managePlayerModalOn);
  const managedPlayer = useSelector((state) => state.players.manageModalPlayer);
  const localization = useLocalization();
  const dispatch = useDispatch();
  const [kbd, setKbd] = useState(false);

  useEffect(() => {
    const sh = Keyboard.addListener("keyboardDidShow", () => setKbd(true));
    const hd = Keyboard.addListener("keyboardDidHide", () => setKbd(false));
    return () => {
      sh.remove();
      hd.remove();
    };
  }, []);

  const deleteConfirmationAlert = () => {
    Alert.alert(
      localization.DELETE_PLAYER_ALERT_TITLE,
      localization.DELETE_PLAYER_ALERT_MSG + managedPlayer?.name + "?",
      [
        {
          text: localization.ALERT_YES,
          onPress: () => dispatch(deletePlayer(managedPlayer.id)),
        },
        {
          text: localization.ALERT_NO,
          style: "cancel",
        },
      ]
    );
  };

  return (
    <Modal
      transparent={true}
      visible={showModal}
      animationType="slide"
      statusBarTranslucent={true}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.backdrop}>
          <View
            style={[
              styles.container,
              SHADOW_STYLES.default,
              { height: kbd ? "95%" : "85%", padding: kbd ? 0 : 40 },
            ]}
          >
            <NameChange />
            {!kbd && (
              <>
                <DefaultButton
                  action={decrementPlayerScore()}
                  text={localization.DECREMENT_SCORE}
                  width="90%"
                ></DefaultButton>
                <DefaultButton
                  action={resetPlayerScore()}
                  text={localization.RESET_SCORE}
                  width="90%"
                ></DefaultButton>
                <DefaultButton
                  onPress={deleteConfirmationAlert}
                  text={localization.DELETE_PLAYER}
                  width="90%"
                ></DefaultButton>
              </>
            )}
            <DefaultButton
              action={managePlayerMenuOff()}
              text={localization.CLOSE_WINDOW}
              width="90%"
              secondaryColor={true}
            ></DefaultButton>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0)",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    padding: 6,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
    width: "60%",
    height: "80%",
    backgroundColor: THEME.background4,
    borderRadius: 10,
  },
});

export default ManagePlayerMenu;

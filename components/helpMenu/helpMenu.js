import {
  Modal,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import { useEffect, useState } from "react";
import { THEME, SHADOW_STYLES, TEXT_STYLES } from "../../constants";
import DefaultButton from "../shared/buttons/defaultButton";
import { useLocalization } from "../../hooks/useLocalization";

const HelpMenu = () => {
  const showModal = useSelector((state) => state.players.managePlayerModalOn);
  const localization = useLocalization();

  return (
    <Modal
      transparent={true}
      visible={showModal}
      animationType="slide"
      statusBarTranslucent={true}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.backdrop}>
          <View style={[styles.container, SHADOW_STYLES.default]}>
            <Text style={TEXT_STYLES.lightTextLarge}>
              {localization.HELP_MENU_TITLE}
            </Text>
            <Text style={TEXT_STYLES.lightTextSmall}>
              {localization.HELP_MENU_WHATS_THIS_Q}
            </Text>
            <Text style={TEXT_STYLES.lightTextSmall}>
              {localization.HELP_MENU_WHATS_THIS_A}
            </Text>
            <Text style={TEXT_STYLES.lightTextSmall}>
              {localization.HELP_MENU_WHAT_DO_YOU_MEAN_Q}
            </Text>
            <Text style={TEXT_STYLES.lightTextSmall}>
              {localization.HELP_MENU_WHAT_DO_YOU_MEAN_A}
            </Text>
            <DefaultButton
              text={localization.HELP_MENU_CLOSE}
              width="40%"
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
    width: "80%",
    height: "80%",
    backgroundColor: THEME.background4,
    borderRadius: 10,
  },
});

export default HelpMenu;

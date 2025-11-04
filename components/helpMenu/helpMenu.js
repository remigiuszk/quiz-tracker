import { Modal, StyleSheet, View, Text } from "react-native";
import { THEME, SHADOW_STYLES, TEXT_STYLES } from "../../constants";
import DefaultButton from "../shared/buttons/defaultButton";
import { useLocalization } from "../../hooks/useLocalization";
import { useSelector } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";
import { helpModalOff } from "../../state/help/helpSlice";

const HelpMenu = () => {
  const showModal = useSelector((state) => state.help.helpModalOn);
  const localization = useLocalization();

  return (
    <Modal
      transparent={true}
      visible={showModal}
      animationType="slide"
      statusBarTranslucent={true}
    >
      <SafeAreaView style={styles.backdrop} edges={["top", "left", "right"]}>
        <View style={[SHADOW_STYLES.default, styles.container]}>
          <View style={styles.header}>
            <Text style={TEXT_STYLES.helpHeader}>
              {localization.HELP_MENU_TITLE}
            </Text>
          </View>
          <View style={[styles.textContainer]}>
            <View style={styles.qaContainerL}>
              <Text style={TEXT_STYLES.helpTextQuestion}>
                {localization.HELP_MENU_WHATS_THIS_Q}
              </Text>
              <Text style={TEXT_STYLES.helpTextAnswer}>
                {localization.HELP_MENU_WHATS_THIS_A}
              </Text>
            </View>
            <View style={styles.qaContainerR}>
              <Text style={TEXT_STYLES.helpTextQuestion}>
                {localization.HELP_MENU_WHAT_DO_YOU_MEAN_Q}
              </Text>
              <Text style={TEXT_STYLES.helpTextAnswer}>
                {localization.HELP_MENU_WHAT_DO_YOU_MEAN_A}
              </Text>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <DefaultButton
              action={helpModalOff()}
              text={localization.HELP_MENU_CLOSE}
              width="30%"
              height="90%"
            ></DefaultButton>
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0)",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "85%",
    height: "95%",
    backgroundColor: THEME.background4,
    borderRadius: 25,
  },
  header: {
    width: "100%",
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    flex: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    width: "100%",
    height: "100%",
  },
  qaContainerL: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: 16,
    width: "100%",
    height: "100%",
    paddingHorizontal: 20,
    borderRightWidth: 0.5,
    borderRightColor: THEME.background7,
  },
  qaContainerR: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: 16,
    width: "100%",
    height: "100%",
    paddingHorizontal: 20,
  },
  buttonContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HelpMenu;

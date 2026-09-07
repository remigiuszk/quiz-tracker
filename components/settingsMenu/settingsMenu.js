import { Modal, StyleSheet, View, Text, Switch } from "react-native";
import { THEME, SHADOW_STYLES, TEXT_STYLES } from "../../constants";
import DefaultButton from "../shared/buttons/defaultButton";
import { useLocalization } from "../../hooks/useLocalization";
import { useDispatch, useSelector } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  settingsModalOff,
  setLayout,
} from "../../state/settings/settingsSlice";
import { persistSettings } from "../../state/settings/settingsStorage";

const SettingsMenu = () => {
  const showModal = useSelector((state) => state.settings.settingsModalOn);
  const layout = useSelector((state) => state.settings.layout);
  const localization = useLocalization();
  const dispatch = useDispatch();

  return (
    <Modal
      transparent={true}
      visible={showModal}
      animationType="slide"
      statusBarTranslucent={true}
      supportedOrientations={["landscape", "portrait"]}
    >
      <SafeAreaView style={styles.backdrop} edges={["top", "left", "right"]}>
        <View style={[SHADOW_STYLES.default, styles.container]}>
          <View style={styles.header}>
            <Text style={TEXT_STYLES.helpHeader}>
              {localization.SETTINGS_MENU_TITLE}
            </Text>
          </View>
          <View style={styles.optionRow}>
            <Text style={TEXT_STYLES.lightTextSmall}>
              {localization.SETTINGS_LAYOUT_LABEL}
            </Text>
            <View style={styles.toggleRow}>
              <Text
                style={[
                  TEXT_STYLES.lightTextSmall,
                  layout === "horizontal" && styles.activeLabel,
                ]}
              >
                {localization.SETTINGS_LAYOUT_HORIZONTAL}
              </Text>
              <Switch
                value={layout === "vertical"}
                onValueChange={(isVertical) => {
                  const newLayout = isVertical ? "vertical" : "horizontal";
                  dispatch(setLayout(newLayout));
                  persistSettings({ layout: newLayout });
                }}
                trackColor={{
                  false: THEME.background6,
                  true: THEME.background6,
                }}
                thumbColor={THEME.primaryColor}
              />
              <Text
                style={[
                  TEXT_STYLES.lightTextSmall,
                  layout === "vertical" && styles.activeLabel,
                ]}
              >
                {localization.SETTINGS_LAYOUT_VERTICAL}
              </Text>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <DefaultButton
              action={settingsModalOff()}
              text={localization.CLOSE_WINDOW}
              width="45%"
              height="100%"
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
    width: "60%",
    height: "60%",
    backgroundColor: THEME.background4,
    borderRadius: 25,
    padding: 8,
    gap: 12,
  },
  header: {
    width: "100%",
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  optionRow: {
    flex: 5,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
  },
  toggleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  activeLabel: {
    color: THEME.primaryColor,
  },
  buttonContainer: {
    flex: 2,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SettingsMenu;

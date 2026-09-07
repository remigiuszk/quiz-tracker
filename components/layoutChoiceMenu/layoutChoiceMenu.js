import { Modal, StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { THEME, SHADOW_STYLES, TEXT_STYLES } from "../../constants";
import DefaultButton from "../shared/buttons/defaultButton";
import { useLocalization } from "../../hooks/useLocalization";
import {
  setLayout,
  hideLayoutChoice,
} from "../../state/settings/settingsSlice";
import { persistSettings } from "../../state/settings/settingsStorage";

const LayoutChoiceMenu = () => {
  const visible = useSelector((state) => state.settings.layoutChoiceVisible);
  const localization = useLocalization();
  const dispatch = useDispatch();

  const choose = (layout) => {
    dispatch(setLayout(layout));
    persistSettings({ layout });
    dispatch(hideLayoutChoice());
  };

  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType="fade"
      statusBarTranslucent={true}
      supportedOrientations={["landscape", "portrait"]}
    >
      <SafeAreaView style={styles.backdrop} edges={["top", "left", "right"]}>
        <View style={[SHADOW_STYLES.default, styles.container]}>
          <Text style={[TEXT_STYLES.helpHeader, styles.title]}>
            {localization.LAYOUT_CHOICE_TITLE}
          </Text>
          <View style={styles.buttonGroup}>
            <DefaultButton
              text={localization.LAYOUT_CHOICE_HORIZONTAL}
              onPress={() => choose("horizontal")}
              width="100%"
              height={56}
            ></DefaultButton>
            <DefaultButton
              text={localization.LAYOUT_CHOICE_VERTICAL}
              onPress={() => choose("vertical")}
              width="100%"
              height={56}
              secondaryColor={true}
            ></DefaultButton>
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "75%",
    backgroundColor: THEME.background4,
    borderRadius: 25,
    padding: 24,
    gap: 22,
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    textAlign: "center",
  },
  buttonGroup: {
    width: "100%",
    gap: 14,
  },
});

export default LayoutChoiceMenu;

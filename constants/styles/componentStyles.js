import { StyleSheet } from "react-native";
import { SHADOW_STYLES } from "./shadowStyles";
import { TEXT_STYLES } from "./textStyles";
import { THEME } from "../theme/theme";

export const COMPONENT_STYLES = StyleSheet.create({
  defaultInput: {
    ...SHADOW_STYLES,
    ...TEXT_STYLES.lightTextSmall,
    borderColor: THEME.background7,
    borderRadius: 5,
    borderWidth: 2,
    backgroundColor: THEME.background5,
  },
  defaultButton: {
    ...SHADOW_STYLES,
    backgroundColor: THEME.secondaryColor,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});

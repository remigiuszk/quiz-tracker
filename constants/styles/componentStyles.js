import { StyleSheet } from "react-native";
import { SHADOW_STYLES } from "./shadowStyles";
import { TEXT_STYLES } from "./textStyles";
import { THEME } from "../theme/theme";

export const COMPONENT_STYLES = StyleSheet.create({
  defaultInput: {
    ...SHADOW_STYLES,
    borderColor: THEME.background7,
    borderRadius: 5,
    borderWidth: 2,
    backgroundColor: THEME.background5,
    color: THEME.textLight,
    fontSize: 18,
  },
  defaultButton: {
    ...SHADOW_STYLES,
    backgroundColor: THEME.secondaryColor,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});

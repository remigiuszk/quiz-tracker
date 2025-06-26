import { StyleSheet } from "react-native";

const SHADOW_BASE = {
  shadowColor: "#000000",
  shadowOffset: {
    width: 0,
    height: 6,
  },
};

export const SHADOW_STYLES = StyleSheet.create({
  default: {
    ...SHADOW_BASE,
    shadowOpacity: 0.2,
    shadowRadius: 5.62,
    elevation: 8,
  },
  shadowBottom: {
    ...SHADOW_BASE,
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 6,
  },
});

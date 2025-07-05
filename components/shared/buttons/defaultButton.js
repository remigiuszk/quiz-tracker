import { Pressable, StyleSheet, Text, View } from "react-native";
import { COMPONENT_STYLES, TEXT_STYLES, THEME } from "../../../constants";
import { useDispatch } from "react-redux";

const DefaultButton = ({
  text,
  width = "100%",
  height = "20%",
  action = null,
  onPress = null,
  secondaryColor = false,
}) => {
  const dispatch = useDispatch();
  const color = secondaryColor ? THEME.secondaryColor : THEME.primaryColor;

  return (
    <View
      style={[
        COMPONENT_STYLES.defaultButton,
        { width: width, backgroundColor: color, height: height },
      ]}
    >
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        onPress={() => {
          if (action !== null) {
            dispatch(action);
          }
          if (onPress !== null) {
            onPress();
          }
        }}
        style={styles.pressable}
      >
        <Text style={TEXT_STYLES.darkTextSmall}>{text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  pressable: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default DefaultButton;

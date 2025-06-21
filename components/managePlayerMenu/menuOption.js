import { Pressable, StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { decrementPlayerScore } from "../../state/players/playersSlice";

const MenuOption = ({ action, text, icon }) => {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          dispatch(action);
        }}
      >
        <Text style={styles.text}>{text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "flex-start",
    gap: 3,
    padding: 8,
  },
  text: {},
});

export default MenuOption;

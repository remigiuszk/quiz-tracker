import { Image, Pressable, StyleSheet, View } from "react-native";
import { THEME } from "../../../constants";

const PlayerContextMenu = () => {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={styles.pressable}
        android_ripple={{ color: "#dddddd" }}
        onPress={() => {
          dispatch(incrementPlayerScore(id));
        }}
      >
        <Image
          style={[styles.editIcon]}
          source={require("../../../assets/img/icons/setting-icon.png")}
        ></Image>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    height: "100%",
    padding:1
  },
  editIcon: { flex: 1, resizeMode: "contain", width: "100%", height: "100%" },
  pressable: {
    flex: 1,
  },
});

export default PlayerContextMenu;

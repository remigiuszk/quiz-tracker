import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";

const IconButton = ({ width = "100%", height = "20%", action, iconName }) => {
  const dispatch = useDispatch();

  const getIconSource = (iconName) => {
    if (iconName === "newPlayer")
      return require("../../../assets/img/icons/new_player.png");
    if (iconName === "newGame")
      return require("../../../assets/img/icons/new_game.png");
    if (iconName === "help")
      return require("../../../assets/img/icons/help.png");
    return null; // fallback
  };

  return (
    <View style={[{ width: width, height: height }]}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        onPress={() => {
          dispatch(action);
        }}
        style={styles.pressable}
      >
        <Image
          style={[styles.editIcon]}
          source={getIconSource(iconName)}
        ></Image>
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
    padding:6,
    marginBottom:12
  },
  editIcon: { flex: 1, resizeMode: "contain", width: "100%", height: "100%" },
});

export default IconButton;

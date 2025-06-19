import { Image, Pressable, StyleSheet, View } from "react-native";
import { useDispatch } from "react-redux";
import { managePlayerMenuOn } from "../../../state/players/playersSlice";

const PlayerContextMenu = ({ id, color }) => {
  const dispatch = useDispatch();

  return (
    <View style={[styles.buttonContainer, { backgroundColor: color }]}>
      <Pressable
        style={styles.pressable}
        android_ripple={{ color: "#dddddd" }}
        onPress={() => {
          console.log("action dispatched" + id);
          dispatch(managePlayerMenuOn(id));
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
    padding: 1,
    padding: 2,
    borderRadius: 6,
  },
  editIcon: { flex: 1, resizeMode: "contain", width: "100%", height: "100%" },
  pressable: {
    flex: 1,
  },
});

export default PlayerContextMenu;

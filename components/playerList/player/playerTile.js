import { StyleSheet, View, Image, Pressable } from "react-native";
import { SHADOW_STYLES } from "../../../constants";
import { useDispatch } from "react-redux";
import {
  incrementPlayerScore,
  managePlayerMenuOn,
} from "../../../state/players/playersSlice";

const PlayerTile = ({ color, id }) => {
  const dispatch = useDispatch();

  return (
    <View
      style={[
        styles.playerTile,
        { backgroundColor: color },
        SHADOW_STYLES.default,
      ]}
    >
      <Pressable
        style={styles.pressable}
        android_ripple={{ color: "#dddddd" }}
        onPress={() => {
          console.log("onPress fired");

          dispatch(incrementPlayerScore(id));
        }}
        onLongPress={() => {
          dispatch(managePlayerMenuOn(id));
        }}
      >
        <Image
          style={[styles.playerIcon]}
          source={require("../../../assets/img/icons/person.png")}
        ></Image>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  playerTile: {
    borderRadius: 12,
    overflow: "hidden",
    flex: 2.5,
    width: "65%",
  },
  playerIcon: { flex: 1, resizeMode: "contain", width: "100%" },
  pressable: {
    flex: 1,
    width: "100%",
    heighth: "100%",
    margin: 0,
    padding: 0,
  },
});

export default PlayerTile;

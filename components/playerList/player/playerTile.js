import { StyleSheet, View, Image, Pressable } from "react-native";
import { SHADOW_STYLES } from "../../../constants";
import { useDispatch } from "react-redux";
import { incrementPlayerScore } from "../../../state/players/playersSlice";

const PlayerTile = ({ color, id }) => {
  const dispatch = useDispatch();

  return (
    <View
      style={[styles.playerTile, { backgroundColor: color }, SHADOW_STYLES.default]}
    >
      <Pressable
        style={styles.pressable}
        android_ripple={{ color: "#dddddd" }}
        onPress={() => {
          dispatch(incrementPlayerScore(id));
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
    padding: 16,
    borderRadius: 12,
    overflow: "hidden",
    flex: 2.5,
    width: "65%",
  },
  playerIcon: { flex: 1, resizeMode: "contain", width: "100%" },
  pressable: {
    flex: 1,
  },
});

export default PlayerTile;

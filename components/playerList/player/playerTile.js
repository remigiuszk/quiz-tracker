import { StyleSheet, View, Image, Pressable } from "react-native";
import { STYLES } from "../../../constants";
import { useDispatch } from "react-redux";
import { incrementPlayerScore } from "../../../state/players/playersSlice";

const PlayerTile = ({ color, id }) => {
  const dispatch = useDispatch();

  return (
    <View
      style={[styles.playerTile, { backgroundColor: color }, STYLES.shadow]}
    >
      <Pressable android_ripple={{ color: "#dddddd" }}
      onPress={dispatch(incrementPlayerScore())}>
        <Image
          style={[styles.playerIcon]}
          source={require("../../../assets/img/person.png")}
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
    flex: 3,
    width: "65%",
  },
  playerIcon: { flex: 1, resizeMode: "contain", width: "100%" },
});

export default PlayerTile;

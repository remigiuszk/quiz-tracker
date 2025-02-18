import { StyleSheet, View, Image } from "react-native";
import { STYLES } from "../../constants";

const PlayerTile = ({ color }) => {
  return (
    <View style={[styles.playerTile, { backgroundColor: color }]}>
      <Image
        style={[styles.playerIcon]}
        source={require("../../assets/img/person.png")}
      ></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  playerTile: {
    padding: 16,
    borderRadius: 12,
    overflow: "hidden",
    flex: 1.75,
    width: "60%",
  },
  playerIcon: { flex: 1, resizeMode: "contain", width:"100%" },
});

export default PlayerTile;

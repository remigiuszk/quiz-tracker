import { StyleSheet, View, Image } from "react-native";

const PlayerTile = () => {
  return (
    <View>
      <Image
        style={styles.playerIcon}
        source={require("../../assets/img/person.png")}
      ></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  playerTile: {},
  playerIcon: { width: 50, height: 50 },
});

export default PlayerTile;

import { ScrollView, StyleSheet } from "react-native";
import PlayerCardVertical from "./playerCardVertical";
import { THEME } from "../../../constants";

const PlayerListVertical = ({ players }) => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      {players.map((player) => (
        <PlayerCardVertical player={player} key={player.id} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: THEME.background1,
  },
  content: {
    paddingHorizontal: 14,
    paddingTop: 14,
  },
});

export default PlayerListVertical;

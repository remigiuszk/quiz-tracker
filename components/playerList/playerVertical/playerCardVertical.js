import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from "react-native";
import { useDispatch } from "react-redux";
import { THEME, SHADOW_STYLES } from "../../../constants";
import {
  incrementPlayerScore,
  adjustPlayerScore,
  managePlayerMenuOn,
} from "../../../state/players/playersSlice";
import PlayerContextMenu from "../player/playerContextMenu";

const CARD_HEIGHT = 100;

const PlayerCardVertical = ({ player }) => {
  const dispatch = useDispatch();

  return (
    <View style={[styles.card, SHADOW_STYLES.default]}>
      <Pressable
        style={[styles.tile, { backgroundColor: player.color }]}
        android_ripple={{ color: "#dddddd" }}
        onPress={() => dispatch(incrementPlayerScore(player.id))}
        onLongPress={() => dispatch(managePlayerMenuOn(player.id))}
      >
        <Image
          style={styles.tileIcon}
          source={require("../../../assets/img/icons/person.png")}
        ></Image>
      </Pressable>

      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.name} numberOfLines={1}>
            {player.name}
          </Text>
          <View style={styles.contextMenu}>
            <PlayerContextMenu id={player.id} color={player.color} />
          </View>
        </View>

        <Text style={[styles.score, { color: player.color }]}>
          {player.score}
        </Text>

        <View style={styles.stepRow}>
          <Pressable
            style={[styles.step, { borderColor: player.color }]}
            android_ripple={{ color: "#dddddd" }}
            onPress={() =>
              dispatch(adjustPlayerScore({ id: player.id, amount: -1 }))
            }
          >
            <Text style={[styles.stepLabel, { color: player.color }]}>
              -1
            </Text>
          </Pressable>
          <Pressable
            style={[styles.step, { borderColor: player.color }]}
            android_ripple={{ color: "#dddddd" }}
            onPress={() =>
              dispatch(adjustPlayerScore({ id: player.id, amount: 1 }))
            }
          >
            <Text style={[styles.stepLabel, { color: player.color }]}>
              +1
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    height: CARD_HEIGHT,
    backgroundColor: THEME.background3,
    borderRadius: 20,
    marginBottom: 14,
    overflow: "hidden",
  },
  tile: {
    width: 84,
    height: CARD_HEIGHT,
    alignItems: "center",
    justifyContent: "center",
  },
  tileIcon: {
    width: 36,
    height: 36,
    resizeMode: "contain",
  },
  content: {
    flex: 1,
    height: CARD_HEIGHT,
    padding: 12,
    justifyContent: "center",
    gap: 6,
    minWidth: 0,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  name: {
    flex: 1,
    fontSize: 13,
    fontWeight: "600",
    letterSpacing: 1.2,
    textTransform: "uppercase",
    color: THEME.textLight,
  },
  contextMenu: {
    width: 20,
    height: 20,
  },
  score: {
    fontSize: 30,
    lineHeight: 32,
    fontFamily: "DigitalClock",
  },
  stepRow: {
    flexDirection: "row",
    gap: 6,
  },
  step: {
    flex: 1,
    height: 32,
    borderRadius: 8,
    borderWidth: 1.5,
    backgroundColor: THEME.background2,
    justifyContent: "center",
    alignItems: "center",
  },
  stepLabel: {
    fontWeight: "700",
    fontSize: 13,
  },
});

export default PlayerCardVertical;

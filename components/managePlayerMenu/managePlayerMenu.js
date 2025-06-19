import { Button, Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { THEME } from "../../constants";
import { managePlayerMenuOff } from "../../state/players/playersSlice";

const ManagePlayerMenu = () => {
  const dispatch = useDispatch();
  const managedPlayer = useSelector((state) => state.players.manageModalPlayer);
  const showModal = useSelector((state) => state.players.managePlayerModalOn);

  return (
    <Modal visible={showModal} animationType="slide">
      <View style={styles.container}>
        <View>
          <Pressable>
            <Text>[-] Subtract Point</Text>
          </Pressable>
        </View>
        <View>
          <Text>[x] Delete Player</Text>
        </View>
        <View>
          <Text>[/] Change Name</Text>
        </View>
        <Button
          title="close"
          onPress={() => dispatch(managePlayerMenuOff())}
        ></Button>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 6,
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    gap: 12,
  },
});

export default ManagePlayerMenu;

import { Modal, Pressable, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";

const ManagePlayerMenu = ({ player, showModal }) => {
  const managedPlayer = useSelector((state) => state.managedPlayer);
  const showModal = useSelector((state) => state.showManageMenu);

  return (
    <Modal visible={showModal} animationType="slide">
      <View style={styles.container}>
        <View>
          <Pressable>
            <Text>[-] Subtract Point</Text>
          </Pressable>
        </View>
        <View>[x] Delete Player</View>
        <View>[/] Change Name</View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 10,
    backgroundColor: THEME.background,
    padding: 6,
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
    alignContent: "center",
    gap: 12,
  },
});

export default ManagePlayerMenu;

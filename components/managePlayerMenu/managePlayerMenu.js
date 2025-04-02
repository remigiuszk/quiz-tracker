import { Modal, StyleSheet, View } from "react-native";

const ManagePlayerMenu = ({ player }) => {
  return (
    <Modal>
      <View style={styles.container}>
        <View>[-] Subtract Point</View>
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
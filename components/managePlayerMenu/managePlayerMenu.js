import { Button, Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementPlayerScore,
  managePlayerMenuOff,
} from "../../state/players/playersSlice";
import NameChange from "./menuOptions/nameChange";
import MenuOption from "./menuOption";
import * as NavigationBar from "expo-navigation-bar";
import { useEffect } from "react";
import { THEME, STYLES } from "../../constants";

const ManagePlayerMenu = () => {
  const dispatch = useDispatch();
  const managedPlayer = useSelector((state) => state.players.manageModalPlayer);
  const showModal = useSelector((state) => state.players.managePlayerModalOn);

  useEffect(() => {
    NavigationBar.setBackgroundColorAsync("black");
  }, []);

  return (
    <Modal
      transparent={true}
      visible={showModal}
      animationType="slide"
      statusBarTranslucent={true}
    >
      <View style={styles.backdrop}>
        <View style={[styles.container, STYLES.shadow]}>
          <NameChange />
          <MenuOption
            action={decrementPlayerScore()}
            text="Decrement Player Score"
          ></MenuOption>
          <Button
            title="close"
            onPress={() => dispatch(managePlayerMenuOff())}
          ></Button>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0)",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    padding: 6,
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    gap: 12,
    width: "60%",
    height: "80%",
    backgroundColor: THEME.background4,
    borderRadius: 10,
    padding:25
  },
});

export default ManagePlayerMenu;

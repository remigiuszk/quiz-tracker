import { Button, Modal, StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementPlayerScore,
  deletePlayer,
  managePlayerMenuOff,
  resetPlayers,
} from "../../state/players/playersSlice";
import NameChange from "./menuOptions/nameChange";
import * as NavigationBar from "expo-navigation-bar";
import { useEffect } from "react";
import { THEME, SHADOW_STYLES } from "../../constants";
import DefaultButton from "../shared/buttons/defaultButton";

const ManagePlayerMenu = () => {
  const showModal = useSelector((state) => state.players.managePlayerModalOn);
  const managedPlayer = useSelector((state) => state.players.manageModalPlayer);

  useEffect(() => {
    console.log(showModal);
  }, [showModal]);

  return (
    <Modal
      transparent={true}
      visible={showModal}
      animationType="slide"
      statusBarTranslucent={true}
    >
      <View style={styles.backdrop}>
        <View style={[styles.container, SHADOW_STYLES.default]}>
          <NameChange />
          <DefaultButton
            action={decrementPlayerScore()}
            text="Decrement Player Score"
            width="90%"
          ></DefaultButton>
          <DefaultButton
            action={deletePlayer(managedPlayer?.id)}
            text="Delete player"
            width="90%"
          ></DefaultButton>
          <DefaultButton
            action={managePlayerMenuOff()}
            text="Close"
            width="90%"
            secondaryColor={true}
          ></DefaultButton>
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
    alignItems: "center",
    gap: 12,
    width: "60%",
    height: "80%",
    backgroundColor: THEME.background4,
    borderRadius: 10,
    padding: 25,
  },
});

export default ManagePlayerMenu;

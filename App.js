import { SafeAreaView, StyleSheet } from "react-native";
import { THEME, SHADOW_STYLES } from "./constants";
import useInitializeApp from "./hooks/useInitializeApp";
import OptionsBar from "./components/optionsBar/optionsBar";
import PlayerList from "./components/playerList/playerList";
import { Provider } from "react-redux";
import { store } from "./state/store";
import ManagePlayerMenu from "./components/managePlayerMenu/managePlayerMenu";
import NameChange from "./components/managePlayerMenu/menuOptions/nameChange";

export default function App() {
  const { fontLoaded } = useInitializeApp();

  if (!fontLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <SafeAreaView style={[styles.appContainer, SHADOW_STYLES.default]}>
        <OptionsBar />
        <PlayerList />
        <ManagePlayerMenu />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    width: "100%",
    height: "100%",
    direction: "vertical",
    backgroundColor: THEME.background2,
  },
});

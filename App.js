import { SafeAreaView, StyleSheet, FlatList, View, Button } from "react-native";
import Constants from "expo-constants";
import { THEME, STYLES } from "./constants";
import useInitializeApp from "./hooks/useInitializeApp";
import OptionsBar from "./components/optionsBar/optionsBar";
import PlayerList from "./components/playerList/playerList";
import { Provider } from "react-redux";
import { store } from "./state/store";
import ManagePlayerMenu from "./components/managePlayerMenu/managePlayerMenu";

export default function App() {
  const { fontLoaded } = useInitializeApp();

  if (!fontLoaded) {
    return null; //spinner
  }

  return (
    <Provider store={store}>
      <SafeAreaView style={[styles.appContainer, STYLES.shadow]}>
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
    paddingTop: Constants.statusBarHeight,
    backgroundColor: THEME.background2,
  },
});

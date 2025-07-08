import { StyleSheet, Text, View } from "react-native";
import DefaultButton from "../shared/buttons/defaultButton";
import { TEXT_STYLES } from "../../constants";

const HelpMenu = () => {
  return (
    <Modal>
      <View style={styles.backdrop}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={TEXT_STYLES.lightTextLarge}></Text>
          </View>
          <View style={styles.paragraph}>
            <Text style={TEXT_STYLES.lightTextSmall}></Text>
          </View>
          <View style={styles.paragraph}>
            <Text style={TEXT_STYLES.lightTextSmall}></Text>
          </View>
          <View style={styles.paragraph}>
            <DefaultButton></DefaultButton>
          </View>
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
    width: "80%",
    height: "80%",
    backgroundColor: THEME.background4,
    borderRadius: 10,
    padding: 25,
  },
  header: {
    width: "100%",
    flex: 1,
    textAlign: "center",
  },
  paragraph: {
    width: "100%",
    flex: 1,
    textAlign: "right",
  },
});

export default HelpMenu;

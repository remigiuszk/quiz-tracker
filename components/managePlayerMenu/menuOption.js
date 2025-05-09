import { StyleSheet, Text, View } from "react-native";

const MenuOption = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "flex-start",
    gap: 3,
    padding: 8,
  },
  text: {},
});

export default MenuOption;

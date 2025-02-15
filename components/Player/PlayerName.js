import { useState } from "react";
import { Text, View } from "react-native";

const PlayerName = () => {
    const [name, setName] = useState("Player 1");
  return (
    <View>
      <Text>Player 1</Text>
    </View>
  );
};

export default PlayerName;

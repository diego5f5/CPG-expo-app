import React from "react";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";
import Header from "../../components/header";

export default function CalculosSalvos({ navigation }) {
  return (
    <>
      <View>
        <Header
          goBack={false}
          title={"CÁLCULOS SALVOS"}
          navigation={navigation}
        />
        <Text>Cálculos Salvos</Text>
      </View>
    </>
  );
}

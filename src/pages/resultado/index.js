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

export default function Resultado({ navigation }) {
  return (
    <>
      <View>
        <Header
          goBack={true}
          title={"RESULTADO"}
          info={true}
          navigation={navigation}
        />
        <Text>Resultado</Text>
      </View>
    </>
  );
}

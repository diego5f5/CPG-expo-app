import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

import { ScrollView } from "react-native-gesture-handler";

import styles from "./styles.js";

export default function EfetuarCalculo({ navigation }) {
  // Parede
  const [alturaParede, setAlturaParede] = useState("");
  const [larguraParede, setLarguraParede] = useState("");
  // Placa
  const [alturaPlaca, setAlturaPlaca] = useState("");
  const [larguraPlaca, setLarguraPlaca] = useState("");

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.infoParedeContainer}>
          <Text>Dados da parede:</Text>
          <View style={styles.inputsContainer}>
            <View style={styles.labelsAndInputs}>
              <Text style={styles.labelDefault}>Altura:</Text>
              <TextInput
                style={styles.inputDefault}
                value={alturaParede}
                onChangeText={(text) => setAlturaParede(text)}
                keyboardType="numeric"
                placeholder="Ex:2.70"
              />
            </View>
            <View style={styles.labelsAndInputs}>
              <Text style={styles.labelDefault}>Largura:</Text>
              <TextInput
                style={styles.inputDefault}
                value={larguraParede}
                onChangeText={(text) => setLarguraParede(text)}
                keyboardType="numeric"
                placeholder="Ex:2.70"
              />
            </View>
          </View>
        </View>

        <View style={styles.selectionShapesContainer}>
          <Text style={styles.selectionShapesText}>Formatos de placa:</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity activeOpacity={0.7} style={styles.shapeContainer}>
              <Text>Quadrado</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7} style={styles.shapeContainer}>
              <Text>Retângulo</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7} style={styles.shapeContainer}>
              <Text>Triângulo</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7} style={styles.shapeContainer}>
              <Text>Hexágono</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7} style={styles.shapeContainer}>
              <Text>outro1</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7} style={styles.shapeContainer}>
              <Text>outro2</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        <View style={styles.infoPlacaContainer}>
          <Text>Dados da placa:</Text>
          <View style={styles.inputsContainer}>
            <View style={styles.labelsAndInputs}>
              <Text style={styles.labelDefault}>Altura:</Text>
              <TextInput
                style={styles.inputDefault}
                value={alturaPlaca}
                onChangeText={(text) => setAlturaPlaca(text)}
                keyboardType="numeric"
                placeholder="Ex:0.45"
              />
            </View>
            <View style={styles.labelsAndInputs}>
              <Text style={styles.labelDefault}>Largura:</Text>
              <TextInput
                style={styles.inputDefault}
                value={larguraPlaca}
                onChangeText={(text) => setLarguraPlaca(text)}
                keyboardType="numeric"
                placeholder="Ex:0.45"
              />
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

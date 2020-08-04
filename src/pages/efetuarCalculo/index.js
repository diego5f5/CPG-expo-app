import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";

import styles from "./styles.js";

export default function EfetuarCalculo({ navigation }) {
  // Parede
  const [alturaParede, setAlturaParede] = useState("");
  const [larguraParede, setLarguraParede] = useState("");
  // Placa
  const [alturaPlaca, setAlturaPlaca] = useState("");
  const [larguraPlaca, setLarguraPlaca] = useState("");

  return (
    <>
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
              />
            </View>
            <View style={styles.labelsAndInputs}>
              <Text style={styles.labelDefault}>Largura:</Text>
              <TextInput
                style={styles.inputDefault}
                value={larguraParede}
                onChangeText={(text) => setLarguraParede(text)}
              />
            </View>
          </View>
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
              />
            </View>
            <View style={styles.labelsAndInputs}>
              <Text style={styles.labelDefault}>Largura:</Text>
              <TextInput
                style={styles.inputDefault}
                value={larguraPlaca}
                onChangeText={(text) => setLarguraPlaca(text)}
              />
            </View>
          </View>
        </View>
      </View>
    </>
  );
}

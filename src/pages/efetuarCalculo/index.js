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

  // Seleção de Placas
  const [activedShape, setActivedShape] = useState({
    quadrado: true,
    retangulo: false,
    triangulo: false,
    hexagono: false,
  });

  // Placa
  const [alturaPlaca, setAlturaPlaca] = useState("");
  const [larguraPlaca, setLarguraPlaca] = useState("");
  const [lado, setLado] = useState("");

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.infoParedeContainer}>
          <Text style={styles.infoText}>Dados da parede:</Text>
          <View style={styles.inputsContainer}>
            <View style={styles.labelsAndInputs}>
              <View style={styles.labelContainer}>
                <Image
                  style={{ width: 35, height: 35 }}
                  source={require("../../assets/img/height.png")}
                />
                <Text style={styles.labelDefault}>Altura:</Text>
              </View>
              <TextInput
                style={styles.inputDefault}
                value={alturaParede}
                onChangeText={(text) => setAlturaParede(text)}
                keyboardType="numeric"
                placeholder="Ex:3.20"
              />
            </View>
            <View style={styles.labelsAndInputs}>
              <View style={styles.labelContainer}>
                <Image
                  style={{ width: 35, height: 35, marginRight: 8 }}
                  source={require("../../assets/img/width.png")}
                />
                <Text style={styles.labelDefault}>Largura:</Text>
              </View>
              <TextInput
                style={styles.inputDefault}
                value={larguraParede}
                onChangeText={(text) => setLarguraParede(text)}
                keyboardType="numeric"
                placeholder="Ex:3.20"
              />
            </View>
          </View>
        </View>

        <View style={styles.selectionShapesContainer}>
          <Text style={styles.selectionShapesText}>Formatos de placa:</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {/* Quadrado */}
            <TouchableOpacity
              activeOpacity={0.7}
              style={
                activedShape.quadrado
                  ? styles.shapeContainerSelected
                  : styles.shapeContainer
              }
              onPress={() => {
                setActivedShape({
                  quadrado: true,
                  retangulo: false,
                  triangulo: false,
                  hexagono: false,
                });
              }}
            >
              <Image
                style={{ width: 48, height: 48 }}
                source={require("../../assets/img/quadrado.png")}
              />
            </TouchableOpacity>
            {/* Retângulo */}
            <TouchableOpacity
              activeOpacity={0.7}
              style={
                activedShape.retangulo
                  ? styles.shapeContainerSelected
                  : styles.shapeContainer
              }
              onPress={() => {
                setActivedShape({
                  quadrado: false,
                  retangulo: true,
                  triangulo: false,
                  hexagono: false,
                });
              }}
            >
              <Image
                style={{ width: 48, height: 48 }}
                source={require("../../assets/img/retangulo.png")}
              />
            </TouchableOpacity>
            {/* Triângulo */}
            <TouchableOpacity
              activeOpacity={0.7}
              style={
                activedShape.triangulo
                  ? styles.shapeContainerSelected
                  : styles.shapeContainer
              }
              onPress={() => {
                setActivedShape({
                  quadrado: false,
                  retangulo: false,
                  triangulo: true,
                  hexagono: false,
                });
              }}
            >
              <Image
                style={{ width: 48, height: 48 }}
                source={require("../../assets/img/triangulo.png")}
              />
            </TouchableOpacity>
            {/* Hexágono */}
            <TouchableOpacity
              activeOpacity={0.7}
              style={
                activedShape.hexagono
                  ? styles.shapeContainerSelected
                  : styles.shapeContainer
              }
              onPress={() => {
                setActivedShape({
                  quadrado: false,
                  retangulo: false,
                  triangulo: false,
                  hexagono: true,
                });
              }}
            >
              <Image
                style={{ width: 48, height: 48 }}
                source={require("../../assets/img/hexagono.png")}
              />
            </TouchableOpacity>
            {/* <TouchableOpacity
              activeOpacity={0.7}
              style={styles.shapeContainer}
            ></TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.shapeContainer}
            ></TouchableOpacity> */}
          </ScrollView>
        </View>

        <View style={styles.infoPlacaContainer}>
          <Text style={styles.infoText}>Dados da placa:</Text>

          {/* Quadrado */}
          {activedShape.quadrado ? (
            <View style={styles.inputsContainer}>
              <View style={styles.labelsAndInputs}>
                <View style={styles.labelContainer}>
                  <Image
                    style={{ width: 35, height: 35 }}
                    source={require("../../assets/img/height.png")}
                  />
                  <Text style={styles.labelDefault}>Altura:</Text>
                </View>
                <TextInput
                  style={styles.inputDefault}
                  value={alturaPlaca}
                  onChangeText={(text) => setAlturaPlaca(text)}
                  keyboardType="numeric"
                  placeholder="Ex:0.45"
                />
              </View>
              <Text
                style={{ alignSelf: "flex-end", marginBottom: 3, fontSize: 25 }}
              >
                =
              </Text>
              <View style={styles.labelsAndInputs}>
                <View style={styles.labelContainer}>
                  <Image
                    style={{ width: 35, height: 35, marginRight: 8 }}
                    source={require("../../assets/img/width.png")}
                  />
                  <Text style={styles.labelDefault}>Largura:</Text>
                </View>
                <TextInput
                  style={styles.inputDefault}
                  value={alturaPlaca}
                  onChangeText={(text) => setAlturaPlaca(text)}
                  keyboardType="numeric"
                  placeholder="Ex:0.45"
                />
              </View>
            </View>
          ) : null}

          {/* Retângulo */}
          {activedShape.retangulo ? (
            <View style={styles.inputsContainer}>
              <View style={styles.labelsAndInputs}>
                <View style={styles.labelContainer}>
                  <Image
                    style={{ width: 35, height: 35 }}
                    source={require("../../assets/img/height.png")}
                  />
                  <Text style={styles.labelDefault}>Altura:</Text>
                </View>
                <TextInput
                  style={styles.inputDefault}
                  value={alturaPlaca}
                  onChangeText={(text) => setAlturaPlaca(text)}
                  keyboardType="numeric"
                  placeholder="Ex:0.45"
                />
              </View>
              <View style={styles.labelsAndInputs}>
                <View style={styles.labelContainer}>
                  <Image
                    style={{ width: 35, height: 35, marginRight: 8 }}
                    source={require("../../assets/img/width.png")}
                  />
                  <Text style={styles.labelDefault}>Largura:</Text>
                </View>
                <TextInput
                  style={styles.inputDefault}
                  value={larguraPlaca}
                  onChangeText={(text) => setLarguraPlaca(text)}
                  keyboardType="numeric"
                  placeholder="Ex:0.45"
                />
              </View>
            </View>
          ) : null}

          {/* Triângulo */}
          {activedShape.triangulo ? (
            <View style={styles.inputsContainer}>
              <View style={styles.labelsAndInputs}>
                <View style={styles.labelContainer}>
                  <Image
                    style={{ width: 35, height: 35, marginRight: 8 }}
                    source={require("../../assets/img/width.png")}
                  />
                  <Text style={styles.labelDefault}>Um dos lados:</Text>
                </View>
                <TextInput
                  style={styles.inputDefault}
                  value={lado}
                  onChangeText={(text) => setLado(text)}
                  keyboardType="numeric"
                  placeholder="Ex:0.45"
                />
              </View>
              <Text
                style={{
                  width: "100%",
                  textAlign: "left",
                  alignSelf: "flex-end",
                  marginBottom: 8,
                  fontSize: 20,
                  marginLeft: 5,
                }}
              >
                x3
              </Text>
            </View>
          ) : null}

          {/* Hexágono */}
          {activedShape.hexagono ? (
            <View style={styles.inputsContainer}>
              <View style={styles.labelsAndInputs}>
                <View style={styles.labelContainer}>
                  <Image
                    style={{ width: 35, height: 35, marginRight: 8 }}
                    source={require("../../assets/img/width.png")}
                  />
                  <Text style={styles.labelDefault}>Um dos lados:</Text>
                </View>
                <TextInput
                  style={styles.inputDefault}
                  value={lado}
                  onChangeText={(text) => setLado(text)}
                  keyboardType="numeric"
                  placeholder="Ex:0.45"
                />
              </View>
              <Text
                style={{
                  width: "100%",
                  textAlign: "left",
                  alignSelf: "flex-end",
                  marginBottom: 8,
                  fontSize: 20,
                  marginLeft: 5,
                }}
              >
                x6
              </Text>
            </View>
          ) : null}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

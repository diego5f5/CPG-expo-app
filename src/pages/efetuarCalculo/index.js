import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
  AsyncStorage,
  Alert,
  Platform,
  KeyboardAvoidingView,
} from "react-native";

import Header from "../../components/header";
import CalcFunction from "./calcFunction";

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

  const doVerification = () => {
    if (
      (activedShape.quadrado || activedShape.retangulo) &&
      (alturaParede === "" ||
        larguraParede === "" ||
        alturaPlaca === "" ||
        larguraPlaca === "")
    ) {
      Alert.alert(
        "Erro!",
        "Verifique se todos os campos foram preenchidos.",
        [{ text: "OK" }],
        { cancelable: true }
      );
      return false;
    } else {
      if (
        (activedShape.triangulo || activedShape.hexagono) &&
        (alturaParede === "" || larguraParede === "" || lado === "")
      ) {
        Alert.alert(
          "Erro!",
          "Verifique se todos os campos foram preenchidos.",
          [{ text: "OK" }],
          { cancelable: true }
        );
        return false;
      } else {
        return true;
      }
    }

    // return true;
  };

  const handlePress = () => {
    // Fazer verificação dos inputs, se tudo estiver ok, chamar função de cálculo;
    if (doVerification() === true) {
      const result = CalcFunction(
        activedShape,
        alturaParede,
        larguraParede,
        alturaPlaca,
        larguraPlaca,
        lado
      );

      navigation.navigate("Resultado", result);
    }
  };

  const cleanInputs = () => {
    setAlturaPlaca("");
    setLarguraPlaca("");
    setLado("");
  };

  // COMPONENTES DOS INPUTS PERSONALIZADOS
  // Quadrado
  const InputsQuadrado = () => {
    return (
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
            defaultValue={alturaPlaca}
            onChangeText={(text) => {
              setAlturaPlaca(text);
              setLarguraPlaca(text);
            }}
            keyboardType={
              Platform.OS == "ios" ? "numbers-and-punctuation" : "numeric"
            }
            placeholder="Ex:0.45"
          />
        </View>
        <Text
          style={{
            alignSelf: "flex-end",
            marginBottom: 3,
            fontSize: 25,
          }}
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
            defaultValue={alturaPlaca}
            onChangeText={(text) => {
              setAlturaPlaca(text);
              setLarguraPlaca(text);
            }}
            keyboardType={
              Platform.OS == "ios" ? "numbers-and-punctuation" : "numeric"
            }
            placeholder="Ex:0.45"
          />
        </View>
      </View>
    );
  };

  // Retângulo
  const InputsRetangulo = () => {
    return (
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
            keyboardType={
              Platform.OS == "ios" ? "numbers-and-punctuation" : "numeric"
            }
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
            keyboardType={
              Platform.OS == "ios" ? "numbers-and-punctuation" : "numeric"
            }
            placeholder="Ex:0.45"
          />
        </View>
      </View>
    );
  };

  // Triângulo
  const InputsTriangulo = () => {
    return (
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
            keyboardType={
              Platform.OS == "ios" ? "numbers-and-punctuation" : "numeric"
            }
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
    );
  };

  // Hexágono
  const InputsHexagono = () => {
    return (
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
            keyboardType={
              Platform.OS == "ios" ? "numbers-and-punctuation" : "numeric"
            }
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
    );
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "space-between",
            backgroundColor: "#efefef",
          }}
        >
          <Header
            goBack={false}
            title={"EFETUAR CÁLCULO"}
            info={true}
            navigation={navigation}
          />
          <ScrollView>
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
                      keyboardType={
                        Platform.OS == "ios"
                          ? "numbers-and-punctuation"
                          : "numeric"
                      }
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
                      keyboardType={
                        Platform.OS == "ios"
                          ? "numbers-and-punctuation"
                          : "numeric"
                      }
                      placeholder="Ex:3.20"
                    />
                  </View>
                </View>
              </View>

              <View style={styles.selectionShapesContainer}>
                <Text style={styles.selectionShapesText}>
                  Formatos de placa:
                </Text>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  {/* Quadrado */}
                  <TouchableOpacity
                    activeOpacity={0.7}
                    style={
                      activedShape.quadrado
                        ? styles.shapeContainerSelected
                        : styles.shapeContainer
                    }
                    onPress={() => {
                      cleanInputs();
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
                      cleanInputs();
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
                      cleanInputs();
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
                      cleanInputs();
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
                </ScrollView>
              </View>

              <View style={styles.infoPlacaContainer}>
                <Text style={styles.infoText}>Dados da placa:</Text>

                {activedShape.quadrado ? InputsQuadrado() : null}

                {activedShape.retangulo ? InputsRetangulo() : null}

                {activedShape.triangulo ? InputsTriangulo() : null}

                {activedShape.hexagono ? InputsHexagono() : null}
              </View>

              <TouchableOpacity
                style={styles.calcularBtn}
                activeOpacity={0.8}
                onPress={() => {
                  handlePress();
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    style={{ width: 35, height: 35, marginRight: 8 }}
                    source={require("../../assets/img/calculator.png")}
                  />
                  <Text style={styles.btnText}>CALCULAR</Text>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

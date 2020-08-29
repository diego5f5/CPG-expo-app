import React from "react";
import { View, Text, TouchableOpacity, Share } from "react-native";
import Header from "../../components/header";

import styles from "./styles.js";

export default function Resultado({ navigation, route }) {
  const result = route.params;

  const onShare = async () => {
    try {
      const shared = await Share.share({
        message: `▶ Parede\nAltura: ${result.alturaParede} m\nLargura: ${
          result.larguraParede
        } m\n───────\n▶ Placa\nTipo: ${
          result.activedShape.quadrado
            ? "Quadrado"
            : result.activedShape.retangulo
            ? "Retângulo"
            : result.activedShape.triangulo
            ? "Triângulo"
            : "Hexágono"
        }\n${
          result.activedShape.triangulo
            ? `Lado (x3): ${result.ladoPlaca} m`
            : result.activedShape.hexagono
            ? `Lado (x6): ${result.ladoPlaca} m`
            : `Altura: ${result.alturaPlaca} m\nLargura: ${result.larguraPlaca} m`
        }\n───────\nPlacas necessárias ≅ ${result.placasPorParede}
        `,
      });
      if (shared.action === Share.sharedAction) {
        if (shared.activityType) {
          // shared with activity type of shared.activityType
        } else {
          // shared
        }
      } else if (shared.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const TipoPlaca = () => {
    if (result.activedShape.quadrado) {
      return <Text style={{ fontWeight: "bold" }}>Quadrado</Text>;
    } else {
      if (result.activedShape.retangulo) {
        return <Text style={{ fontWeight: "bold" }}>Retângulo</Text>;
      } else {
        if (result.activedShape.triangulo) {
          return <Text style={{ fontWeight: "bold" }}>Triângulo</Text>;
        } else {
          if (result.activedShape.hexagono) {
            return <Text style={{ fontWeight: "bold" }}>Hexágono</Text>;
          }
        }
      }
    }
  };

  const DadosPlaca = () => {
    if (result.activedShape.triangulo) {
      return (
        <>
          <Text style={styles.resultText}>
            Lado (x3):{" "}
            <Text style={{ fontWeight: "bold" }}>{result.ladoPlaca} m</Text>
          </Text>
        </>
      );
    } else {
      if (result.activedShape.hexagono) {
        return (
          <>
            <Text style={styles.resultText}>
              Lado (x6):{" "}
              <Text style={{ fontWeight: "bold" }}>{result.ladoPlaca} m</Text>
            </Text>
          </>
        );
      } else {
        return (
          <>
            <Text style={styles.resultText}>
              Altura:{" "}
              <Text style={{ fontWeight: "bold" }}>{result.alturaPlaca} m</Text>
            </Text>

            <Text style={styles.resultText}>
              Largura:{" "}
              <Text style={{ fontWeight: "bold" }}>
                {result.larguraPlaca} m
              </Text>
            </Text>
          </>
        );
      }
    }
  };

  return (
    <>
      <View style={styles.container}>
        <Header
          goBack={true}
          title={"RESULTADO"}
          info={true}
          navigation={navigation}
        />
        <View style={{ justifyContent: "space-evenly", flex: 1 }}>
          <View>
            <View
              style={{
                backgroundColor: "#fff",
                borderRadius: 15,
                marginTop: 30,
                marginHorizontal: 20,
                padding: 10,
                borderColor: "#5f67ec",
                borderWidth: 1,
              }}
            >
              <Text
                style={{
                  marginHorizontal: 20,
                  fontSize: 22,
                  fontWeight: "bold",
                }}
              >
                Parede:
              </Text>
              <Text style={styles.resultText}>
                Altura:{" "}
                <Text style={{ fontWeight: "bold" }}>
                  {result.alturaParede} m
                </Text>
              </Text>
              <Text style={styles.resultText}>
                Largura:{" "}
                <Text style={{ fontWeight: "bold" }}>
                  {result.larguraParede} m
                </Text>
              </Text>

              <View style={styles.divisor} />

              <Text
                style={{
                  marginHorizontal: 20,
                  fontSize: 22,
                  fontWeight: "bold",
                }}
              >
                Placa:
              </Text>

              <Text style={styles.resultText}>
                Tipo: <TipoPlaca />
              </Text>

              <DadosPlaca />

              <View style={styles.divisor} />

              <Text
                style={{
                  textAlign: "center",
                  fontSize: 22,
                  fontWeight: "bold",
                  color: "#000",
                }}
              >
                Placas necessárias{" ≅ "}
                <Text style={{ fontWeight: "bold" }}>
                  {result.placasPorParede}
                </Text>
              </Text>
            </View>
          </View>

          <View>
            <View>
              <TouchableOpacity
                style={styles.commonBtn}
                activeOpacity={0.8}
                onPress={() => {
                  onShare();
                }}
              >
                <View>
                  <Text style={styles.btnText}>COMPARTILHAR</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                style={styles.commonBtnReverse}
                activeOpacity={0.8}
                onPress={() => {
                  navigation.replace("EfetuarCalculo");
                }}
              >
                <View>
                  <Text style={styles.btnTextReverse}>NOVO CÁLCULO</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}

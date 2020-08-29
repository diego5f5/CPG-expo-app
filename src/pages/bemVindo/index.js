import React from "react";
import { ScrollView, View, Text, TouchableOpacity, Image } from "react-native";

import Header from "../../components/header";

import styles from "./styles.js";

export default function BemVindo({ navigation }) {
  return (
    <>
      <View style={styles.container}>
        <Header goBack={false} title={"BEM-VINDO"} navigation={navigation} />
        <View style={{ justifyContent: "space-evenly", flex: 1 }}>
          <View>
            <ScrollView
              style={{
                backgroundColor: "#fff",
                borderRadius: 15,
                marginTop: 30,
                marginHorizontal: 20,
                padding: 10,
              }}
            >
              <Text style={styles.bemVindoText}>
                O App CPG (Calculadora para Placas de Gesso), permite calcular de
                forma fácil e prática, a quantidade aproximada de placas/peças
                de gesso que podem ser instaladas em uma determinada parede.
              </Text>
              <Text style={styles.bemVindoText}>
                Os cálculos do App são realizados em metros, portanto, ao
                digitar a altura de uma placa de 40 centímetros por exemplo, ela
                deve ser descrita como "0.40".
              </Text>
              <Text style={styles.bemVindoText}>
                Ao fim de cada cálculo realizado, há a possibilidade de
                compartilhar estas informações, além de poder efetuar novos
                cálculos!
              </Text>
            </ScrollView>
          </View>
          <View>
            <TouchableOpacity
              style={styles.continuarBtn}
              activeOpacity={0.8}
              onPress={() => {
                navigation.replace("EfetuarCalculo");
              }}
            >
              <View>
                <Text style={styles.btnText}>CONTINUAR</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}

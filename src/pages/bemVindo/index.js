import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";

import styles from "./styles.js";

export default function BemVindo({ navigation }) {
  const [showAgain, setShowAgain] = useState(false);

  const handleContinue = () => {
    //setar variavel em local storage para armazenar opcao do usuário.
    navigation.navigate("EfetuarCalculo");
  };

  return (
    <>
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.bemVindoText}>
            O App CPG (Cálculo para Placas de Gesso), permite ao usuário
            calcular, de forma fácil e prática, a quantidade aproximada de
            placas/peças de gesso que podem ser instaladas em uma determinada
            parede, dada a largura e altura da mesma.
          </Text>
          <Text style={styles.bemVindoText}>
            Os cálculos do App são realizados em metros, portanto, ao digitar a
            altura de uma placa de 40 centímetros por exemplo, ela deve ser
            descrita como "0.40".
          </Text>
          <Text style={styles.bemVindoText}>
            Ao fim de cada cálculo, será mostrado em tela as informaçoes
            referentes ao mesmo, onde o usuário pode optar por salvá-lo ou
            realizar um novo.
          </Text>
        </ScrollView>
        <View>
          <TouchableOpacity
            style={styles.showAgainContainer}
            activeOpacity={0.5}
            onPress={() => {
              setShowAgain(!showAgain);
            }}
          >
            <Image
              style={{ width: 25, height: 25, marginRight: 3 }}
              source={
                showAgain
                  ? require("../../assets/img/times-square.png")
                  : require("../../assets/img/check-box.png")
              }
            />
            <Text style={styles.showAgainText}>Não exibir novamente</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.continuarBtn}
            activeOpacity={0.8}
            onPress={() => {
              handleContinue();
            }}
          >
            <View>
              <Text style={styles.btnText}>CONTINUAR</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

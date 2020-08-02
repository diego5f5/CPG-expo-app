import React, { useState } from "react";
import { ScrollView, View, Text, TouchableOpacity, Alert } from "react-native";

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
            O app CPG - Cálculo para Placas de Gesso, permite ao usuário
            calcular, de forma fácil e prática, especificamente, a quantidade
            aproximada de placas de gesso que podem ser instaladas em uma
            determinada parede, dada a largura e altura da mesma. [Como
            utilizar] [Mais detalhes]...
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
            <Text>[CheckBox]</Text>
            <Text style={styles.showAgainText}>Não exibir novamente</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.continuarBtn}
            activeOpacity={0.5}
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

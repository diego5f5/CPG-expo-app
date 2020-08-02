import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import BemVindo from "./src/pages/bemVindo";
import EfetuarCalculo from "./src/pages/efetuarCalculo";
import CalculosSalvos from "./src/pages/calculosSalvos";

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#9bccda",
          },
          headerTintColor: "#000",
        }}
      >
        <Stack.Screen
          name="BemVindo"
          component={BemVindo}
          options={{ title: "Bem-Vindo" }}
        />
        <Stack.Screen
          name="EfetuarCalculo"
          component={EfetuarCalculo}
          options={{ title: "Efetuar Cálculo" }}
        />
        <Stack.Screen
          name="CalculosSalvos"
          component={CalculosSalvos}
          options={{ title: "Cálculos Salvos" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;

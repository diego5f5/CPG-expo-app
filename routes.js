import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import BemVindo from "./src/pages/bemVindo";
import EfetuarCalculo from "./src/pages/efetuarCalculo";
import Resultado from "./src/pages/resultado";

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
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="EfetuarCalculo"
          component={EfetuarCalculo}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Resultado"
          component={Resultado}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;

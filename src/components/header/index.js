import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Alert,
  Image,
  ImagePropTypes,
} from "react-native";

import styles from "./styles.js";

export default function Header({ navigation, goBack, title }) {
  return (
    <>
      <View
        style={{
          paddingTop: Platform.OS == "ios" ? 15 : 0,
          width: "100%",
          height: Platform.OS == "ios" ? 90 : 50,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          backgroundColor: "#5f67ec",
          justifyContent: "space-between",
          elevation: 5,
        }}
      >
        <View
          style={{ justifyContent: "center", alignItems: "center", width: 50 }}
        >
          {goBack ? (
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Image
                style={{ width: 20, height: 20 }}
                source={require("../../assets/img/arrow.png")}
              />
            </TouchableOpacity>
          ) : null}
        </View>
        <View>
          <Text
            style={{
              fontSize: 17,
              fontWeight: "bold",
              color: "#FFF",
              textAlign: "center",
            }}
          >
            {title}
          </Text>
        </View>
        <View style={{ width: 50 }}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => {
              navigation.navigate("BemVindo");
            }}
          >
            <Image
              style={{ width: 20, height: 20 }}
              source={require("../../assets/img/interrogation.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

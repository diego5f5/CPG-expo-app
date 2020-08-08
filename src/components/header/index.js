import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Alert,
  Image,
  ImagePropTypes,
  Platform,
} from "react-native";

import styles from "./styles.js";

export default function Header({ navigation, goBack, title, info }) {
  return (
    <>
      <View
        style={{
          paddingTop: Platform.OS == "ios" ? 15 : 0,
          width: "100%",
          height: Platform.OS == "ios" ? 60 : 50,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          backgroundColor: "#5f67ec",
          justifyContent: "space-between",
          elevation: 5,
        }}
      >
        <View>
          {goBack ? (
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => {
                navigation.goBack();
              }}
              style={{
                width: 50,
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                style={{ width: 20, height: 20 }}
                source={require("../../assets/img/arrow.png")}
              />
            </TouchableOpacity>
          ) : (
            <View
              style={{
                width: 50,
              }}
            ></View>
          )}
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
        <View>
          {info ? (
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => {
                navigation.navigate("BemVindo");
              }}
              style={{
                width: 50,
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                style={{ width: 20, height: 20 }}
                source={require("../../assets/img/interrogation.png")}
              />
            </TouchableOpacity>
          ) : (
            <View
              style={{
                width: 50,
              }}
            ></View>
          )}
        </View>
      </View>
    </>
  );
}

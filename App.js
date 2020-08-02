import React from "react";
import { StatusBar, YellowBox } from "react-native";

import Routes from "./routes";

YellowBox.ignoreWarnings(["Unrecognized WebSocket"]);

export default function App() {
  return (
    <>
      <StatusBar barStyle={"dark-content"} backgroundColor={"#9bccda"} />
      <Routes />
    </>
  );
}

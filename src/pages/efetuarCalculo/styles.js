import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  infoParedeContainer: {
    marginTop: 20,
  },
  infoPlacaContainer: {
    marginTop: 20,
  },
  labelsAndInputs: {
    width: "45%",
  },
  inputsContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputDefault: {
    borderWidth: 1,
    borderRadius: 10,
    height: 40,
    padding: 5,
  },
  labelDefault: {
    // textAlign: "center",
    marginBottom: 5,
  },
});

export default styles;

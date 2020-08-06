import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  infoParedeContainer: {
    marginTop: 20,
  },
  infoText: {
    fontSize: 20,
    fontWeight: "bold",
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
    marginTop: 5,
    borderRadius: 10,
    height: 40,
    padding: 5,
    backgroundColor: "#fff",
    borderColor: "#5f67ec",
    elevation: 2,
  },
  labelContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  labelDefault: {
    // textAlign: "center",
    marginBottom: 5,
  },
  shapeContainer: {
    height: 90,
    width: 90,
    borderRadius: 20,
    marginRight: 20,
    backgroundColor: "#fff",
    elevation: 4,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  shapeContainerSelected: {
    height: 90,
    width: 90,
    borderRadius: 20,
    marginRight: 20,
    backgroundColor: "#5f67ec",
    elevation: 4,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  selectionShapesContainer: {
    marginTop: 20,
  },
  selectionShapesText: {
    marginBottom: 0,
    fontSize: 20,
    fontWeight: "bold",
  },
  calcularBtn: {
    backgroundColor: "#5f67ec",
    marginTop: 50,
    marginHorizontal: 0,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    elevation: 4,
    marginBottom: 20,
  },
  btnText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
  },
});

export default styles;

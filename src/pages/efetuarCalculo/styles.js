import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#DCDCDC",
  },
  infoParedeContainer: {
    marginTop: 20,
  },
  infoText: {
    fontSize: 20,
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
    borderWidth: 0.5,
    borderRadius: 10,
    height: 40,
    padding: 5,
    backgroundColor: "#fff",
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
    marginHorizontal: 10,
    backgroundColor: "#fff",
    elevation: 5,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  shapeContainerSelected: {
    height: 90,
    width: 90,
    borderRadius: 20,
    marginHorizontal: 10,
    backgroundColor: "#9bccda",
    elevation: 5,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  selectionShapesContainer: {
    marginTop: 30,
  },
  selectionShapesText: {
    marginBottom: 0,
    fontSize: 20,
  },
});

export default styles;

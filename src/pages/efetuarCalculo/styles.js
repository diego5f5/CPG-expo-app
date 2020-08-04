import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#DCDCDC',
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
    backgroundColor: '#fff',
  },
  labelDefault: {
    // textAlign: "center",
    marginBottom: 5,
  },
  shapeContainer: {
    height: 80,
    width: 80,
    borderWidth: 1,
    borderRadius: 20,
    marginHorizontal: 10,
    backgroundColor: '#fff',
    elevation: 5,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectionShapesContainer: {
    marginTop: 20,
  },
  selectionShapesText: {
    marginBottom: 0,
  },
});

export default styles;

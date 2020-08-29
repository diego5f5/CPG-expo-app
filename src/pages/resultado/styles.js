import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#efefef",
  },
  resultText: {
    textAlign: "left",
    marginHorizontal: 20,
    fontSize: 18,
    marginVertical: 5,
    color: "#000",
  },
  commonBtn: {
    backgroundColor: "#fff",
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 20,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    elevation: 3,
    borderColor: '#5f67ec',
    borderWidth: 1,
  },
  btnText: {
    color: "#5f67ec",
    fontWeight: "bold",
    fontSize: 18,
  },
  commonBtnReverse: {
    backgroundColor: "#5f67ec",
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 20,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    elevation: 3,
  },
  btnTextReverse: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  divisor: {
      marginVertical: 10,
      marginHorizontal: 20,
      height: 1,
      backgroundColor: '#e1e1e1',
  }
});

export default styles;

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "space-evenly",
    backgroundColor: "#efefef",
  },
  bemVindoText: {
    textAlign: "center",
    marginHorizontal: 20,
    fontSize: 18,
    marginVertical: 5,
    color: "#000",
  },
  showAgainContainer: {
    marginTop: 30,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  showAgainText: {
    marginLeft: 15,
    fontSize: 18,
    color: "#000",
  },
  continuarBtn: {
    backgroundColor: "#5f67ec",
    marginTop: 20,
    marginBottom: 30,
    marginHorizontal: 20,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    elevation: 3,
  },
  btnText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default styles;

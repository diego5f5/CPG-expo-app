import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  bemVindoText: {
    textAlign: "center",
    marginTop: 30,
    marginHorizontal: 30,
    fontSize: 18,
  },
  showAgainContainer: {
    marginTop: 30,
    marginHorizontal: 30,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  showAgainText: {
    marginLeft: 15,
    fontSize: 18,
  },
  continuarBtn: {
    backgroundColor: "#9bccda",
    marginTop: 20,
    marginBottom: 30,
    marginHorizontal: 30,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  btnText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default styles;

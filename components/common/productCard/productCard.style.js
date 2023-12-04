import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    position: "relative",
    width: "100%",
    height: 360,
    backgroundColor: "#fff",
    borderRadius: 5,
    alignItems: "center",
    padding: 10,
    overflow: "hidden",
    marginBottom: 25,
  },
  imgContainer: {
    width: "100%",
    height: 210,
  },
  img: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  midContainer: {
    width: "100%",
    height: 70,
    backgroundColor: "#bfb9c46c",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  price: {
    fontSize: 15,
    fontWeight: "medium",
  },
  btnContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 50,
    marginTop: 25,
  },
  orderBtn: {
    width: "100%",
    height: "100%",
    backgroundColor: "#b9aec2",
    alignItems: "center",
    justifyContent: "center",
  },
  orderBtnText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default styles;

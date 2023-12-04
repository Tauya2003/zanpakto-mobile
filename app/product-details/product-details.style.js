import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
  },
  imgContainer: {
    width: 300,
    height: 300,
    borderRadius: 15,
    overflow: "hidden",
    backgroundColor: "#fff",
  },
  img: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

  detailsContainer: {
    width: "100%",
    padding: 20,
    alignItems: "center",
    gap: 10,
  },
  name: {
    fontSize: 25,
    fontWeight: "bold",
  },

  price: {
    fontSize: 20,
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
    textAlign: "center",
  },

  qauntityContainer: {
    alignItems: "center",
    width: "100%",
    gap: 10,
  },
  quantityBtnContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#fff",
    width: 100,
    height: 30,
    borderRadius: 5,
  },
  quantityBtn: {
    flexGrow: 1,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  quantityBtnTxt: {
    fontSize: 20,
    fontWeight: "bold",
  },
  orderNowContainer: {
    width: "100%",
    padding: 20,
    alignItems: "center",
    gap: 10,
  },
  orderNowBtn: {
    width: "100%",
    height: 50,
    backgroundColor: "#ff523bb0",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  orderNowBtnTxt: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default styles;

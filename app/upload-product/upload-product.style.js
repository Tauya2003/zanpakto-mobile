import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    marginVertical: "10%",
  },
  card: {
    width: "90%",
    backgroundColor: "#ffffff",
    borderRadius: 10,
  },

  titleContainer: {
    width: "100%",
    padding: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    alignSelf: "center",
  },

  formContainer: {
    width: "100%",
    padding: 20,
    gap: 20,
  },
  inputContainer: {
    width: "100%",
    gap: 5,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    paddingHorizontal: 10,
  },
  input: {
    width: "100%",
    height: 40,
    fontSize: 18,
    borderColor: "#0003",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 10,
  },

  imgContainer: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    borderColor: "#0003",
    borderWidth: 1,
    borderStyle: "dashed",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 10,
  },
  chooseImageBtn: {
    width: "40%",
    height: 30,
    backgroundColor: "#000000",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: "auto",
  },
  chooseImageBtnTxt: {
    color: "#ffffff",
    fontSize: 15,
  },

  uploadBtn: {
    width: "100%",
    height: 40,
    backgroundColor: "#000000",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  uploadBtnTxt: {
    color: "#ffffff",
    fontSize: 18,
  },
});

export default styles;

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    marginTop: "15%",
  },
  signUpCard: {
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

  signUpBtn: {
    width: "100%",
    height: 40,
    backgroundColor: "#000000",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  signUpBtnTxt: {
    color: "#ffffff",
    fontSize: 18,
  },
});

export default styles;

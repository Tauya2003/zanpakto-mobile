import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    marginTop: "30%",
  },
  loginCard: {
    width: "90%",
    backgroundColor: "#ffffff",
    borderRadius: 10,
  },
  logoContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginTop: "10%",
    alignSelf: "center",
    borderWidth: 1,
    borderCurve: 100,
    overflow: 'hidden'
  },
  logo: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

  formContainer: {
    width: "100%",
    padding: 20,
  },
  inputContainer: {
    width: "100%",
    marginBottom: 20,
    borderBottomColor: "#000000",
    borderBottomWidth: 1,
    paddingHorizontal: 10,
  },
  input: {
    width: "100%",
    height: 40,
    fontSize: 18,
  },

  buttonContainer: {
    width: "100%",
    alignItems: "center",
  },
  button: {
    width: "100%",
    height: 40,
    backgroundColor: "#000000",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 18,
  },

  loginFooter: {
    width: "100%",
    alignItems: "center",
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
  },
  registerLink: {
    color: "#000000",
    fontSize: 18,
    textAlign: "center",
  },

  registerLinkText: {
    color: "#000000",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});

export default styles;

import { Stack, useRouter } from "expo-router";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./login.style";
import logo from "../../assets/images/z.jpg";
import { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [suppliers, setSuppliers] = useState(null);

  const [supplierId, setSupplierId] = useState([]);

  const { data } = useFetch("GET", "api/suppliers");

  useEffect(() => {
    setSuppliers(data);
  }, [data]);

  const checkUser = () => {
    // loop through the suppliers
    for (let i = 0; i < suppliers.length; i++) {
      // check if the email and password match
      if (
        suppliers[i]?.email === email &&
        suppliers[i]?.password === password
      ) {
        // if they match, get the id of the supplier
        setSupplierId(suppliers[i]._id);
        alert("You have successfully logged in");
        router.push(`/upload-product/${supplierId}`);
        return;
      }
    }
    // return error message if the email and password do not match
    return alert("Invalid email or password");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#b9aec290" }}>
      <Stack.Screen
        options={{
          headerTitle: "",
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.loginCard}>
            <View style={styles.logoContainer}>
              <Image style={styles.logo} source={logo} />
            </View>

            <View style={styles.formContainer}>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  keyboardType="email-address"
                  placeholder="Email"
                  onChangeText={(text) => setEmail(text)}
                />
              </View>

              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  secureTextEntry={true}
                  placeholder="Password"
                  onChangeText={(text) => setPassword(text)}
                />
              </View>

              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={checkUser}>
                  <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.loginFooter}>
                <Text style={styles.registerLink}>Don't have an account? </Text>
                <TouchableOpacity onPress={() => router.push("/signup/signup")}>
                  <Text style={styles.signUpLink}>Sign up</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

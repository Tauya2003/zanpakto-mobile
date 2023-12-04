import { Stack, useRouter } from "expo-router";
import { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./signup.style";
import { postToAPI } from "../../hooks/postToApi";
import useFetch from "../../hooks/useFetch";

const Signup = () => {
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassowrd] = useState("");

  // functiom to check whether all the fields are filled
  const checkFields = () => {
    if (
      fullName === "" ||
      phoneNumber === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      alert("Please fill all the fields");
    } else {
      // function to check whether the password and confirm password are same
      checkPassword();
    }
  };

  // function to check whether the password and confirm password are same
  const checkPassword = () => {
    if (password === confirmPassword) {
      // function to check whether the email is valid
      checkEmail();
    } else {
      alert("Password and Confirm Password are not same");
    }
  };

  // function to check whether the email is valid
  const checkEmail = () => {
    if (email.includes("@") && email.includes(".")) {
      // function to check whether the phone number is valid
      checkPhoneNumber();
    } else {
      alert("Please enter a valid email");
    }
  };

  // function to check whether the phone number is valid
  const checkPhoneNumber = () => {
    if (phoneNumber.length === 10) {
      // function to signup the user
      checkSupplier();
    } else {
      alert("Please enter a valid phone number");
    }
  };

  const { data } = useFetch("GET", "api/suppliers");

  // function to check whether the supplier is already registered
  const checkSupplier = () => {
    if (data?.find((user) => user.email === email)) {
      alert("Email already exists");
      setEmail("");
      return;
    }
    if (data?.find((user) => user.phoneNumber === phoneNumber)) {
      alert("Phone number already exists");
      setPhoneNumber("");
      return;
    }
    signupUser();
  };

  // function to clear the form
  const clearForm = () => {
    setFullName("");
    setPhoneNumber("");
    setEmail("");
    setPassword("");
    setConfirmPassowrd("");
  };

  // function to signup the user
  const signupUser = () => {
    const data = {
      name: fullName,
      phoneNumber: phoneNumber,
      email: email,
      password: password,
    };

    postToAPI("api/suppliers", data)
      .then((res) => {
        alert("Sign up successful");
        clearForm();

        // delay for 1 second and redirect to login page
        setTimeout(() => {
          router.push("/login/login");
        }, 1000);
      })
      .catch((err) => {
        alert("Sign up failed");
      });
  };

  // signup function
  const signup = () => {
    checkFields();
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
          <View style={styles.signUpCard}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Signup</Text>
            </View>

            <View style={styles.formContainer}>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Full Name</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={(value) => setFullName(value)}
                />
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.label}>Phone Number</Text>
                <TextInput
                  style={styles.input}
                  keyboardType="phone-pad"
                  onChangeText={(value) => setPhoneNumber(value)}
                />
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.label}>Email</Text>
                <TextInput
                  style={styles.input}
                  keyboardType="email-address"
                  onChangeText={(value) => setEmail(value)}
                />
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.label}>Password</Text>
                <TextInput
                  style={styles.input}
                  secureTextEntry={true}
                  onChangeText={(value) => setPassword(value)}
                />
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.label}>Confirm Password</Text>
                <TextInput
                  style={styles.input}
                  secureTextEntry={true}
                  onChangeText={(value) => setConfirmPassowrd(value)}
                />
              </View>

              <TouchableOpacity style={styles.signUpBtn} onPress={signup}>
                <Text style={styles.signUpBtnTxt}>Signup</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;

import { Stack, useRouter, useSearchParams } from "expo-router";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./upload-product.style";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import prductPlaceholder from "../../assets/images/product-placeholder.jpg";
import useFetch from "../../hooks/useFetch";
import { postToAPI } from "../../hooks/postToApi";

const UploadProduct = () => {
  const { id } = useSearchParams();
  const router = useRouter();

  const { data } = useFetch("GET", `api/suppliers/${id}`);

  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.uri);
    }
  };

  // fuction to check for empty fields
  const checkFields = () => {
    if (name === "" || price === "" || desc === "") {
      alert("Please fill all the fields");
    } else {
      // function to check whether the price is valid
      checkPrice();
    }
  };

  // function to check whether the price is valid
  const checkPrice = () => {
    if (price > 0) {
      // function to check whether the image is selected
      checkImage();
    } else {
      alert("Please enter a valid price");
    }
  };

  // function to check whether the image is selected
  const checkImage = () => {
    if (image) {
      // function to upload the product
      uploadProduct();
    } else {
      alert("Please select an image");
    }
  };

  // function to clear the form
  const clearForm = () => {
    setName("");
    setPrice("");
    setDesc("");
    setImage(null);
  };

  // function to upload the product
  const uploadProduct = () => {
    const DATA = {
      name: name,
      price: price,
      description: desc,
      image: image,
      supplier: id,
      supplierPhoneNumber: data?.phoneNumber,
    };

    postToAPI("api/products", DATA)
      .then((res) => {
        alert("Product uploaded successfully");
        clearForm();
      })
      .catch((err) => {
        alert("Product upload failed");
      });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#b9aec290" }}>
      <Stack.Screen
        options={{
          headerTitle: "",
          headerRight: () => <Text>{data?.name}</Text>,
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.card}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Upload Product</Text>
            </View>

            <View style={styles.formContainer}>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Product Name</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={(text) => setName(text)}
                />
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.label}>Product Price</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={(text) => setPrice(text)}
                />
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.label}>Product Description</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={(text) => setDesc(text)}
                />
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.label}>Product Image</Text>
                <TouchableOpacity
                  onPress={pickImage}
                  style={styles.chooseImageBtn}
                >
                  <Text style={styles.chooseImageBtnTxt}>Select Image</Text>
                </TouchableOpacity>
                <View style={styles.imgContainer}>
                  {image ? (
                    <Image source={{ uri: image }} style={styles.image} />
                  ) : (
                    <Image source={prductPlaceholder} style={styles.image} />
                  )}
                </View>
              </View>

              <TouchableOpacity style={styles.uploadBtn} onPress={checkFields}>
                <Text style={styles.uploadBtnTxt}>Upload</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UploadProduct;

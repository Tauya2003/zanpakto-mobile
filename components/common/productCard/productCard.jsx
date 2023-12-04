import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./productCard.style";
import placholderImage from "../../../assets/shoes2.jpg";
import { useRouter } from "expo-router";

const ProductCard = ({ product }) => {
  const router = useRouter();

  return (
    <View style={styles.card}>
      <View style={styles.imgContainer}>
        <Image source={{ uri: product?.image }} style={styles.img} />
      </View>

      <View style={styles.midContainer}>
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>${product.price}</Text>
      </View>

      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.orderBtn}
          onPress={() => {
            router.push(`/product-details/${product._id}`);
          }}
        >
          <Text style={styles.orderBtnText}>Order Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductCard;

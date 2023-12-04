import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import { Stack, useRouter, useSearchParams } from "expo-router";
import { useCallback, useState } from "react";
import useFetch from "../../hooks/useFetch";
import ScreenHeaderLogo from "../../components/common/header/ScreenHeaderLogo";
import styles from "./product-details.style";

const ProductDetails = () => {
  const { id } = useSearchParams();
  const router = useRouter();

  const { data, loading, error, refetch } = useFetch(
    "GET",
    `api/products/${id}`
  );

  const [refreshing, setRefreshing] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetch();
    setRefreshing(false);
  }, []);

  const handleOrderClick = () => {
    const message = `Hi, I want to order ${quantity} ${data?.name}s`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `whatsapp://send?phone=+263${data.supplierPhoneNumber}&text=${encodedMessage}`;

    Linking.canOpenURL(whatsappUrl)
      .then((supported) => {
        if (supported) {
          return Linking.openURL(whatsappUrl);
        } else {
          console.log("WhatsApp is not installed on this device");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#b9aec290" }}>
      <Stack.Screen
        options={{
          headerTitle: data?.name ? data.name : "",
        }}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {loading ? (
          <View
            style={{
              marginTop: "50%",
              alignItems: "center",
            }}
          >
            <ActivityIndicator size="large" color="#000" />
          </View>
        ) : error ? (
          <View
            style={{
              marginTop: "50%",
              alignItems: "center",
            }}
          >
            <Text>SomeThing went wrong!</Text>
          </View>
        ) : (
          <View style={styles.container}>
            <View style={styles.imgContainer}>
              <Image
                style={styles.img}
                source={{
                  uri: data?.image,
                }}
              />
            </View>

            <View style={styles.detailsContainer}>
              <Text style={styles.name}>{data?.name}</Text>
              <Text style={styles.description}>{data?.description}</Text>
              <Text style={styles.price}>${data?.price}</Text>
            </View>

            <View style={styles.qauntityContainer}>
              <Text style={styles.quantity}>Quantity</Text>

              <View style={styles.quantityBtnContainer}>
                <TouchableOpacity
                  style={styles.quantityBtn}
                  onPress={() => {
                    quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1);
                  }}
                >
                  <Text style={styles.quantityBtnTxt}>-</Text>
                </TouchableOpacity>

                <Text style={styles.quantityBtnTxt}>{quantity}</Text>

                <TouchableOpacity
                  style={styles.quantityBtn}
                  onPress={() => {
                    setQuantity(quantity + 1);
                  }}
                >
                  <Text style={styles.quantityBtnTxt}>+</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.orderNowContainer}>
                <TouchableOpacity
                  style={styles.orderNowBtn}
                  onPress={handleOrderClick}
                >
                  <Text style={styles.orderNowBtnTxt}>Order Now</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductDetails;

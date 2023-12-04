import { Stack, useSearchParams } from "expo-router";
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import useFetch from "../../hooks/useFetch";
import styles from "./search.style";
import ProductCard from "../../components/common/productCard/productCard";

const ProductSearch = () => {
  const params = useSearchParams();

  const { data, loading, error } = useFetch(
    "Get",
    `api/products/search/${params.id}`
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#b9aec290" }}>
      <Stack.Screen
        options={{
          headerTitle: params.id,
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.cardsContainer}>
          {loading ? (
            <ActivityIndicator size="large" marginTop={100} color={"#000"} />
          ) : error ? (
            <Text
              style={{
                fontSize: 20,
                fontWeight: 600,
                color: "#000",
                marginTop: 100,
                alignSelf: "center",
              }}
            >
              An error occured!
            </Text>
          ) : data?.length === 0 ? (
            <Text
              style={{
                fontSize: 20,
                fontWeight: 600,
                color: "#000",
                marginTop: 100,
                alignSelf: "center",
              }}
            >
              No products found!
            </Text>
          ) : (
            data?.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductSearch;

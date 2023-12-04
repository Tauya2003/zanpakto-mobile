import React, { useCallback, useState } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  RefreshControl,
} from "react-native";
import ProductCard from "../../common/productCard/productCard";
import { useRouter } from "expo-router";
import styles from "./products.style";
import useFetch from "../../../hooks/useFetch";

const Products = () => {
  const router = useRouter();
  const [refreshing, setRefreshing] = useState(false);

  const { data, loading, error, refetch } = useFetch("Get", "api/products");

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetch();
    setRefreshing(false);
  }, []);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      style={styles.cardsContainer}
    >
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
          Something went wrong!
        </Text>
      ) : (
        data?.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))
      )}
    </ScrollView>
  );
};

export default Products;

import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity, TextInput, Image } from "react-native";
import styles from "./home.style";
import searchIcn from "../../assets/images/search.png";
import Products from "./products/Products";

const Home = ({ searchTerm, setSearchTerm, handleClick }) => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View>
        <Text style={{ fontSize: 30, fontWeight: 600 }}>
          Shop with Convenience, Quality and Style!
        </Text>
      </View>

      <View style={styles.wrapperRow}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            router.push("/about/about");
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: 600,
              color: "#fff",
              marginBottom: 3,
            }}
          >
            About
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            router.push("/login/login");
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: 600,
              color: "#fff",
              marginBottom: 3,
            }}
          >
            Login as Supplier
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={(text) => {
              setSearchTerm(text);
            }}
            placeholder="Search for products"
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image
            source={searchIcn}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View>
        <Products />
      </View>
    </View>
  );
};

export default Home;

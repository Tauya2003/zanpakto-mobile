import { TouchableOpacity, Image } from "react-native";
import zanpakto from "../../../assets/images/Zanpakto.png";

const ScreenHeaderLogo = ({ navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Home")}
      style={{ width: 90, height: 55, marginTop: 15}}
    >
      <Image
        source={zanpakto}
        resizeMode="cover"
        style={{ width: "100%", height: "100%" }}
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderLogo;

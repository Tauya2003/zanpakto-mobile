import { Stack } from "expo-router";
import { SafeAreaView, Text, View } from "react-native";
import ScreenHeaderLogo from "../../components/common/header/ScreenHeaderLogo";

const About = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#b9aec290" }}>
      <Stack.Screen
        options={{
          headerTitle: "",
        }}
      />
      <View style={{padding: 10}}>
        <Text>
          Welcome to Zanpakto! At Zanpakto, we are passionate about bringing you
          the latest trends and styles in fashion. Our online store is your
          destination for fashion-forward clothing and accessories that embody
          your unique personality and elevate your style.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default About;

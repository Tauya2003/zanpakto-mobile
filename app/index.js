import { useState } from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { Stack, useRouter } from "expo-router";
import ScreenHeaderLogo from "../components/common/header/ScreenHeaderLogo";
import Home from "../components/Home/Home";

const App = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#b9aec290" }}>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: "#b9aec2a0",
          },
          headerShadowVisible: false,
          headerLeft: () => <ScreenHeaderLogo />,
          headerTitle: "",
        }}
      />
      <ScrollView>
        <Home
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          handleClick={() => {
            if (searchTerm) {
              router.push(`/search/${searchTerm}`);
            }
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

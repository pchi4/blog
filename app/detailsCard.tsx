import {
  Image,
  Dimensions,
  View,
  TouchableOpacity,
  useColorScheme,
} from "react-native";

import { ThemedText } from "@/src/components/ThemedText";
import ParallaxScrollView from "@/src/components/ParallaxScrollView";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function DetailsCardScreen() {
  const { width, height } = Dimensions.get("screen");
  const colorScheme = useColorScheme() ?? "light";

  const route = useRoute();
  const navigation = useNavigation();

  const backgroundColor = { light: "#A1CEDC", dark: "#6200EE" };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      height={320}
      headerImage={
        <Image
          width={width}
          height={height / 2}
          source={{
            uri: route?.params?.cidade?.image,
          }}
        />
      }
    >
      <View style={{ flex: 2, justifyContent: "center" }}>
        <ThemedText type="title" style={{ textAlign: "auto" }}>
          {route?.params?.cidade?.city}
        </ThemedText>

        <ThemedText style={{ paddingTop: 6 }}>
          {route?.params?.cidade?.bio}
        </ThemedText>
      </View>

      <View style={{ flex: 1, justifyContent: "center" }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View
            style={{
              backgroundColor: backgroundColor[colorScheme],
              padding: 14,
              borderRadius: "100%",
            }}
          >
            <ThemedText style={{ textAlign: "center", paddingTop: 6 }}>
              Voltar
            </ThemedText>
          </View>
        </TouchableOpacity>
      </View>
    </ParallaxScrollView>
  );
}

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
    <>
      <ParallaxScrollView
        headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
        height={height / 3}
        headerImage={
          <Image
            width={width}
            height={height / 3}
            source={{
              uri: route?.params?.cidade?.image,
            }}
          />
        }
      />

      <View style={{ flex: 1, paddingHorizontal: 8 }}>
        <View style={{ flex: 2, justifyContent: "flex-start", paddingTop: 12 }}>
          <ThemedText type="title" style={{ textAlign: "auto" }}>
            {route?.params?.cidade?.city}
          </ThemedText>

          <ThemedText style={{ paddingTop: 6 }}>
            {route?.params?.cidade?.bio}
          </ThemedText>
        </View>

        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View
              style={{
                backgroundColor: backgroundColor[colorScheme],
                padding: 14,
                borderRadius: 150,
              }}
            >
              <ThemedText
                style={{
                  textAlign: "center",
                  paddingTop: 6,
                  fontSize: 20,
                  fontWeight: "500",
                }}
              >
                Voltar
              </ThemedText>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

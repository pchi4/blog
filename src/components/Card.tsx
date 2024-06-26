import {
  View,
  useColorScheme,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { ThemedText } from "@/src/components/ThemedText";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("screen");

type Props = {
  city: string;
  country: string;
  bio: string;
  image: string;
};

type Cidade = {
  cidade: Props;
};

export function Card({ cidade }: Cidade) {
  const colorScheme = useColorScheme() ?? "light";
  const navigation = useNavigation();

  const backgroundColor = { light: "#A1CEDC", dark: "#6200EE" };
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("detailsCard", {
          cidade,
        })
      }
    >
      <View
        style={{
          flexDirection: "row",
          backgroundColor: backgroundColor[colorScheme],
          padding: 10,
          borderRadius: 10,
        }}
      >
        <View>
          <Image
            style={{ borderRadius: 10 }}
            width={120}
            height={120}
            source={{
              uri: cidade.image,
            }}
          />
        </View>

        <View
          style={{
            alignContent: "center",
            justifyContent: "center",
            marginLeft: 8,
          }}
        >
          <ThemedText
            type="title"
            style={{ width: width / 2, paddingVertical: 4 }}
            numberOfLines={2}
          >
            {cidade.city}
          </ThemedText>
          <ThemedText type="defaultSemiBold">{cidade.country}</ThemedText>
        </View>
      </View>
    </TouchableOpacity>
  );
}

import {
  Image,
  StyleSheet,
  Platform,
  View,
  useColorScheme,
  Dimensions,
} from "react-native";

import { HelloWave } from "@/src/components/HelloWave";
import ParallaxScrollView from "@/src/components/ParallaxScrollView";
import { Card } from "@/src/components/Card";
import { ThemedText } from "@/src/components/ThemedText";
import Citys from "@/src/models/city.json";

export default function HomeScreen() {
  const { width, height } = Dimensions.get("screen");
  Citys.map((value) => console.log(value));

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          width={width}
          height={height / 4}
          source={{
            uri: "https://content.skyscnr.com/m/76279f1a4cff9c68/original/GettyImages-466262517.jpg?crop=1224px:647px&position=attention",
          }}
        />
      }
    >
      <ThemedText type="title" style={{ textAlign: "auto" }}>
        Lugares Populares no Mundo!
      </ThemedText>

      {Citys.map((city, idx) => (
        <Card cidade={city} key={idx} />
      ))}
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});

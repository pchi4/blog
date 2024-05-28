import { Image, StyleSheet, Dimensions } from "react-native";

import ParallaxScrollView from "@/src/components/ParallaxScrollView";
import { Card } from "@/src/components/Card";
import { ThemedText } from "@/src/components/ThemedText";
import Citys from "@/src/models/city.json";

export default function HomeScreen() {
  const { width, height } = Dimensions.get("screen");

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      height={200}
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

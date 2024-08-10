import { useWindowDimensions } from "react-native";
import { AnimatedTextProps } from "./types";
import { useDerivedValue } from "react-native-reanimated";
import { Canvas, Text } from "@shopify/react-native-skia";

export default function (props: AnimatedTextProps) {
  const { width } = useWindowDimensions();
  const MARGIN_VERTICAL = 80;
  const animatedText = useDerivedValue(() => {
    return `$${Math.round(props.selectedValue.value)}`;
  });
  const fontSize = props.font.measureText("0");

  const textX = useDerivedValue(() => {
    const _fontSize = props.font.measureText(animatedText.value);
    return width / 2 - _fontSize.width / 2;
  }, []);

  return (
    <Canvas
      style={{ height: fontSize.height + MARGIN_VERTICAL, width: "100%" }}
    >
      <Text
        text={animatedText}
        font={props.font}
        color={"#000000"}
        x={textX}
        y={fontSize.height + MARGIN_VERTICAL / 2}
      />
    </Canvas>
  );
}

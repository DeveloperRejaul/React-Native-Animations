import { Text, useFont } from "@shopify/react-native-skia";
import { XAxisProps } from "./types";
import roboto from "@/src/assets/fonts/Roboto-Regular.ttf";

export default function (props: XAxisProps) {
  const font = useFont(roboto, 18);
  if (!font) return null;

  const fontSize = font.measureText(props.text);
  return (
    <Text
      font={font}
      x={props.x - fontSize.width / 2}
      y={props.y}
      text={props.text}
      color={"#000000"}
    />
  );
}

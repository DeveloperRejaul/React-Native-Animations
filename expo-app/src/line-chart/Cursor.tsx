import { useDerivedValue } from "react-native-reanimated";
import { CursorProps } from "./types";
import { Circle, Group, Path, Skia } from "@shopify/react-native-skia";

export default function (props: CursorProps) {
  const path = useDerivedValue(() => {
    const dotLine = Skia.Path.Make().lineTo(
      0,
      props.chartHeight - props.cy.value - props.chartMargin
    );
    dotLine.dash(10, 10, 0);

    const matrix = Skia.Matrix().translate(props.cx.value, props.cy.value);
    dotLine.transform(matrix);
    return dotLine;
  });

  return (
    <Group>
      <Path
        path={path}
        color="#eaf984"
        style="stroke"
        strokeJoin="round"
        strokeWidth={2}
      />
      <Circle
        r={10}
        cx={props.cx}
        cy={props.cy}
        strokeWidth={10}
        color={"#eaf984"}
        style={"stroke"}
      />
      <Circle
        r={10}
        cx={props.cx}
        cy={props.cy}
        color={"#0d0d0d"}
        style={"fill"}
      />
    </Group>
  );
}

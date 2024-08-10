import { useEffect, useState } from "react";
import { DataType, LineChartProps } from "./types";
import {
  clamp,
  runOnJS,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { curveBasis, line, scaleLinear, scalePoint } from "d3";
import { Canvas, Path, Skia } from "@shopify/react-native-skia";
import { getYForX, parse } from "react-native-redash";
import {
  Gesture,
  GestureDetector,
  PanGestureHandlerEventPayload,
} from "react-native-gesture-handler";
import Gradient from "./Gradient";
import XAxisText from "./XAxisText";
import Cursor from "./Cursor";

export default function LineChartScreen(props: LineChartProps) {
  const [showCursor, setShowCursor] = useState(false);
  const animatedLine = useSharedValue(0);
  const animationGradient = useSharedValue({ x: 0, y: 0 });
  const cx = useSharedValue(20);
  const cy = useSharedValue(0);

  useEffect(() => {
    animatedLine.value = withTiming(1, { duration: 1000 });
    animationGradient.value = withTiming(
      { x: 0, y: props.chartHeight },
      { duration: 1000 }
    );
  }, []);

  // creating chart , handle x coordinates
  const xDomain = props.data.map((d) => d.label);
  const xRange = [props.chartMargin, props.chartWidth - props.chartMargin];
  const x = scalePoint().domain(xDomain).range(xRange).padding(0);
  const stepX = x.step();

  // handle y coordinates
  const values = props.data.map((d) => d.value);
  const max = Math.max(...values);
  const min = Math.min(...values);
  const yDomain = [max, min];
  const yRange = [props.chartHeight, 0];
  const y = scaleLinear().domain(yDomain).range(yRange);
  const totalValue = props.data.reduce((acc, cur) => acc + cur.value, 0);

  // create carved line
  const curvedLine = line<DataType>()
    .x((d) => x(d.label)!)
    .y((d) => y(d.value))
    .curve(curveBasis)(props.data);
  const linePath = Skia.Path.MakeFromSVGString(curvedLine!);

  const path = parse(linePath!.toSVGString());

  const handleGestureEvent = (e: PanGestureHandlerEventPayload) => {
    "worklet";

    const index = Math.floor(e.absoluteX / stepX);
    runOnJS(props.setSelectedDate)(props.data[index].date);
    props.selectedValue.value = withTiming(props.data[index].value);
    const clampValue = clamp(
      Math.floor(e.absoluteX / stepX) * stepX + props.chartMargin,
      props.chartMargin,
      props.chartWidth - props.chartMargin
    );

    cx.value = clampValue;
    cy.value = getYForX(path, Math.floor(clampValue))!;
  };

  const pan = Gesture.Pan()
    .onTouchesDown(() => {
      runOnJS(setShowCursor)(true);
    })
    .onTouchesUp(() => {
      runOnJS(setShowCursor)(false);
      props.selectedValue.value = withTiming(totalValue);
      runOnJS(props.setSelectedDate)("Total");
    })
    .onBegin(handleGestureEvent)
    .onChange(handleGestureEvent);

  return (
    <GestureDetector gesture={pan}>
      <Canvas style={{ height: props.chartHeight, width: props.chartWidth }}>
        <Path
          path={linePath!}
          style={"stroke"}
          strokeWidth={4}
          color={"#eaf984"}
          strokeCap={"round"}
          start={0}
          end={animatedLine}
        />
        <Gradient
          chartHeight={props.chartHeight}
          chartWidth={props.chartWidth}
          chartMargin={props.chartMargin}
          animationGradient={animationGradient}
          curvedLine={curvedLine!}
        />
        {props.data.map((dataPoint: DataType, index) => (
          <XAxisText
            x={x(dataPoint.label)!}
            y={props.chartHeight}
            text={dataPoint.label}
            key={index}
          />
        ))}
        {showCursor && (
          <Cursor
            cx={cx}
            cy={cy}
            chartHeight={props.chartHeight}
            chartMargin={props.chartMargin}
          />
        )}
      </Canvas>
    </GestureDetector>
  );
}

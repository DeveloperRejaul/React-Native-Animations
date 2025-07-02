/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useMemo } from "react";
import { Canvas, Group, Text, useFont } from "@shopify/react-native-skia";
import { useSharedValue, withTiming } from "react-native-reanimated";
import { PieSlice } from "./pie-slice";
import { PieChartProps } from "./types";


/**
 * App Component
 * 
 * This is the root component for the React Native application.
 * It renders a Pie Chart using the `PieChartIndex` component
 * with sample data.
 * 
 * ⚙️ **Setup Note:**  
 * Make sure you have installed and configured:
 * - `@shopify/react-native-skia`
 * - `react-native-reanimated`
 * 
 * These libraries are required for the Pie Chart animations and drawing.
 * 
 * @component
 * 
 * @example
 * // Example usage:
 * import { View } from 'react-native';
 * import PieChartIndex from './src/pie-chart/Index';
 * 
 * export default function App() {
 *   const data = [
 *     {
 *       value: 100,
 *       color: "#d61212",
 *       label: "label-01",
 *     },
 *     {
 *       value: 200,
 *       color: "#d69112",
 *       label: "label-02",
 *     },
 *     {
 *       value: 200,
 *       color: "#1246d6",
 *       label: "label-03",
 *     },
 *   ];
 * 
 *   return (
 *     <View style={{ flex: 1, alignItems: "center" }}>
 *       <PieChartIndex
 *         data={data}
 *         textTitle="Hello World"
 *         textValue="$11431"
 *         SIZE={200}
 *         BASE_STROKE_WIDTH={25}
 *       />
 *     </View>
 *   );
 * }
 * 
 * @returns {JSX.Element} The rendered React Native view.
 */
export default function PieChartIndex(props: PieChartProps) {
  const {
    data,
    textTitle = "hello world",
    textValue = "257625",
    GAP = 0,
    SIZE = 300,
    BASE_STROKE_WIDTH = 40
  } = props
  const ADJUSTED_SIZE = SIZE + BASE_STROKE_WIDTH * 2
  const CENTER = ADJUSTED_SIZE / 2
  const RADIUS = SIZE / 2;

  const pieAnimation = useSharedValue(0);
  const selectedSlice = useSharedValue<number | null>(null);
  const fontSize = 17;
  const font1 = useFont(require("./Roboto_Condensed-Regular.ttf"), fontSize);
  const font2 = useFont(require("./Roboto-Bold.ttf"), fontSize);

  useEffect(() => {
    pieAnimation.value = 0;
    pieAnimation.value = withTiming(1, { duration: 800 });
  }, [data]);

  const totalValue = useMemo(() => data.reduce((sum, item) => sum + item.value, 0),[data]);
  const pieChartSlices = useMemo(() => {
    let currentAngle = -90

    return data.map((item, index) => {
      const proportion = item.value / totalValue;
      const fullSweepAngle = proportion * 360;

      const segmentStart = currentAngle;
      currentAngle += fullSweepAngle;

      return {
        startAngle: segmentStart,
        fullSweepAngle,
        item: item,
        index: index,
        radius: RADIUS,
        center: CENTER,
        gap: GAP,
        strokeWidth: BASE_STROKE_WIDTH,
      };
    });
  }, [data]);


  return (
        <Canvas style={{width: ADJUSTED_SIZE,height: ADJUSTED_SIZE}}>
          <Group>
            <Text
                x={(CENTER - 3.2) - textTitle.length * 3.2}
                y={CENTER - 10}
                text={textTitle}
                font={font1}  
            />
            <Text
                x={(CENTER - 4) - textValue.length * 4}
                y={CENTER + 10}
                text={textValue}
                font={font2}  
            />
            {pieChartSlices.map((slice, index) =><PieSlice key={index}{...{...slice,index,animatedValue: pieAnimation,selectedSlice}}/>)}
          </Group>
        </Canvas>
  );
}
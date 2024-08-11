import { Text, useWindowDimensions } from "react-native";
import React, { useState } from "react";
import { data } from "./data";
import { useSharedValue } from "react-native-reanimated";
import { useFont } from "@shopify/react-native-skia";
import roboto from "@/src/assets/fonts/Roboto-Regular.ttf";
import AnimatedText from "./AnimatedText";
import LineChartScreen from "./LineChartScreen";

export default function LineChart() {
  const CHART_HEIGHT = 400;
  const CHART_MARGIN = 20;
  const { width: CHART_WIDTH } = useWindowDimensions();
  const [selectedDate, setSelectedDate] = useState("total");
  const selectedValue = useSharedValue(0);
  const font = useFont(roboto, 88);
  if (!font) return null;
  return (
    <>
      <Text
        style={{
          color: "#ffffff",
          fontSize: 28,
          textAlign: "center",
        }}
      >
        {selectedDate} Expenses
      </Text>
      <AnimatedText selectedValue={selectedValue} font={font} />
      <LineChartScreen
        data={data}
        chartHeight={CHART_HEIGHT}
        chartWidth={CHART_WIDTH}
        chartMargin={CHART_MARGIN}
        selectedDate={selectedDate}
        selectedValue={selectedValue}
        setSelectedDate={setSelectedDate}
      />
    </>
  );
}

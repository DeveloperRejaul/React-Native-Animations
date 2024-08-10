import { SkFont } from "@shopify/react-native-skia";
import { SharedValue } from "react-native-reanimated";

export type DataType = {
  label: string;
  date: string;
  value: number;
};

export interface LineChartProps { 
    data:DataType[]
    chartHeight:number
    chartWidth:number
    chartMargin:number
    selectedDate:string
  selectedValue: SharedValue<number>
  setSelectedDate:React.Dispatch<React.SetStateAction<string>>
}
export interface GradientProps { 
  chartHeight:number
  chartWidth:number
  chartMargin:number
  animationGradient:SharedValue<{
    x: number;
    y: number;
  }>
  curvedLine:string
}

export interface CursorProps { 
  cx: SharedValue<number> 
  cy :SharedValue<number>
  chartHeight: number
  chartMargin: number
}

export interface XAxisProps { 
  x: number;
  y:number
  text:string
  key:number
}

export interface AnimatedTextProps { 
  selectedValue: SharedValue<number>;
  font: SkFont;
}
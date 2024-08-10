import { LinearGradient, Path, Skia } from "@shopify/react-native-skia";
import { GradientProps } from "./types";

export default function (props: GradientProps) {
  const { chartMargin, chartHeight, chartWidth, curvedLine } = props;
  const getGradientAria = (
    chartLine: string,
    width: number,
    height: number,
    chartMargin: number
  ) => {
    const gradientAriaSplit = Skia.Path.MakeFromSVGString(chartLine);
    gradientAriaSplit!
      .lineTo(width - chartMargin, height)
      .lineTo(chartMargin, height)
      .lineTo(chartMargin, gradientAriaSplit!.getPoint(0).y);
    return gradientAriaSplit;
  };
  return (
    <Path
      path={getGradientAria(curvedLine, chartWidth, chartHeight, chartMargin)!}
    >
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={props.animationGradient}
        colors={["rgba(234, 249, 132, 0.2)", "rgba(234, 249, 132, 0)"]}
      />
    </Path>
  );
}

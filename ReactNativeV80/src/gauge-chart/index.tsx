import React from 'react';
import { Dimensions } from 'react-native';
import {
  Canvas,
  Circle,
  Path,
  Text,
  useFont,
} from '@shopify/react-native-skia';
import { arcPath, needle } from './utils';
const { width } = Dimensions.get('window');
interface SemiCircleChartProps {
    maxValue?:number
    currentValue?:number;
}

export default function SemiCircleChart(props: SemiCircleChartProps) {
  const {
    currentValue = 2000,
    maxValue = 4000,
  } = props;

  const FONT_SIZE = 20;
  const SIZE =  width * 0.8;
  const STROKE_WIDTH = 40;
  const SIZE_REDUCE = 35;
  const RADIUS = (SIZE / 2 - STROKE_WIDTH) - SIZE_REDUCE;
  const COLORS = ['#FF004D', '#FFC300', '#12eda0ff'];
  const RADIAN = Math.PI / 180;
  const cx = RADIUS + STROKE_WIDTH + SIZE_REDUCE;
  const cy = RADIUS + STROKE_WIDTH + SIZE_REDUCE;
  const oR = RADIUS + STROKE_WIDTH - 14;
  const startAngle = -Math.PI;
  const sweepPerSection = Math.PI / COLORS.length;
  const centerX = SIZE / 2;
  const centerY = SIZE / 2;
  const startLabelX = cx + oR - 48;
  const endLabelX = cx - oR + 2;
  const labelY = centerY + FONT_SIZE 




  const font = useFont(require('../../Roboto_Condensed-Regular.ttf'), FONT_SIZE);
  const amountFont = useFont(require('../../Roboto_Condensed-Regular.ttf'), 25);
  const titleFont = useFont(require('../../Roboto_Condensed-Regular.ttf'), 12);
  const {r, x, x0,xba,xbb,xp,y,y0,yba,ybb,yp} = needle(cx, cy, oR,maxValue, currentValue, RADIAN, SIZE_REDUCE, RADIUS );

  return (
    <Canvas style={{ width: SIZE, height: SIZE / 1.6}}>
      {COLORS.map((color, i) => {
        const start = startAngle + i * sweepPerSection;
        return (
          <Path
            key={i}
            path={arcPath(start, sweepPerSection, RADIUS, centerX, centerY)}
            style="stroke"
            strokeWidth={STROKE_WIDTH}
            color={color}
          />
        );
      })}
      <Circle
        key="needle-circle"
        cx={x0}
        cy={y0}
        r={r}
        color={'#000'}
      />
      <Path
        key="needle-path"
        path={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`}
        color={'#000'}
      />
      <Text
        x={x}
        y={y}
        text="$16K"
        font={font}
      />
      <Text
        x={endLabelX}
        y={labelY}
        text="$16K"
        font={font}
      />
      <Text
        x={startLabelX}
        y={labelY}
        text="$16K"
        font={font}
      />
      <Circle
        key="inner-circle"
        cx={x0}
        cy={y0}
        r={RADIUS - (STROKE_WIDTH / 2)}
        color={'#ffffff'}
      />
      <Text
        x={centerX / 1.3}
        y={centerY - 30}
        text="STILL NEEDED"
        font={titleFont}
      />
      <Text
        x={centerX - 25}
        y={centerY + 5}
        text="$16K"
        font={amountFont}
      />
    </Canvas>
  );
}
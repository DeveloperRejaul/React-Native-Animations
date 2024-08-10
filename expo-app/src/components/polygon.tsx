import Svg, { Polygon, Rect } from "react-native-svg";

export default function PolygonSvg() {
  return (
      <Svg height={400} width={200} viewBox="-100 -200 200 400">
          <Polygon fill={'#ff9900'} points={'0,0 80,120 -80,120'}/>
          <Polygon fill={'#00ff37'} points={'0,-60 60,60 -60,60'}/>
          <Polygon fill={'#6200ff'} points={'0,-100 50,0 -50,0'} />
          <Rect height={50} width={30} fill={'#0077ff'} x={-15} y={120}/>
    </Svg>
  )
}

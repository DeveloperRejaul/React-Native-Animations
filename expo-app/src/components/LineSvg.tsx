import Svg, { Circle, Line, Rect } from "react-native-svg";

export default function LineSvg() {
  return <Svg width="200" height="200" viewBox="-100 -100 200 200">
      <Circle cx="0" cy="-50" r="30"  fill={'#ffae00'}/> 
      <Circle cx="0" cy="-10" r="5" y={-50}x={-10} fill={'#ffffff'}/> 
      <Circle cx="0" cy="-10" r="5" y={-50}x={10} fill={'#ffffff'}/> 
      <Rect height={5} width={20} rx={2} stroke={'#fff'} strokeWidth={2} fill={'none'} y={-42} x={-10}/>
      <Line x1={50} x2={-50} y1={0} y2={0} stroke={'#ffae00'} strokeWidth={40} strokeLinecap="round"/>
      <Line x1={40} x2={0} y1={70} y2={-0} stroke={'#ffae00'} strokeWidth={40} strokeLinecap="round"/>
      <Line x1={-40} x2={0} y1={70} y2={0} stroke={'#ffae00'} strokeWidth={40} strokeLinecap="round" />
      <Circle cx="0" cy="-10" r="5" y={10} fill={'#000000'}/> 
      <Circle cx="0" cy="-10" r="5" y={30} fill={'#000000'}/> 
</Svg>
}

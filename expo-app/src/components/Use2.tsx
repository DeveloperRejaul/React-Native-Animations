import Svg, { Circle, Defs, G, Line, Polygon, Rect, Use } from "react-native-svg";

export default () => 
<Svg  width="200" height="200" viewBox="-100 -100 200 200">
  <Defs>
    <G id="tree">
      <Polygon points="-10,0 10,0 0 -50" fill="#38755b" />
      <Line x1="0" y1="0" x2="0" y2="10" stroke="#778074" stroke-width="2" />
    </G>
  </Defs>

  <Rect x="-100" y="-100" width="200" height="200" fill="#F1DBC3" />
  <Circle cx="0" cy="380" r="350" fill="#F8F4E8" />

  <Use href="#tree" x="-30" y="25" transform="scale(2)" />
  <Use href="#tree" x="-20" y="40" transform="scale(1.2)" />
  <Use href="#tree" x="40" y="40" />
  <Use href="#tree" x="50" y="30" transform="scale(1.5)" />
</Svg >
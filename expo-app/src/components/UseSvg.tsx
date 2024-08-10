import Svg, { Path, Use } from "react-native-svg";

export default () => 
<Svg width="200" height="200" viewBox="-100 -100 200 200">
  <Path
    id="branch"
    d="
      M 0 0 L 0 -90
      M 0 -20 L 20 -34
      M 0 -20 L -20 -34
      M 0 -40 L 20 -54
      M 0 -40 L -20 -54
      M 0 -60 L 20 -74
      M 0 -60 L -20 -74"
    stroke="#E5C39C"
    stroke-width="5"
  />

  <Use href="#branch" transform="rotate(60)" />
  <Use href="#branch" transform="rotate(120)" />
  <Use href="#branch" transform="rotate(180)" />
  <Use href="#branch" transform="rotate(240)" />
  <Use href="#branch" transform="rotate(300)" />
</Svg>
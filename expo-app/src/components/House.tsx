import Svg, { Circle, Line, Polygon, Rect } from "react-native-svg";

export default function House() {
    return <Svg width="200" height="200" viewBox="-100 -100 200 200" >
      <Polygon fill={'none'} stroke={'#ff7b00'} strokeWidth={10} strokeLinecap="round" points={'-75,-8 0,-78 75,-8'}/>
        <Polygon points="-65,80 -65,-10 0,-70 65,-10 65,80" fill={'#fff'} stroke={'black'} strokeWidth={2} />
        <Rect  x="-45" y="10" width="30" height="60" rx="2" fill={'red'}/>
        <Circle  cx="-35" cy="40" r="2" fill={'#e5ff00'}/>
        <Rect  x="-47" y="70" width="34" height="5" fill={'#00ffaa'}/>
        <Rect  x="-49" y="75" width="38" height="5" fill={'#00ffaa'}/>
        <Rect  x="5" y="15" width="40" height="35" rx="5" fill={'#00ffaa'}/>
        <Line x1="5" y1="32.5" x2="45" y2="32.5" fill={'#00ffaa'}/>
        <Line x1="25" y1="15" x2="25" y2="50" fill={'#00ffaa'}/>
        <Rect  x="2" y="48" width="46" height="5" rx="5" fill={'#fbff00c9'}/>
        <Circle  cx="0" cy="-25" r="15" fill={'#aa6811'}/>
        <Line x1="-15" y1="-25" x2="15" y2="-25" stroke={'#000000'} strokeWidth={2}/>
        <Line x1="0" y1="-40" x2="0" y2="-10" stroke={'#000000'} strokeWidth={2}/>
  </Svg>
}
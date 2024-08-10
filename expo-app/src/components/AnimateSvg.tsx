import Svg, { Circle, G, Path, Use } from "react-native-svg";
import Animated from "react-native-reanimated";

const AnimatedG = Animated.createAnimatedComponent(G);

export default function App() {
  return (
    <>
      <Svg
        width={200}
        height={400}
        viewBox="-100 -200 200 400"
        fill="rgba(0, 0, 0, 0.5)"
      >
        <G transform="translate(0, -50)">
          <AnimatedG>
            <Circle r={8} />
            <Path id="a" d="M-7-20c0 10 14 10 14 0L2-80h-4" />
            <Use href="#a" transform="rotate(120)" />
            <Use href="#a" transform="rotate(-120)" />
          </AnimatedG>
        </G>
        <Path d="M-7 100H7L3-35h-6" />
      </Svg>
    </>
  );
}

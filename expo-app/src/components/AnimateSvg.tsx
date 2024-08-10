import { useEffect, useState } from "react";
import Svg, { Circle, G, Path, Use } from "react-native-svg";

export default function App() {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    let interval;
    if (interval) clearInterval(interval);
    interval = setInterval(() => {
      setRotate((pre) => pre + 10);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Svg
        width="200"
        height="400"
        viewBox="-100 -200 200 400"
        fill="rgba(0, 0, 0, 0.5)"
      >
        <G transform="translate(0, -50)">
          <G transform={`rotate(${rotate})`}>
            <Circle r="8" />
            <Path id="arm" d="M -7 -20 C -7 -10 7 -10 7 -20 L 2 -80 L -2 -80" />
            <Use href="#arm" transform="rotate(120)" />
            <Use href="#arm" transform="rotate(-120)" />
          </G>
        </G>

        <Path d="M -7 100 L 7 100 L 3 -35 L -3 -35" />
      </Svg>
    </>
  );
}

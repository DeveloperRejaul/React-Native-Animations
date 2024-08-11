import { useEffect } from "react";
import { Dimensions, View, StyleSheet } from "react-native";
import Animated, {
  Easing,
  useAnimatedProps,
  useDerivedValue,
  useSharedValue,
  withTiming,
  cancelAnimation,
} from "react-native-reanimated";
import { Circle, Svg } from "react-native-svg";
import { ReText } from "react-native-redash";
import { COLORS } from "./colors";
import { rf, rh } from "./size";

const CIRCLE_LENGTH = rh(100);
const r = CIRCLE_LENGTH / (2 * Math.PI);
const { height, width } = Dimensions.get("window");

const SVG_HEIGHT = height / 2.8;
const SVG_WIDTH = width / 1.3;
const TIME_MINUTES = 0.2;
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

let interval: NodeJS.Timeout;
export default function Progress() {
  const progress = useSharedValue(0);
  const totalSeconds = useSharedValue(0);

  useEffect(() => {
    handleTime(TIME_MINUTES);
    cancelAnimation(progress);
    progress.value = withTiming(1, {
      duration: TIME_MINUTES * 60 * 1000,
      easing: Easing.linear,
    });
  });

  const handleTime = (minutes: number) => {
    cancelAnimation(totalSeconds);
    clearInterval(interval);
    totalSeconds.value = Number(minutes * 60);
    interval = setInterval(() => {
      if (totalSeconds.value <= 0) {
        clearInterval(interval);
      } else {
        totalSeconds.value -= 1;
      }
    }, 1000);
  };

  const animatedProps = useAnimatedProps(() => ({
    strokeDashoffset: CIRCLE_LENGTH * progress.value,
  }));

  const progressText = useDerivedValue(() => {
    const hours = Math.floor(totalSeconds.value / 3600);
    const remainingSeconds = totalSeconds.value % 3600;
    const minutes = Math.floor(remainingSeconds / 60);
    const seconds = remainingSeconds % 60;
    return `${(hours || 0).toString().padStart(2, "0")}:${
      (minutes || 0).toString().padStart(2, "0") || "00"
    }:${(seconds || 0).toString().padStart(2, "0") || "00"}`;
  });

  return (
    <View style={styles.container}>
      <ReText style={[styles.text]} text={progressText} />
      <Svg
        style={{
          position: "absolute",
          zIndex: 0,
          height: SVG_HEIGHT,
          width: SVG_WIDTH,
        }}
      >
        <Circle
          r={r}
          cy={SVG_HEIGHT / 2}
          cx={SVG_WIDTH / 2}
          strokeWidth={10}
          stroke={COLORS.blueLight}
          fill={COLORS.yalowLight}
        />
        <AnimatedCircle
          fill="#00000000"
          r={r}
          cy={SVG_HEIGHT / 2}
          cx={SVG_WIDTH / 2}
          strokeWidth={15}
          stroke={COLORS.blue_600}
          strokeDasharray={CIRCLE_LENGTH}
          animatedProps={animatedProps}
          strokeLinecap="round"
        />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#000",
    fontSize: rf(2.5),
    textAlign: "center",
    zIndex: 1,
  },
  progress: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
});

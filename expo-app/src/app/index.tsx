import { View, StyleSheet } from "react-native";
import React from "react";
import AnimateSvg from "../components/AnimateSvg";
import LineChart from "../line-chart";
import Progress from "../progress";

export default function index() {
  return (
    <View style={styles.container}>
      <Progress />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
});

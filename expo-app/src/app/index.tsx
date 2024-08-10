import { View, StyleSheet } from "react-native";
import React from "react";
import AnimateSvg from "../components/AnimateSvg";

export default function index() {
  return (
    <View style={styles.container}>
      <AnimateSvg />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});

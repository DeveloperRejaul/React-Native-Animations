import { View, StyleSheet, Dimensions } from "react-native";
import React, { useState } from "react";
import LineSvg from "../components/LineSvg";
import House from "../components/House";
import PathSvg from "../components/PathSvg";
import GSvg from "../components/GSvg";
import UseSvg from "../components/UseSvg";
import Use2 from "../components/Use2";
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


import { View, Text } from 'react-native'
import React from 'react'
import Svg, { G, Polygon } from 'react-native-svg'

export default function GSvg() {
  return (
  <Svg width="200" height="200" viewBox="-100 -100 200 200">
  <G transform="translate(0 5)">
    <G>
      <Polygon points="0,0 36,-50 0,-100" fill="#EDD8B7" />
      <Polygon points="0,0 -36,-50 0,-100" fill="#E5C39C" />
    </G>
    <G transform="rotate(72)">
      <Polygon points="0,0 36,-50 0,-100" fill="#EDD8B7" />
      <Polygon points="0,0 -36,-50 0,-100" fill="#E5C39C" />
    </G>
    <G transform="rotate(-72)">
      <Polygon points="0,0 36,-50 0,-100" fill="#EDD8B7" />
      <Polygon points="0,0 -36,-50 0,-100" fill="#E5C39C" />
    </G>
    <G transform="rotate(144)">
      <Polygon points="0,0 36,-50 0,-100" fill="#EDD8B7" />
      <Polygon points="0,0 -36,-50 0,-100" fill="#E5C39C" />
    </G>
    <G transform="rotate(-144)">
      <Polygon points="0,0 36,-50 0,-100" fill="#EDD8B7" />
      <Polygon points="0,0 -36,-50 0,-100" fill="#E5C39C" />
    </G>
  </G>
</Svg>
  )
}
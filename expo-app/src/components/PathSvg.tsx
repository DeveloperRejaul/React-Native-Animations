import { View, Text } from 'react-native'
import React from 'react'
import Svg, { Path } from 'react-native-svg'

export default function PathSvg() {
    return <Svg width="200" height="200"viewBox="-100 -100 200 200"> 
        <Path
        d="M -70 0 
          L 70 0
          L 30 -50 
          M 70 0
          L 30 50"
          stroke="#333333"
          strokeWidth="25"
          strokeLinecap="round"
          strokeLinejoin='round'
          fill={'none'}
        />
  </Svg>
}
// single line path
//  <Path
//     d="
//      M -60,0
//      L -60,0
//     "
//     stroke="#333333"
//     strokeWidth="25"
//     strokeLinecap="round"
//   />

// 3 line menu
//  <Path
//     d="
//     M -60,-40
//     L 60,-40
//     M -60,0
//     L 60,0
//     M -60,40
//     L 60,40
//     "
//     stroke="#333333"
//     strokeWidth="25"
//     strokeLinecap="round"
//   />

// hard 
//  <Path
//   d="
//   M -30,-20
//   L 0,20
//   L 30,-20
//   "
//   stroke="#333333"
//   strokeWidth="50"
//   strokeLinecap="round"
//   fill={'none'}
// />
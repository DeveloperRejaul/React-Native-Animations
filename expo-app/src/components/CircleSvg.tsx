import {  Text, View } from 'react-native'
import React from 'react'
import Svg, { Circle } from 'react-native-svg'

export default function CircleSvg() {
  return (
      <View style={{justifyContent:"center" , flex:1, alignItems:"center"}}>
       <Svg height={100} width={100} viewBox={`0 0 200 200`}>
        <Circle cy={100} cx={100} r={50} fill={'red'}/>
      </Svg>
       <Svg height={100} width={100} viewBox={`0 0 50 50`}>
        <Circle cy={50} cx={50} r={25} fill={'red'}/>
      </Svg>
      <Svg height={200} width={200} viewBox={`-100 -100 200 200`}>
        <Circle cy={0} cx={0} r={50} fill={'red'}/>
      </Svg>
    </View>
  )
}

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Svg, { Circle, Rect } from 'react-native-svg'

export default function RectSvg() {
  return (
    <View style={{justifyContent:"center" , flex:1, alignItems:"center"}}>
     <Svg height={400} width={400} viewBox='0 0 100 100'>
        <Circle cx={10} cy={10} r={5} fill={'none'} stroke={'red'} strokeWidth={2} x={40} y={-3}/>
        <Rect width={20} height={15} fill={'red'} x={40} y={12}/>
        <Circle cy={50} cx={50} r={25} fill={'red'}/>
      </Svg>
    </View>
  )
}

const styles = StyleSheet.create({})
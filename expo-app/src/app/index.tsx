import { View , StyleSheet} from 'react-native'
import React from 'react'
import * as d3 from 'd3-shape'
import { Path, Svg } from 'react-native-svg';

export default function index() {

   const path = d3.arc().innerRadius(0).outerRadius(100).startAngle(0).endAngle(Math.PI / 2);
 

  return (
      <View style={ styles.container}>
        <Svg height={50} width={50} fill={'red'} >
            <Path d={path()}/>
      </Svg>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 10,
        paddingTop: 25,
        justifyContent: "center",
        alignItems:"center"
    }
})
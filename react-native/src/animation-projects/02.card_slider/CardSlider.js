import { FlatList, Image, StyleSheet, Text, View, Dimensions,TouchableOpacity } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
const {width, height} = Dimensions.get("window")


const imageData = [
  {id:"01", img:require('../../assets/image/image_01.jpg')},
  {id:"02", img:require('../../assets/image/image_02.jpg')},
  {id:"03", img:require('../../assets/image/image_03.jpg')},
] 


let interval;
export default function CardSlider() {
 const [activeIndex, setActiveIndex] = useState(0);
 const [start, setStart] = useState(true);
 const slider =  useRef()

//  this is automatic scroll
//  useEffect(()=>{
//     interval = setInterval(() => {
//       if (activeIndex === imageData.length-1) {
//         slider.current.scrollToIndex({
//           index:0,
//           animation:true,
//          })
//       }else{
//         slider.current.scrollToIndex({
//           index:activeIndex + 1,
//           animation:true,
//          })
//       }
//     }, 2000);
//   return ()=> clearInterval(interval)
//  })


// off on control slider
useEffect(()=>{
  if (start) {
    interval = setInterval(() => {
      if (activeIndex === imageData.length-1) {
        slider.current.scrollToIndex({
          index:0,
          animation:true,
         })
      }else{
        slider.current.scrollToIndex({
          index:activeIndex + 1,
          animation:true,
         })
      }
    }, 2000);
  }else clearInterval(interval);
  return ()=> clearInterval(interval)
 })



// for scrollToIndex 
const getItemLayout = (data, index)=>{
  return{
    length:width,
    offset:width*index,
    index:index
  }
 }



//  dot indicator view
 const dotIndicator = ()=>{
   return imageData.map( (e,i)=> <View key={Math.random()} style={[styles.dot,{backgroundColor:activeIndex===i?"green":"red"}]}/>)
  }

  const onScroll = (event)=>{
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const  currentIndex = Math.ceil(Number(scrollPosition/ width))
    setActiveIndex(currentIndex)
  }

  return (
    <View style={styles.container} >
      
      <FlatList
          ref={slider}
          data={imageData}
          renderItem={({index,item})=> <RenderItems {...item}/>}
          keyExtractor={(item)=>item.id}
          horizontal
          pagingEnabled
          onScroll={onScroll}
          getItemLayout={getItemLayout}
        />
      <View style={styles.dotBody}>{dotIndicator()}</View>
    
    <View style={styles.btnBody}>
        <TouchableOpacity onPress={()=>setStart(true)} >
          <Text style={styles.btn}>Slider ON</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>setStart(false)} >
              <Text style={styles.btn}>Slider Off</Text>
        </TouchableOpacity>
    </View>

    </View>
  )
}


const RenderItems = ({img})=>{
  return<View>
  <Image style={styles.image} source={img}/>
</View>
}



const styles = StyleSheet.create({
  container:{},
  image:{width, height:height/4},
  dotBody:{flexDirection:"row", justifyContent:"center" ,marginVertical:10},
  dot:{height:10, width:10,borderRadius:100, marginHorizontal:10},
  btnBody:{marginTop:100, flexDirection:"row" , gap:20, justifyContent:"center"},
  btn:{color:"black", fontWeight:"bold", fontSize:18, backgroundColor:"green",borderRadius:5 , paddingHorizontal:10, paddingVertical:5}
})
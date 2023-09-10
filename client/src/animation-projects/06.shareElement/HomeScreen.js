import * as React from 'react';
import { View, Button, StyleSheet,FlatList, Image,Text, Dimensions ,TouchableOpacity} from 'react-native';
import Animated from "react-native-reanimated";
import { data } from './data';
import { useNavigation } from '@react-navigation/native';
const {width} = Dimensions.get("window")


export default function HomeScreen() {
  return (
    <View style={styles.container}>
    <FlatList
    data={data}
    renderItem={({item})=> <Items key={Math.random()} {...item}/>}
    keyExtractor={(item)=>item.id}
    />
    </View>
  );
}


const Items = ({img,title, dis,id})=>{
 const navigation = useNavigation()
  return (

    <TouchableOpacity  style={styles.item}
    onPress={()=>navigation.navigate("Details", {img,title, dis, id})}
    >
      <Animated.Image style={styles.img} source={{uri:img}}
       sharedTransitionTag={`${id}`}
      />
      <View style={{width:width-100}}>
        <Text style={styles.title}>{title}</Text>
        <Text numberOfLines={2} style={styles.dis}>{dis}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  img:{
    height:100, 
    width:100
  },
  item:{
    flexDirection:"row", marginVertical:10, 
  },
  title:{},
  dis:{}
});
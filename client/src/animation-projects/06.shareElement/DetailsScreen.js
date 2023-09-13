import { StyleSheet,Image,View,Button,Text } from 'react-native';
import Animated from 'react-native-reanimated';

export default function DetailsScreen({ navigation, route }) {
  const data = route.params;



  return (
    <View style={styles.container}
    >
      <Animated.Image
        source={{ uri:data.img}}
        style={{ width: 300, height: 300 }}
        sharedTransitionTag={`${data.id}`}
      />
      <Text style={styles.dis}>{data.dis}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  dis:{fontSize:20, textAlign:"justify", color:"black"}
});
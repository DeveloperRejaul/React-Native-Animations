import { StyleSheet,Image } from 'react-native';
import {View,Button } from 'react-native'
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
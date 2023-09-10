import {
  StyleSheet,
  Text,
  View,
  Animated,
  Pressable,
  Alert,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import React, {useState} from 'react';
import {useWindowDimensions} from 'react-native';

Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

export default function PadeIn_PadeOut() {
  const {height, width} = useWindowDimensions();
  const [Animation, setAnimation] = useState(true);

  // Style Script
  const i = {
    height: height / 12,
    width: width / 3,
    alignSelf: 'center',
    marginTop: 20,
    ...styles.AniView,
  };

  const padeIn = () => {
    LayoutAnimation.easeInEaseOut();
    setAnimation(true);
  };

  const padeOut = () => {
    LayoutAnimation.easeInEaseOut();
    setAnimation(false);
  };

  return (
    <View style={styles.body}>
      {/* Animated View */}
      <Animated.View
        style={{
          ...i,
          opacity: Animation ? 1 : 0,
        }}>
        <Text style={{color: '#fff'}}>Fading View!</Text>
      </Animated.View>

      {/* Creating Buttons */}
      <View style={styles.btn}>
        <Pressable style={styles.myBtn} onPress={padeIn}>
          <Text>PadeIn</Text>
        </Pressable>
        <Pressable style={styles.myBtn} onPress={padeOut}>
          <Text>PadeOut</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    height: '100%',
    backgroundColor: '#FAF3E3',
  },
  myBtn: {
    backgroundColor: '#D9F8C4',
    padding: 10,
  },
  btn: {
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
  },
  AniView: {
    backgroundColor: '#1F4690',
  },
});

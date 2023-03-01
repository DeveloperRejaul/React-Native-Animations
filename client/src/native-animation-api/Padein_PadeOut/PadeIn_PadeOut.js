import {StyleSheet, Text, View, Animated, Pressable, Alert} from 'react-native';
import React, {useRef} from 'react';
import {useWindowDimensions} from 'react-native';

export default function PadeIn_PadeOut() {
  const {height, width} = useWindowDimensions();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  // Style Script
  const i = {
    height: height / 12,
    width: width / 3,
    alignSelf: 'center',
    marginTop: 20,
    ...styles.AniView,
  };

  const padeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start(({finished}) => {
      finished ? Alert.alert('finished') : null;
    });
  };

  const padeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: true,
    }).start(({finished}) => {
      finished ? Alert.alert('finished') : null;
    });
  };

  return (
    <View style={styles.body}>
      {/* Animated View */}
      <Animated.View
        style={{
          ...i,
          opacity: fadeAnim,
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

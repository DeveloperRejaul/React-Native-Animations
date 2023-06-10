import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Pressable,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import React, {useState} from 'react';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}
const {height, width} = Dimensions.get('window');

export default function CustomSwitch() {
  const [Switch, setSwitch] = useState(false);

  const handleSwitch = () => {
    LayoutAnimation.easeInEaseOut();
    setSwitch(pre => !pre);
  };
  return (
    <View style={styles.container}>
      <Text>{Switch ? 'ON' : 'OFF'}</Text>
      <Pressable style={styles.switchBody} onPress={handleSwitch}>
        <View
          style={[
            styles.Switch,
            {alignSelf: Switch ? 'flex-end' : 'flex-start'},
          ]}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {justifyContent: 'center', alignItems: 'center', flex: 1},
  switchBody: {
    height: height / 15,
    width: width / 5,
    borderColor: 'red',
    borderWidth: 2,
    borderRadius: 5,
  },
  Switch: {width: '50%', backgroundColor: 'red', height: '100%'},
});

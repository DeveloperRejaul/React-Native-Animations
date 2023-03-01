import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import navigationstring from '../constense/navigationstring.js';

export default function Librarys({navigation}) {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Text
        onPress={() => navigation.navigate(navigationstring.Intractable)}
        style={{fontSize: 15, color: '#000', paddingVertical: 10}}>
        react-native-interactable
      </Text>
      <Text
        onPress={() => navigation.navigate(navigationstring.Animatable)}
        style={{fontSize: 15, color: '#000', paddingVertical: 10}}>
        react-native-animatable
      </Text>
      <Text
        onPress={() => navigation.navigate(navigationstring.Reanimated)}
        style={{fontSize: 15, color: '#000', paddingVertical: 10}}>
        react-native-reanimated
      </Text>
      <Text
        onPress={() => navigation.navigate(navigationstring.GesturHandler)}
        style={{fontSize: 15, color: '#000', paddingVertical: 10}}>
        react-native-gester-handler
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});

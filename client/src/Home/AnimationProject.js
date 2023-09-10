import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import navigationstring from '../constense/navigationstring.js';

export default function AnimationProject({navigation}) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity style={styles.screenBody}>
          <Text
            style={styles.screen}
            onPress={() => navigation.navigate(navigationstring.slider)}>
            Card Slider
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.screenBody}>
          <Text
            style={styles.screen}
            onPress={() => navigation.navigate(navigationstring.ImageSlider)}>
            Image Slider
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    fontSize: 20,
    color: '#000',
    backgroundColor: 'green',
    width: '100%',
    paddingHorizontal: '2%',
    marginVertical: '1%',
    textAlign: 'center',
    borderRadius: 5,
    paddingVertical: 3,
  },
  container: {
    alignItems: 'center',
  },
  screenBody: {
    width: '100%',
  },
});

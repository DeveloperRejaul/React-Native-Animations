import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import navigationstring from '../constense/navigationstring.js';

export default function AnimationProject({navigation}) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text
          style={styles.screen}
          onPress={() =>
            navigation.navigate(navigationstring.CerculerProgess1)
          }>
          CerculerProgess1
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    fontSize: 20,
    color: '#000',
  },
  container: {
    alignItems: 'center',
  },
});

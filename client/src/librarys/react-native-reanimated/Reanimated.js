import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import navigationstring from '../../constense/navigationstring.js';

export default function Reanimated({navigation}) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text
        style={styles.item}
        onPress={() => navigation.navigate(navigationstring.ShareValue)}>
        ShareValue
      </Text>
      <Text
        style={styles.item}
        onPress={() => navigation.navigate(navigationstring.GusterEvent)}>
        Event
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    backgroundColor: 'green',
    marginVertical: 10,
    width: '100%',
    textAlign: 'center',
    fontSize: 20,
    color: '#000',
  },
});

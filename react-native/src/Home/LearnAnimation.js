import {Text, View, ScrollView} from 'react-native';
import React from 'react';
import globalStyles from '../constense/globalStyles.js';
import navigationstring from '../constense/navigationstring.js';

const LearnAnimation = ({navigation}) => {
  return (
    <ScrollView>
      <View style={globalStyles.container}>
        <Text onPress={() => navigation.navigate(navigationstring.Opacity)}>
          Opacity
        </Text>
        <Text
          onPress={() => navigation.navigate(navigationstring.LearnTransolate)}>
          Transolate
        </Text>
        <Text onPress={() => navigation.navigate(navigationstring.Scale)}>
          Scale
        </Text>
        <Text
          onPress={() =>
            navigation.navigate(navigationstring.DinamicWidthHeigth)
          }>
          DinamicWidthHeigth
        </Text>
        <Text
          onPress={() =>
            navigation.navigate(navigationstring.Absolute_Position)
          }>
          Absolute Position
        </Text>
      </View>
    </ScrollView>
  );
};

export default LearnAnimation;

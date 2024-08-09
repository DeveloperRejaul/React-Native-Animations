import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import React from 'react';
import screen from '../constense/screen.js';

export default function UseNativeApi({navigation}) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          {screen.map((ele, i) => {
            return (
              <TouchableOpacity
                key={i}
                style={styles.items}
                onPress={() => navigation.navigate(ele.screenName)}>
                <Text style={styles.text}>{ele.name}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  items: {
    width: Dimensions.get('window').width - 20,
    backgroundColor: '#16825d',
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    paddingVertical: 5,
  },
  text: {
    fontSize: 20,
    color: '#000',
    fontWeight: '600',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

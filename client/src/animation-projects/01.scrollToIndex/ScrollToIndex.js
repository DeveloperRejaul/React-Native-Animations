import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Dimensions,
    TouchableOpacity,
    Animated,
  } from 'react-native';
  import React, {useEffect, useRef, useState} from 'react';
  import AIcon from 'react-native-vector-icons/AntDesign';
  import EIcon from 'react-native-vector-icons/Entypo';
  
  const {width, height} = Dimensions.get('screen');
  const arr = [
    'item0',
    'item1',
    'item2',
    'item3',
    'item4',
    'item5',
    'item6',
    'item7',
    'item8',
    'item9',
    'item10',
  ];
  
  export default function ScrollToIndex() {
    const [scrollIndex, setScrollIndex] = useState(0);
    const [scrollPosition, setScrollPosition] = useState(0);
    const ref = useRef(null);
  
    useEffect(() => {
      ref.current?.scrollToIndex({
        index: scrollIndex,
        animated: true,
        viewPosition: scrollPosition,
        viewOffset: 30,
      });
    }, [scrollIndex, scrollPosition]);
  
    return (
      <View style={styles.container}>
        <FlatList
          ref={ref}
          initialScrollIndex={scrollIndex}
          horizontal={true}
          contentContainerStyle={styles.contentContainer}
          showsHorizontalScrollIndicator={false}
          data={arr}
          renderItem={({item, index}) => (
            <TouchableOpacity
              onPress={() => {
                setScrollIndex(index);
              }}
              key={index}
              style={[
                styles.item,
                index === scrollIndex ? styles.activeColor : styles.inactiveColor,
              ]}>
              <Text>{item}</Text>
            </TouchableOpacity>
          )}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: width - 60,
            paddingBottom: 10,
          }}>
          <Text style={{fontSize: 15, fontWeight: '700', color: '#000'}}>
            Scroll Position
          </Text>
          <Text style={{fontSize: 15, fontWeight: '700', color: '#000'}}>
            Navigation
          </Text>
        </View>
        <View style={styles.directionBody}>
          <View style={styles.btnBody}>
            <TouchableOpacity
              style={styles.btnS}
              onPress={() => {
                setScrollPosition(0);
              }}>
              <EIcon name="align-left" size={30} color={'#000'} />
            </TouchableOpacity>
  
            <TouchableOpacity
              style={styles.btnS}
              onPress={() => {
                setScrollPosition(0.5);
              }}>
              <EIcon name="align-horizontal-middle" size={30} color={'#000'} />
            </TouchableOpacity>
  
            <TouchableOpacity
              style={styles.btnS}
              onPress={() => {
                setScrollPosition(1);
              }}>
              <EIcon name="align-right" size={30} color={'#000'} />
            </TouchableOpacity>
          </View>
          <View style={styles.btnBody}>
            <TouchableOpacity
              style={styles.btnS}
              onPress={() => {
                if (scrollIndex === 0) {
                  return;
                } else {
                  setScrollIndex(scrollIndex - 1);
                }
              }}>
              <AIcon name="arrowleft" size={30} color={'#000'} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btnS}
              onPress={() => {
                if (scrollIndex === arr.length - 1) {
                  return;
                } else {
                  setScrollIndex(scrollIndex + 1);
                }
              }}>
              <AIcon name="arrowright" size={30} color={'#000'} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    item: {
      paddingHorizontal: 10,
      paddingVertical: 5,
      backgroundColor: '#fff',
      borderWidth: 1,
      width: width / 5,
      height: 40,
      marginHorizontal: 10,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: '#ffbb00',
      borderRadius: 10,
    },
    contentContainer: {
      marginVertical: height / 5,
    },
    directionBody: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: width - 20,
    },
    btnBody: {
      flexDirection: 'row',
      columnGap: 10,
      marginHorizontal: 10,
    },
    btn: {
      backgroundColor: '#bbbb00',
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderRadius: 10,
    },
    activeColor: {
      backgroundColor: '#ffca28',
    },
    inactiveColor: {
      backgroundColor: '#fff',
    },
    btnS: {backgroundColor: '#ffbb00', padding: 5, borderRadius: 10},
  });
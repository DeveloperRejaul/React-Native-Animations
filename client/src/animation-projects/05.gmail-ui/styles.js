import {StyleSheet} from 'react-native';
import {
  searchBarHight,
  SHM,
  width,
  prifileHeight,
  itemHeight,
} from './constence.js';
export default StyleSheet.create({
  container: {flex: 1, backgroundColor: '#181818'},
  searchBarBody: {
    backgroundColor: '#26272c',
    width: width - SHM,
    height: searchBarHight,
    marginHorizontal: SHM,
    alignSelf: 'center',
    marginVertical: 10,
    borderRadius: width / 2,
    justifyContent: 'space-between',
    flexDirection: 'row',
    overflow: 'hidden',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  searchInput: {
    fontSize: 18,
    fontWeight: '400',
    width: '80%',
  },
  imageBody: {
    height: searchBarHight / 2,
    width: searchBarHight / 2,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  title: {
    color: '#b3b3b3',
    fontWeight: '700',
    fontSize: 18,
  },
  subTitle: {
    color: '#b3b3b3',
    fontWeight: '600',
    fontSize: 16,
    width: '90%',
  },
  date: {
    color: '#b3b3b3',
    fontWeight: '400',
    fontSize: 13,
  },
  text: {
    color: '#868887',
    width: '90%',
  },
  profileBody: {
    width: '10%',
    alignSelf: 'flex-start',
  },
  profileText: {
    color: '#232324',
    height: prifileHeight,
    width: prifileHeight,
    borderRadius: prifileHeight / 2,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 20,
    fontWeight: '600',
  },
  itemBody: {
    paddingHorizontal: SHM + 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: itemHeight,
    backgroundColor: '#181818',
    width: width + 30,
    alignSelf: 'center',
    borderRadius: 15,
  },
  contentBody: {width: '85%'},
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {color: '#868887'},
  lineIcon: {
    backgroundColor: '#b3b3b3',
    width: 15,
    height: 2,
    marginVertical: 1.5,
  },
  iconBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    position: 'absolute',
    paddingHorizontal: SHM,
  },
  iconBodyInner: {
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errowIcon: {
    position: 'absolute',
  },
});
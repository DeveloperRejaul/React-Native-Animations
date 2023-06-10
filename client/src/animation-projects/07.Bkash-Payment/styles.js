import {StyleSheet} from 'react-native';
import {rf} from '../../constense/Dimensions.js';
import {
  animationContentHeight,
  animationHubcercle,
  animationHubcercleRadius,
  color,
  Radius,
} from './constence.js';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.wight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttomFingerItem: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: '-50%',
  },
  tabButtonBody: {
    height: animationContentHeight - 10,
    width: animationContentHeight - 10,
    borderRadius: Radius,
    backgroundColor: color.wight,
    position: 'absolute',
    overflow: 'hidden',
    zIndex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabButton: {
    height: animationContentHeight - 20,
    width: animationContentHeight - 20,
    borderRadius: Radius,
    backgroundColor: color.red,
    position: 'absolute',
    overflow: 'hidden',
    zIndex: 2,
  },

  hafCercale: {
    justifyContent: 'center',
    alignItems: 'center',
    height: animationHubcercle,
    width: animationHubcercle,
    borderRadius: animationHubcercleRadius,
    backgroundColor: 'transparent',
    zIndex: 1,
  },

  text: {
    textAlignVertical: 'top',
    color: color.wight,
    textAlign: 'center',
    marginTop: 50,
    fontSize: 20,
    fontWeight: '600',
  },
  damiText: {color: '#000', fontSize: rf(2.5), fontWeight: '600'},
  //hafe cercle
  animatedProgress: {
    height: '100%',
    width: '100%',
    borderRadius: animationHubcercleRadius,
    backgroundColor: color.red,
    overflow: 'hidden',
    position: 'absolute',
  },
  animatedProgressDivider: {
    height: '50%',
    width: '100%',
    backgroundColor: color.wight,
  },
});

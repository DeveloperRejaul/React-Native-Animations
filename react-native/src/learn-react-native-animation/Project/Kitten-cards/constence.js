import {Dimensions} from 'react-native';
export const {width} = Dimensions.get('window');
export const offset = width / 5;

export const random = () => parseInt(Math.random() * 150);
export const randomColor = () =>
  'rgb(' + random() + ',' + random() + ',' + random() + ')';
export let _data = [
  'rgb(48,37,97)',
  'rgb(48,103,57)',
  'rgb(63,44,35)',
  'rgb(13,112,145)',
  'rgb(26,9,26)',
  'rgb(135,52,8)',
  'rgb(110,133,12)',
  'rgb(109,31,135)',
  'rgb(89,57,100)',
  'rgb(70,103,100)',
];

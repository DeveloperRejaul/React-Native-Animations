import {Dimensions} from 'react-native';

export const {width, height} = Dimensions.get('window');
export const searchBarHight = 45;
export const SHM = width / 25;
export const itemHeight = 80;
export const prifileHeight = width / 10;
export const offset = 100;
export const posativeZiroOffset = 50;
export const nagativeZiroOffset = -50;

// For random Color
const random = () => parseInt(Math.random() * 150);
export const randomColor = () =>
  'rgb(' + random() + ',' + random() + ',' + random() + ')';

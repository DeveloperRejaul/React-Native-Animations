import { Skia } from '@shopify/react-native-skia';

export const needle = (cx: number, cy: number, oR: number, max:number, currentValue:number, radian:number, sizeReduce:number , radius:number) => {
  const value = calculateValue(max, currentValue);
  const total = 100;
  const ang = 180.0 * (1 - value / total);
  const length = oR - 5;
  const sin = Math.sin(-radian * ang);
  const cos = Math.cos(-radian * ang);
  const r = 15;
  const x0 = cx;
  const y0 = cy;
  const xba = x0 + r * sin;
  const yba = y0 - r * cos;
  const xbb = x0 - r * sin;
  const ybb = y0 + r * cos;
  const xp = x0 + length * cos;
  const yp = y0 + length * sin;


  // calculate top text
  const angle = (value / 100) * 180;
  const _radius = radius + sizeReduce + 10;
  // Convert polar coordinates to Cartesian
  let x = cx + _radius * Math.cos((180 - angle) * radian);
  let y = cy - _radius * Math.sin((180 - angle) * radian);

  if (value === 0) {
    y -= 10;
  }

  if (value === 50) {
    x -= 20;
    y += 20;
  }
  if (value > 50) {
    x -= sizeReduce - 15;
  }
  if (value < 50 ) {
    x -= sizeReduce - 10;
  }
  if (value >= 100) {
    y -= 10;
  }

  return {x0, y0, r , xba, yba, xbb, ybb, xp, yp,x,y};

};

export  const arcPath = (start: number, sweep: number, radius:number, x:number,y:number) => Skia.Path.Make().addArc(
  {
    x: x - radius,
    y: y - radius,
    width: radius * 2,
    height: radius * 2,
  },
  (start * 180) / Math.PI,
  (sweep * 180) / Math.PI
);


export  const calculateValue = (max:number, currentValue: number) => {
  if (max === Number(0)) return 100;
  const valueToUse = Math.min(currentValue, max);
  return (valueToUse / max) * 100;
};
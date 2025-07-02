import { View } from 'react-native';
import PieChartIndex  from './src/pie-chart/Index';


export default function App() {
  const data = [
    {
      value: 100,
      color: "#d61212",
      label: `label-01`,
    },{
      value: 200,
      color: "#d69112",
      label: `label-02`,
    },{
      value: 200,
      color: "#1246d6",
      label: `label-03`,
    },
  ];
  return (
    <View style={{flex:1, alignItems:"center"}}>
      <PieChartIndex
          data={data}
          textTitle={`Hello World`}
          textValue={`$11431`}
          SIZE={200}
          BASE_STROKE_WIDTH={25}
      />
    </View>
  );
}


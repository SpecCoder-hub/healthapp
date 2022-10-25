import React, { useEffect, useRef } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ReferenceLine,
  Legend,
  Tooltip,
  CartesianGrid,
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";
import { data2 } from "../../../pages/Data/data2";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import hampelFilter, { identifyOutliers } from "hampel-filter";
import { useStore } from "../../../Context/store";
import { chartOptions2, hampelOptions } from "../../../Context/constant";
// import scaler from "minmaxscaler";

const ECGChart = ({ width, height }) => {
  const { state } = useStore();
  const chartComponentRef1 = useRef(null);

  useEffect(() => {
    updateSeries(state.ecg);
  }, [state.ecg]);

  const updateSeries = (data) => {
    const chart1 = chartComponentRef1.current?.chart;

    // const values1 = [];
    // for (let i = 0; i < data.length; i++) {
    //   values1.push(data[i].y);
    // }
    // const trans = scaler.fit_transform(data);
// const X_test = scaler.transform([1.5, 2.3]);
// const X_test_inverse = scaler.inverse_transform(X_test);
// console.log(trans)
    const ecg = hampelFilter(data, hampelOptions);
    // console.log(identifyOutliers(data, hampelOptions))
    // for (let i = 0; i < data.length; i++) {
    //   data[i].y = lead1[i];
    // }
    chart1?.series[0].setData(ecg, true, false);
  };
  return (
    // <ResponsiveContainer height="100%" width="80%">
    //   <AreaChart
    //     style={{ background: "transparent" }}
    //     width={width}
    //     height={height}
    //     data={data2}
    //     margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
    //   >
    //     <defs>
    //       <linearGradient
    //         id="colorPv"
    //         x1="0"
    //         y1="0"
    //         x2="0"
    //         y2="1"
    //       ></linearGradient>
    //     </defs>
    //     <Tooltip />

    //     <Area
    //       type="linear"
    //       dataKey="pv"
    //       stroke="#fe706f"
    //       fillOpacity={1}
    //       fill="url(#colorPv)"
    //     />
    //     <Area
    //       type="linear"
    //       dataKey="pv1"
    //       stroke="#65bceb"
    //       fillOpacity={1}
    //       fill="url(#colorPv)"
    //     />
    //   </AreaChart>
    // </ResponsiveContainer>
    <HighchartsReact
      containerProps={{
        style: { height: "100%", width: "100%" },
      }}
      highcharts={Highcharts}
      options={chartOptions2}
      constructorType="stockChart"
      ref={chartComponentRef1}
    />
  );
};
export default ECGChart;

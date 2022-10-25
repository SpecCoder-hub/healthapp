import React, { useEffect, useRef } from "react";
import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import hampelFilter from "hampel-filter";

import { useStore } from "../../../Context/store";
import { chartOptions2, hampelOptions } from "../../../Context/constant";

const CVPChart = ({ data, width, height }) => {
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
    const ecg = hampelFilter(data, hampelOptions);
    // for (let i = 0; i < data.length; i++) {
    //   data[i].y = lead1[i];
    // }
    chart1?.series[0].setData(ecg, true, false);
  };

  return (
    // <ResponsiveContainer height="100%" width="80%">
    //   <AreaChart
    //     width={width}
    //     height={height}
    //     data={state.ecg}
    //     margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
    //   >
    //     <Area
    //       type="linear"
    //       dataKey="y"
    //       stroke="#b3f1ff"
    //       fillOpacity={1}
    //       fill="url(#colorUv3)"
    //       isAnimationActive={false}
    //     />
    //   </AreaChart>
    // </ResponsiveContainer>
    <HighchartsReact
      containerProps={{
        style: { height: "100%", width: "80%", margin: "10px 30px 0 0" },
      }}
      highcharts={Highcharts}
      options={chartOptions2}
      constructorType="stockChart"
      ref={chartComponentRef1}
    />
  );
};
export default CVPChart;

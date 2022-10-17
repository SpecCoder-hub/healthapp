import React, { useEffect, useRef } from "react";
import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import hampelFilter from "hampel-filter";

import { useStore } from "../../../Context/store";

const CVPChart = ({ data, width, height }) => {
  const { state } = useStore();
  const chartComponentRef1 = useRef(null);

  useEffect(() => {
    updateSeries(state.data);
  }, [state.data]);

  const chartOptions = {
    xAxis: {
      // type: 'datetime',
      labels: {
        format: "{value}", // %S.%L
        style: {
          color: "black",
        },
        enabled: false,
      },
      tickInterval: 1,
      ordinal: false,
      visible: false,
      // zoomEnabled: true,
      gridLineColor: "#f9ebeb",
      gridLineWidth: 0,
    },
    yAxis: {
      labels: {
        style: {
          color: "black",
        },
      },
      title: {
        text: "",
      },
      gridLineColor: "#f68181",
      gridLineWidth: 0,
    },
    plotOptions: {
      series: {
        enableMouseTracking: false,
        states: {
          hover: {
            enabled: false,
          },
        },
        lineWidth: 1,
        turboThreshold: 3000,
      },
    },

    tooltip: {
      enabled: false,
      valueDecimals: 2,
      shared: true,
      headerFormat: "Session_time: {point.x:%H:%M:%S}<br/>",
    },
    rangeSelector: {
      enabled: false,
    },
    chart: {
      panning: true,
      alignTicks: false,
      backgroundColor: "rgba(0,0,0,0)",
      zoomType: "xy",
    },
    navigator: {
      enabled: false,
    },
    scrollbar: {
      enabled: false,
    },
    series: [
      {
        data: [],
        // type: 'line',
        color: "#b3f1ff",
      },
    ],
    credits: {
      enabled: false,
    },
  };
  const updateSeries = (data) => {
    const chart1 = chartComponentRef1.current?.chart;

    const values1 = [];
    for (let i = 0; i < data.length; i++) {
      values1.push(data[i].cvp);
    }
    const lead1 = hampelFilter(values1, { windowHalfWidth: 15 });
    for (let i = 0; i < data.length; i++) {
      data[i].y = lead1[i];
    }
    chart1?.series[0].setData(data, true, false);
  };

  return (
    // <ResponsiveContainer height="100%" width="80%">
    //   <AreaChart
    //     width={width}
    //     height={height}
    //     data={data}
    //     margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
    //   >
    //     <Area
    //       type="linear"
    //       dataKey="cvp"
    //       stroke="#b3f1ff"
    //       fillOpacity={1}
    //       fill="url(#colorUv3)"
    //     />
    //   </AreaChart>
    // </ResponsiveContainer>
    <HighchartsReact
      containerProps={{
        style: { height: "100%", width: "80%", margin: "10px 30px 0 0" },
      }}
      highcharts={Highcharts}
      options={chartOptions}
      constructorType="stockChart"
      ref={chartComponentRef1}
    />
  );
};
export default CVPChart;

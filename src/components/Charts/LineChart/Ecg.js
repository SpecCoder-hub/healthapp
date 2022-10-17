import React, {useEffect, useRef} from "react";
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
import hampelFilter from "hampel-filter";
import { useStore } from "../../../Context/store";

const ECGChart = ({ width, height }) => {
  const { state } = useStore();
  const chartComponentRef1 = useRef(null);

  useEffect(() => {
    updateSeries(state.ecg);
  }, [state.ecg]);

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
      zoomEnabled: true,
      gridLineColor: "#f9ebeb",
      gridLineWidth: 1,
    },
    yAxis: {
      labels: {
        style: {
          color: "white",
        },
      },
      title: {
        text: "",
      },
      gridLineColor: "#f68181",
      gridLineWidth: 1,
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
        color: "#0000ff",
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
      values1.push(data[i].y);
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
      options={chartOptions}
      constructorType="stockChart"
      ref={chartComponentRef1}
    />
  );
};
export default ECGChart;

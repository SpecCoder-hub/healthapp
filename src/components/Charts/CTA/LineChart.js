import React, { useRef, useEffect } from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import hampelFilter from "hampel-filter";
import { useStore } from "../../../Context/store";
import { Line } from "react-chartjs-2";

// import datasets here.
import { dataLineA, dataLineB } from "./data/datasets";

// linear gradient of line chart.
// const getGradiant = (ctx, chartArea) => {
//   let width;
//   let height;
//   let gradient;
//   const chartWidth = chartArea.right - chartArea.left;
//   const chartHeight = chartArea.bottom - chartArea.top;
//   if (!gradient || width !== chartWidth || height !== chartHeight) {
//     width = (chartWidth * 35) / 100;
//     console.log(width);
//     height = chartHeight;
//     gradient = ctx.createLinearGradient(0, 0, width, 0);
//     gradient.addColorStop(0.5, "hsl(358deg 60% 49%)");
//     gradient.addColorStop(0.5, "hsl(199deg 61% 61%)");
//   }

//   return gradient;
// };

// configure data of line chart
// const data = {
//   datasets: [
//     {
//       label: "Dataset 2",
//       data: dataLineA,
//       borderColor: (context) => {
//         const { chart } = context;
//         const { ctx, chartArea } = chart;
//         if (!chartArea) return true;
//         return getGradiant(ctx, chartArea);
//       },
//       backgroundColor: "rgba(255, 99, 132, 0.5)",
//     },
//     {
//       label: "Dataset 2",
//       data: dataLineB,
//       borderColor: (context) => {
//         const { chart } = context;
//         const { ctx, chartArea } = chart;
//         if (!chartArea) return true;
//         return getGradiant(ctx, chartArea);
//       },
//       backgroundColor: "rgba(255, 99, 132, 0.5)",
//     },
//   ],
// };

export function LineChart({ count }) {
  // configure options of line chart
  // const options = {
  //   aspectRatio: 1 / 0.18,
  //   plugins: {
  //     legend: {
  //       display: false,
  //     },
  //     tooltip: {
  //       enabled: true,
  //     },
  //   },
  //   elements: {
  //     point: {
  //       radius: 0,
  //     },
  //     line: {
  //       borderWidth: 2,
  //       borderJoinStyle: "bevel",
  //     },
  //   },
  //   scales: {
  //     y: {
  //       min: -0.5,
  //       max: 0.5,
  //       grid: {
  //         color: "hsl(330deg 13% 25%)",
  //         borderColor: "hsl(330deg 13% 25%)",
  //         drawBorder: true,
  //       },
  //       ticks: {
  //         stepSize: 0.2,
  //       },
  //     },
  //     x: {
  //       afterTickToLabelConversion: (scaleInstance) => {
  //         scaleInstance.ticks[0].label = "";
  //       },
  //       grid: {
  //         color: "hsl(330deg 13% 25%)",
  //         borderColor: "hsl(330deg 13% 25%)",
  //         drawBorder: true,
  //       },
  //       ticks: {
  //         maxTicksLimit: 40,
  //         maxRotation: 0,
  //         minRotation: 0,
  //       },
  //     },
  //   },
  // };
  const { state } = useStore();
  const chartComponentRef1 = useRef(null);

  useEffect(() => {
    updateSeries(state.ecg);
  }, [state.ecg]);

  const chartOptions = {
    xAxis: {
      // type: 'datetime',
      labels: {
        format: "{value:%S.%L}", // %S.%L
        style: {
          color: "white",
        },
        enabled: true,
      },
      tickInterval: 100,
      ordinal: false,
      visible: true,
      zoomEnabled: true,
      gridLineColor: "#f68181",
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
    // <div className="line">
    //   <Line options={options} data={data} />
    // </div>
    <HighchartsReact
      containerProps={{
        style: { height: "250px", width: "100%" },
      }}
      highcharts={Highcharts}
      options={chartOptions}
      constructorType="stockChart"
      ref={chartComponentRef1}
    />
  );
}

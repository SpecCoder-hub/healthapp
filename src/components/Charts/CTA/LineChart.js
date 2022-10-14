import React from "react";
import { Line } from "react-chartjs-2";

// import datasets here.
import { dataLineA, dataLineB } from "./data/datasets";

// linear gradient of line chart.
const getGradiant = (ctx, chartArea) => {
  let width;
  let height;
  let gradient;
  const chartWidth = chartArea.right - chartArea.left;
  const chartHeight = chartArea.bottom - chartArea.top;
  if (!gradient || width !== chartWidth || height !== chartHeight) {
    width = (chartWidth * 35) / 100;
    console.log(width);
    height = chartHeight;
    gradient = ctx.createLinearGradient(0, 0, width, 0);
    gradient.addColorStop(0.5, "hsl(358deg 60% 49%)");
    gradient.addColorStop(0.5, "hsl(199deg 61% 61%)");
  }

  return gradient;
};

// configure data of line chart
const data = {
  datasets: [
    {
      label: "Dataset 2",
      data: dataLineA,
      borderColor: (context) => {
        const { chart } = context;
        const { ctx, chartArea } = chart;
        if (!chartArea) return true;
        return getGradiant(ctx, chartArea);
      },
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: dataLineB,
      borderColor: (context) => {
        const { chart } = context;
        const { ctx, chartArea } = chart;
        if (!chartArea) return true;
        return getGradiant(ctx, chartArea);
      },
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

export function LineChart({ count }) {
  // configure options of line chart
  const options = {
    aspectRatio: 1 / 0.18,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
    elements: {
      point: {
        radius: 0,
      },
      line: {
        borderWidth: 2,
        borderJoinStyle: "bevel",
      },
    },
    scales: {
      y: {
        min: -0.5,
        max: 0.5,
        grid: {
          color: "hsl(330deg 13% 25%)",
          borderColor: "hsl(330deg 13% 25%)",
          drawBorder: true,
        },
        ticks: {
          stepSize: 0.2,
        },
      },
      x: {
        afterTickToLabelConversion: (scaleInstance) => {
          scaleInstance.ticks[0].label = "";
        },
        grid: {
          color: "hsl(330deg 13% 25%)",
          borderColor: "hsl(330deg 13% 25%)",
          drawBorder: true,
        },
        ticks: {
          maxTicksLimit: 40,
          maxRotation: 0,
          minRotation: 0,
        },
      },
    },
  };

  return (
    <div className="line">
      <Line options={options} data={data} />
    </div>
  );
}

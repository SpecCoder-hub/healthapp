import React from "react";
import { Line } from "react-chartjs-2";
import { lineData } from "./data/datasets";

const options = {
  aspectRatio: 1,
  plugins: {
    legend: {
      display: false,
    },
  },
  layout: {
    padding: {
      left: -10,
      bottom: -10,
    },
  },
  elements: {
    point: {
      radius: 0,
    },
    line: {
      borderWidth: 3,
      tension: 0.5,
      fill: true,
    },
  },
  scales: {
    y: {
      min: 0,
      max: 9,
      ticks: {
        display: false,
        stepSize: 1,
      },
      grid: {
        display: false,
        borderColor: "transparent",
      },
    },
    x: {
      grid: {
        borderColor: "transparent",
        display: false,
      },
      ticks: {
        display: false,
        maxRotation: 0,
        minRotation: 0,
      },
    },
  },
};

const data = {
  datasets: [
    {
      label: "Dataset 11",
      data: lineData,
      borderColor: "hsl(178deg 94% 32%)",
      backgroundColor: (context) => {
        const { chart } = context;
        const { ctx, chartArea } = chart;
        if (!chartArea) return true;
        let gradient = ctx.createLinearGradient(0, 200, 0, 0);
        gradient.addColorStop(0, "hsl(0deg 0% 50% / 50%)");
        gradient.addColorStop(1, "hsl(178deg 94% 32% / 50%)");

        return gradient;
      },
      fill: true,
    },
  ],
};

export default function Bottom() {
  return (
    <div className="bottom-line">
      <Line options={options} data={data} />
      <p className="pos title">Normal</p>
      <p className="pos class">Class 1</p>
      <p className="pos count">123</p>
    </div>
  );
}

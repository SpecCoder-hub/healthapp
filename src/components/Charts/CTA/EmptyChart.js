import React from "react";
import { Line } from "react-chartjs-2";

const options = {
  aspectRatio: 1,
  plugins: {
    legend: {
      display: false,
    },
  },
  layout: {
    padding: {
      top: 30,
      left: 10,
      bottom: 13,
    },
  },
  elements: {
    point: {
      radius: 0,
    },
  },
  scales: {
    y: {
      ticks: {
        display: false,
      },
      grid: {
        display: false,
        borderColor: "white",
        borderWidth: 2,
      },
    },
    x: {
      grid: {
        borderColor: "white",
        borderWidth: 2,
        display: false,
      },
    },
  },
};

const data = {
  datasets: [
    {
      label: "Dataset 11",
      data: [],
    },
  ],
};

export default function EmptyChart() {
  return (
    <div className="bottom-line empty">
      <Line options={options} data={data} />
      <p className="pos count red">123</p>
      <p className="pos title">- 4.3</p>
      <p className="pos class">320</p>
      <p className="pos middle">Noise</p>
      <p className="pos top-left">4.3</p>
    </div>
  );
}

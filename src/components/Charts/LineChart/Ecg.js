import React, { useEffect, useRef } from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import hampelFilter, { identifyOutliers } from "hampel-filter";
import { useStore } from "../../../Context/store";
import {
  chartOptions1,
  chartOptions2,
  hampelOptions,
} from "../../../Context/constant";
// import scaler from "minmaxscaler";

export const leadLabels = ["lead1", "lead2", "lead3", "avl", "avr", "avf"];
const ECGChart = ({ width, height, lead }) => {
  const { state } = useStore();
  const chartComponentRef1 = useRef(null);

  useEffect(() => {
    if (lead == 0) updateSeries(state.lead1);
    else if (lead == 1) updateSeries(state.lead2);
    else if (lead == 2) updateSeries(state.lead3);
    else if (lead == 3) updateSeries(state.avl);
    else if (lead == 4) updateSeries(state.avr);
    else if (lead == 5) updateSeries(state.avf);
    else updateSeries(state.lead1);
  }, [state.lead1]);

  const updateSeries = (data) => {
    const chart1 = chartComponentRef1.current?.chart;
    const ecg = hampelFilter(data, hampelOptions);
    chart1?.series[0].setData(ecg, true, false);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
      }}
    >
      <span style={{ color: "white" }}>{leadLabels[lead]}</span>
      <HighchartsReact
        containerProps={{
          style: { height: "100%", width: "100%" },
        }}
        highcharts={Highcharts}
        options={chartOptions2}
        constructorType="stockChart"
        ref={chartComponentRef1}
      />
    </div>
  );
};
export default ECGChart;

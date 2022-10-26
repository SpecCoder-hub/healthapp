import React, { useRef, useEffect } from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import hampelFilter, { identifyOutliers } from "hampel-filter";
import { useStore } from "../../../Context/store";
import { chartOptions1, hampelOptions } from "../../../Context/constant";

export function LineChart_Lead2({ count }) {
   const { state } = useStore();
  const chartComponentRef1 = useRef(null);

  useEffect(() => {
    updateSeries(state.lead2);
  }, [state.lead2]);

  const updateSeries = (data) => {
    const chart1 = chartComponentRef1.current?.chart;

    const ecg = hampelFilter(data, hampelOptions);
    console.log(identifyOutliers(data, hampelOptions));
console.log(ecg)
    chart1?.series[0].setData(ecg, true, false);
  };
  return (
    <HighchartsReact
      containerProps={{
        style: { height: "250px", width: "100%" },
      }}
      highcharts={Highcharts}
      options={chartOptions1}
      constructorType="stockChart"
      ref={chartComponentRef1}
    />
  );
}

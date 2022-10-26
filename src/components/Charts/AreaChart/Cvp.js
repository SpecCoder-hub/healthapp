import React, { useEffect, useRef } from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import hampelFilter from "hampel-filter";

import { useStore } from "../../../Context/store";
import { chartOptions2, hampelOptions } from "../../../Context/constant";

const CVPChart = ({ data, width, height }) => {
  const { state } = useStore();
  const chartComponentRef1 = useRef(null);

  useEffect(() => {
    updateSeries(state.lead1);
  }, [state.lead1]);

  const updateSeries = (data) => {
    const chart1 = chartComponentRef1.current?.chart;

    const ecg = hampelFilter(data, hampelOptions);
    chart1?.series[0].setData(ecg, true, false);
  };

  return (
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

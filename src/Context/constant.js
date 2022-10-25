export const hampelOptions = {
  // windowHalfWidth: 1000,
  threshold: 0.01,
  // constantScaleFactor: 1,
};

export const chartOptions1 = {
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
      // type: 'spline',
      color: "#0000ff",
    },
  ],
  credits: {
    enabled: false,
  },
};

export const chartOptions2 = {
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
      // type: 'spline',
      color: "#b3f1ff",
    },
  ],
  credits: {
    enabled: false,
  },
};


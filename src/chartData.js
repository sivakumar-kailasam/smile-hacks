const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const purple = "rgba(156, 106, 222, 1)";
const transparentAqua = "rgba(81, 193, 190, 0.65)";
const transparent = "rgba(0, 0, 0, 0)";
const tealLight = "rgba(183, 236, 236, 1)";
const orange = "rgba(220, 133, 69, 1)";

const xAxes = [
  {
    display: false,
    type: "time",
    time: {
      unit: "day"
    },
    scaleLabel: {
      display: false
    },
    ticks: {
      display: false
    },
    gridLines: {
      drawBorder: false,
      display: false
    }
  }
];

const yAxes = [
  {
    display: false,
    scaleLabel: {
      display: false
    },
    ticks: {
      display: false
    },
    gridLines: {
      drawBorder: false,
      display: false
    }
  }
];

const commonOptions = {
  labels: MONTHS,
  maintainAspectRatio: false,
  responsive: true,
  hidden: true,
  tooltips: { enabled: false },
  scales: { xAxes, yAxes },
  legend: { display: false }
};

const commonDatasetOption = {
  pointBorderWidth: 0,
  borderWidth: 1.5,
  borderCapStyle: "round",
  borderJoinStyle: "round",

  fill: false,
  pointRadius: 0,
  pointHitRadius: 10,
  lineTension: 0,
  label: ""
};

export const revenueData = {
  ...commonOptions,
  datasets: [
    {
      backgroundColor: purple,
      borderColor: purple,
      pointBorderColor: "#FFFFFF",
      pointBackgroundColor: transparent,
      scaleShowLabels: false,
      ...commonDatasetOption,
      data: [110, 115, 1105, 1127, 1240, 1355, 2460, 3590, 3605, 4707, 4320, 5400]
    }
  ]
};

export const ambassadorData = {
  ...commonOptions,
  datasets: [
    {
      backgroundColor: transparentAqua,
      borderColor: transparentAqua,
      pointBackgroundColor: transparent,
      pointBorderColor: transparent,

      ...commonDatasetOption,
      data: [10, 15, 37, 117, 140, 155, 160, 190, 205, 337, 368, 425]
    }
  ]
};

export const votingData = {
  ...commonOptions,
  labels: ["peppermint sugar", "classic pecan snowball", "fluffed nutter"],
  datasets: [
    {
      backgroundColor: [purple, orange, transparentAqua],
      borderColor: [purple, orange, transparentAqua],
      pointBackgroundColor: transparent,
      pointBorderColor: transparent,

      ...commonDatasetOption,
      data: [135, 84, 23]
    }
  ]
};

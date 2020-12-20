var ctx = document.getElementById('bubble');
var ctx_donut1 = document.getElementById('donut1');
var ctx_donut2 = document.getElementById('donut2');
var ctx_donut3 = document.getElementById('donut3');
var ctx_donut4 = document.getElementById('donut4');

Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontSize = 12;

var popData = {
  datasets: [
    {
      label: ['Deer Population'],
      data: [
        {
          x: 100,
          y: 0,
          r: 10,
        },
        {
          x: 60,
          y: 30,
          r: 20,
        },
        {
          x: 40,
          y: 60,
          r: 25,
        },
        {
          x: 80,
          y: 80,
          r: 50,
        },
        {
          x: 20,
          y: 30,
          r: 25,
        },
        {
          x: 0,
          y: 100,
          r: 5,
        },
      ],
      backgroundColor: '#FF9966',
    },
  ],
};

var data_donut = {
  datasets: [
    {
      data: [10, 20, 30],
    },
  ],

  // These labels appear in the legend and in the tooltips when hovering different arcs
  // labels: ['Red', 'Yellow', 'Blue'],
};

var DoughnutChart1 = new Chart(ctx_donut1, {
  type: 'doughnut',
  data: data_donut,
});

var DoughnutChart2 = new Chart(ctx_donut2, {
  type: 'doughnut',
  data: data_donut,
});

var DoughnutChart3 = new Chart(ctx_donut3, {
  type: 'doughnut',
  data: data_donut,
});

var DoughnutChart4 = new Chart(ctx_donut4, {
  type: 'doughnut',
  data: data_donut,
});

var bubbleChart = new Chart(ctx, {
  type: 'bubble',
  data: popData,
});

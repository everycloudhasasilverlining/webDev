Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontSize = 12;

var ctx = document.getElementById('bubble');
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
var bubbleChart = new Chart(ctx, {
  type: 'bubble',
  data: popData,
});

var ctxMarital = document.getElementById('marital');
var dataMarital = {
  labels: ['Africa', 'Asia', 'Europe', 'Latin America', 'North America'],
  datasets: [
    {
      label: 'Population (millions)',
      // backgroundColor: ['#3e95cd', '#8e5ea2', '#3cba9f', '#e8c3b9', '#c45850'],
      data: [2478, 5267, 734, 784, 433],
    },
  ],
};
var chartMarital = new Chart(ctxMarital, {
  type: 'bar',
  data: dataMarital,
});

var ctxIncome = document.getElementById('income');
var dataIncome = {
  labels: ['Africa', 'Asia', 'Europe', 'Latin America', 'North America'],
  datasets: [
    {
      label: 'Population (millions)',
      // backgroundColor: ['#3e95cd', '#8e5ea2', '#3cba9f', '#e8c3b9', '#c45850'],
      data: [2478, 784, 734, 5267, 433],
    },
  ],
};
var chartIncome = new Chart(ctxIncome, {
  type: 'bar',
  data: dataIncome,
});

var ctxCard = document.getElementById('card');
var dataCard = {
  labels: ['Africa', 'Asia', 'Europe', 'Latin America', 'North America'],
  datasets: [
    {
      label: 'Population (millions)',
      // backgroundColor: ['#3e95cd', '#8e5ea2', '#3cba9f', '#e8c3b9', '#c45850'],
      data: [2478, 784, 734, 5267, 433],
    },
  ],
};
var chartCard = new Chart(ctxCard, {
  type: 'bar',
  data: dataCard,
});

// Chart.js scripts
// -- Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';
// -- Area Chart Example
var ctx = document.getElementById("myAreaChart");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13","14", "15", "16", "17", "18", "19", "20", "21", "22", "22", "23", "24", "25","26","27","28","29","30","31"],
    datasets: [{
      label: "Radicados",
      lineTension: 0.3,
      backgroundColor: "rgba(2,117,216,0.2)",
      borderColor: "rgba(2,117,216,1)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(2,117,216,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(2,117,216,1)",
      pointHitRadius: 20,
      pointBorderWidth: 2,
      data: [700, 600, 750, 660, 540, 680, 720, 650, 702, 607, 530, 606, 705,820, 710, 750, 660, 540, 680, 458, 597, 702, 607, 530, 606, 700,788,780,589,605,751,585],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 1000,
          maxTicksLimit: 5
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
// -- Bar Chart Example
var ctx = document.getElementById("myBarChart");
var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["En reparto", "Por fijar en lista", "Por notificar", "En letra", "Autos por numerar", "Por archivar"],
    datasets: [{
      label: "Revenue",
      backgroundColor: "#fc5a5a",
      borderColor: "rgba(2,117,216,1)",
      data: [4215, 5312, 6251, 7841, 9821, 14984],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 6
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 15000,
          maxTicksLimit: 5
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
// -- Pie Chart Example
var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["En reparto", "Fijados en lista", "En notificación", "Para archivar", "En proceso"],
    datasets: [{
      data: [12.21, 15.58, 11.25, 8.32, 10.3],
      backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745', '#d754ff'],
    }],
  },
});
// -- Pie Chart Example
var ctx = document.getElementById("pieChartPrioritarios");
var pieChartPrioritarios = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Tutelas", "Derechos de petición", "Medias Cutelares"],
    datasets: [{
      data: [4, 9, 12],
      backgroundColor: ['#007bff', '#dc3545', '#ffc107'],
    }],
  },
});

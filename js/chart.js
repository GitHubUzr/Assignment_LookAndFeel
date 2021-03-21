var data = {
  datasets: [{
      data: [3.5,17,32],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(54, 162, 235, 0.2)'
    ],
  }],

  // These labels appear in the legend and in the tooltips when hovering different arcs
  labels: [
      'Fat',
      'Carbs',
      'Protein'
  ]
};

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: 'pie',
  data: data,
  options: {responsive:false},
});

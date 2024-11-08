// script.js
// slider area
$('.slide-carousel').owlCarousel({
  loop:true,
  dots:true,
  margin:false,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          nav:false
      },
      600:{
          items:1,
          nav:false
      },
      1000:{
          items:1,
          nav:false,
          loop:false
      }
  }
})
// Select the canvas element
const ctx = document.getElementById('earningsChart').getContext('2d');

// Chart data and configuration
const earningsChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Earnings',
      data: [500, 700, 800, 1000, 1200, 1500],
      borderColor: '#8c4cff',
      borderWidth: 2,
      fill: '#ddd',
      pointRadius: 0,
    }]
  },
  options: {
    responsive: false,
    maintainAspectRatio: false,
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      }
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        enabled: true
      }
    }
  }
});





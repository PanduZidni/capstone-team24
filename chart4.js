var ctx = document.getElementById('pieChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['12:00', '13:00', '18:00', '17:00', '19:00'],
        datasets: [{
            label: 'Top Peak Hours', 
            data: [6776, 6413, 5417, 5211, 4406],
            backgroundColor: [
                'rgba(255, 227, 130, 1)',
                'rgba(255, 227, 130, 1)',
                'rgba(255, 227, 130, 1',
                'rgba(255, 227, 130, 1)',
                'rgba(255, 227, 130, 1)',
                'rgba(255, 227, 130, 1)'
            ],
            borderColor: [
                'rgba(255, 227, 130, 1)',
                'rgba(255, 227, 130, 1)',
                'rgba(255, 227, 130, 1)',
                'rgba(255, 227, 130, 1)',
                'rgba(255, 227, 130, 1)',
                'rgba(255, 227, 130, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
       responsive: true
    }
});
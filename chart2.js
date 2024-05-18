var ctx = document.getElementById('doughnut').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['L', 'M', 'S', 'XL', 'XXL'],
        datasets: [{
            label: 'Sales By Size',
            data: [18956, 15635, 14403, 552, 28],
            backgroundColor: [
                'rgba(31, 212, 125, 1)',
                'rgba(31, 212, 125, 1)',
                'rgba(31, 212, 125, 1)',
                'rgba(31, 212, 125, 1)'
            ],
            borderColor: [
                'rgba(31, 212, 125, 1)',
                'rgba(31, 212, 125, 1)',
                'rgba(31, 212, 125, 1)',
                'rgba(31, 212, 125, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
       responsive: true
    }
});
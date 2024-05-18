var ctx = document.getElementById('BarChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['The Classic Deluxe Pizza', 'The Barbeque Chicken Pizza', 'The Hawaiian Pizza', 'The Pepperoni Pizza', 'The Thai Chicken Pizza'],
        datasets: [{
            label: 'Best-Seller',
            data: [2453, 2432, 2422, 2418, 2371],
            backgroundColor: [
                'rgba(39, 209, 231, 1)',
                'rgba(39, 209, 231, 1)',
                'rgba(39, 209, 231, 1)',
                'rgba(39, 209, 231, 1)',
                'rgba(39, 209, 231, 1)',
                'rgba(39, 209, 231, 1)'
            ],
            borderColor: [
                'rgba(39, 209, 231, 1)',
                'rgba(39, 209, 231, 1)',
                'rgba(39, 209, 231, 1)',
                'rgba(39, 209, 231, 1)',
                'rgba(39, 209, 231, 1)',
                'rgba(39, 209, 231, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true
    }
});
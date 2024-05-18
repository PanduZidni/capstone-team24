var ctx = document.getElementById('Bar-chart1').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['The Soppressata Pizza', 'The Spinach Supreme Pizza', 'The Calabrese Pizza', 'The Mediterranean Pizza', 'The Brie Carre Pizza'],
        datasets: [{
            label: 'Buttom Non-BestSeller',
            data: [961, 950, 937, 934, 490],
            backgroundColor: [
                'rgba(49, 57, 175, 1)',
                'rgba(49, 57, 175, 1)',
                'rgba(49, 57, 175, 1)',
                'rgba(49, 57, 175, 1)',
                'rgba(49, 57, 175, 1)',
                'rgba(49, 57, 175, 1)'
            ],
            borderColor: [
                'rgba(49, 57, 175, 1)',
                'rgba(49, 57, 175, 1)',
                'rgba(49, 57, 175, 1)',
                'rgba(49, 57, 175, 1)',
                'rgba(49, 57, 175, 1)',
                'rgba(49, 57, 175, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true
    }
});
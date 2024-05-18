var ctx = document.getElementById('lineChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Sales Growth',
            data: [0, -0.06, 0.08, -0.03, 0.04, -0.04, 0.06, -0.06, -0.06, -0.01, 0.1, -0.08,],
            backgroundColor: [
                'rgba(155, 130, 49, 1)'

            ],
            borderColor: [
                'rgb(155, 130, 49)'

            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true
    }
});
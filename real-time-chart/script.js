// Initialize the chart
const ctx = document.getElementById('realtimeChart').getContext('2d');
const maxDataPoints = 20; // Maximum number of data points to show

// Create the chart
const chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Real-time Data',
            data: [],
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.4,
            fill: false
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    color: 'rgba(0, 0, 0, 0.1)'
                }
            },
            x: {
                grid: {
                    color: 'rgba(0, 0, 0, 0.1)'
                }
            }
        },
        animation: {
            duration: 0 // Disable animation for real-time updates
        }
    }
});

// Function to generate random data
function generateData() {
    return Math.random() * 100;
}

// Function to update the chart
function updateChart() {
    const now = new Date();
    const time = now.toLocaleTimeString();
    
    // Add new data point
    chart.data.labels.push(time);
    chart.data.datasets[0].data.push(generateData());
    
    // Remove old data points if we exceed maxDataPoints
    if (chart.data.labels.length > maxDataPoints) {
        chart.data.labels.shift();
        chart.data.datasets[0].data.shift();
    }
    
    // Update the chart
    chart.update();
}

// Update the chart every second
setInterval(updateChart, 1000);

// Initial update
updateChart(); 
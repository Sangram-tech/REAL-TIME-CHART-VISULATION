# Real-time Chart Project

A simple and elegant real-time data visualization project using JavaScript and Chart.js. This project demonstrates how to create and update charts in real-time with smooth animations and responsive design.



## 🌐 Live Demo

> 💻 **[👉 Click here to run the app instantly](https://sangram-tech.github.io/Tic-Tac-Toe-Game/
)**  
> *(Replace this link with your real GitHub Pages or CodePen URL)*


## Features

- Real-time data updates every second
- Smooth line chart visualization
- Responsive design that works on all screen sizes
- Automatic data point management (shows last 20 points)
- Clean and modern UI
- Timestamp-based x-axis
- Customizable styling

## Technologies Used

- HTML5
- CSS3
- JavaScript
- [Chart.js](https://www.chartjs.org/) - For chart visualization

## Project Structure

```
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript logic
└── README.md          # Project documentation
```

## Getting Started

1. Clone or download this repository
2. Open `index.html` in your web browser
3. The chart will automatically start updating with random data

## Customization

### Changing Update Frequency
In `script.js`, modify the interval in `setInterval(updateChart, 1000)` to change how often the chart updates (value is in milliseconds).

### Modifying Data Points
To change the number of visible data points, update the `maxDataPoints` constant in `script.js`.

### Styling
The chart's appearance can be customized by modifying:
- Colors in `script.js` (borderColor, grid colors)
- Layout in `styles.css`
- Chart options in `script.js`

## Using Real Data

To use real data instead of random numbers, modify the `generateData()` function in `script.js`. You can connect it to:
- WebSocket connections
- API endpoints
- Database queries
- Sensor readings
- Any other data source

Example of connecting to a WebSocket:
```javascript
const socket = new WebSocket('your-websocket-url');
socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    // Update chart with received data
};
```

## Browser Support

This project works in all modern browsers that support ES6+ JavaScript features.

## License

This project is open source and available under the MIT License.

## Contributing

Feel free to submit issues and enhancement requests! 

import React, { Component } from "react";
import styles from "./DoughnutChart.module.css";
import Chart from "chart.js";

class Doughnut extends Component {
  chartRef = React.createRef();

  componentDidMount() {
    const ctx = this.chartRef.current.getContext("2d");

    const { labels, data } = this.props;

    new Chart(ctx, {
      type: "doughnut",
      data: {
        datasets: [
          {
            data,
            backgroundColor: [
              "rgb(255, 86, 238)",
              "rgb(78, 255, 207)",
            ],
            borderColor: "transparent",
          },
        ],

        labels,
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutoutPercentage: 80,
        title: {
          display: false,
        },
        centerText: {
          display: true,
          text: "250",
        },
      },
    });
  }
  render() {
    return (
      <canvas
        className={styles.canvas}
        id="mycanvas"
        ref={this.chartRef}></canvas>
    );
  }
}

export default Doughnut;

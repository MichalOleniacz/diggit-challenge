import React, { Component } from "react";
import Chart from "chart.js";
import styles from "./IndividualsChart.module.css";

Chart.defaults.global.defaultFontFamily = "Montserrat";
Chart.defaults.global.elements.fontColor = "#849fb4";
Chart.defaults.global.legend.display = false;
Chart.defaults.global.elements.line.tension = 0.4;
Chart.defaults.global.elements.line.borderColor =
  "transparent";

class IndividualsChart extends Component {
  state = {};
  chartRef = React.createRef();

  componentDidMount() {
    console.log("test");
    const ctx = this.chartRef.current.getContext("2d");

    const { labels, label, data } = this.props;

    const setGradient = (ctx) => {
      const gradient = ctx.createLinearGradient(
        0,
        350,
        0,
        0
      );

      gradient.addColorStop(0, `rgba(8, 164, 188, 0)`);
      gradient.addColorStop(0.1, "rgba(8, 164, 188, 0.05)");
      gradient.addColorStop(0.15, "rgba(8, 164, 188, 0.1)");
      gradient.addColorStop(0.2, "rgba(8, 164, 188, 0.15)");
      gradient.addColorStop(0.4, "rgba(8, 164, 188, 0.6)");
      gradient.addColorStop(0.6, "rgba(78, 255, 207, 1)");
      return gradient;
    };

    new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: label,
            data: data,
            backgroundColor: setGradient(ctx),
          },
        ],
      },
      options: {
        title: {
          display: true,
          position: "top",
          padding: 25,
          text: "Individuals",
          fontSize: 20,
          fontColor: "#849fb4",
          fontFamily: "Montserrat",
        },
        legend: {
          display: false,
        },
        layout: {
          padding: {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          },
        },
        hover: {
          animationDuration: 0,
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              display: false,
              categoryPercentage: 1.0,
              barPercentage: 1.0,
              ticks: {
                fontColor: "#849fb4",
                max: 60,
              },
              gridLines: {
                fontColor: "#849fb4",
                display: false,
              },
            },
          ],
          yAxes: [
            {
              display: false,
              categoryPercentage: 1.0,
              barPercentage: 1.0,
              ticks: {
                stepSize: 3,
                min: null,
                max: 12,
                // To change determing the max value of the input
                displayMin: false,
                fontColor: "#849fb4",
              },
            },
          ],
        },
        animation: {
          duration: 0,
          onComplete: function () {
            let chart = this.chart;
            let controller = chart.controller;
            let axis = controller.scales["x-axis-0"];
            let yOffset = chart.height - 30;
            axis.ticks.forEach((value, index) => {
              let xOffset = axis.getPixelForValue(value);
              chart.ctx.font =
                "12px 'Montserrat', sans-serif";
              chart.ctx.fillStyle = "#849fb4";
              chart.ctx.fillText(value, xOffset, yOffset);
            });
            //  weird
            let yAxis = controller.scales["y-axis-0"];
            yAxis.ticks.forEach((value, index) => {
              let yOffset =
                yAxis.getPixelForValue(value) + 10;
              chart.ctx.fillStyle = "#849fb4";
              chart.ctx.font = "12px 'PT Sans', sans-serif";
              chart.ctx.fillText(value, 30, yOffset);
            });
          },
        },
      },
    });
  }

  render() {
    return (
      <canvas
        className={styles.canvas}
        id="myChart"
        ref={this.chartRef}
      />
    );
  }
}
export default IndividualsChart;

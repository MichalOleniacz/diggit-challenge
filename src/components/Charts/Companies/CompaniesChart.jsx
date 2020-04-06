import React, { Component } from "react";
import Chart from "chart.js";
import styles from "./CompaniesChart.module.css";

class IndividualsChart extends Component {
  chartRef = React.createRef();

  componentDidMount() {
    const ctx = this.chartRef.current.getContext("2d");

    const { labels, label, data } = this.props;
    const setGradient = (ctx) => {
      const gradient = ctx.createLinearGradient(
        0,
        350,
        0,
        0
      );

      gradient.addColorStop(0, "rgba(62, 87, 194, 0)");
      gradient.addColorStop(0.1, "rgba(62, 87, 194, 0.05)");
      gradient.addColorStop(0.8, "rgba(255, 86, 238,1)");
      return gradient;
    };

    new Chart(ctx, {
      type: "line",
      data: {
        labels,
        datasets: [
          {
            label,
            data,
            backgroundColor: setGradient(ctx),
          },
        ],
      },
      options: {
        title: {
          display: true,
          position: "top",
          padding: 25,
          text: "Companies",
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
            let yAxis = controller.scales["y-axis-0"];

            yAxis.ticks.forEach((value, index) => {
              let yOffset =
                yAxis.getPixelForValue(value) + 10;

              chart.ctx.fillStyle = "#849fb4";
              chart.ctx.font =
                "12px Montserrat', sans-serif";
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

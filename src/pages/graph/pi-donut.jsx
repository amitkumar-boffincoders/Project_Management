import React from "react";
import ReactApexChart from "react-apexcharts";

export class Donut extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [0, 1, 80],

      color: ["#DF9500", "#e7e7e7"],

      options: {
        chart: {
          type: "donut",
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
            },
          },
        ],
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="donut"
        />
      </div>
    );
  }
}

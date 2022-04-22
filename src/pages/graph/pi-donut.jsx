import React from "react";
import ReactApexChart from "react-apexcharts";

export class Donut extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [50],

      // color: [ "#e7e7e7","#DF9500"],

      options: {
        colors: ["#DF9500"],
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
          series={[80]}
          type="donut"
        />
      </div>
    );
  }
}

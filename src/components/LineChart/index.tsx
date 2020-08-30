import React from "react";
import * as d3 from "d3";

type Props = {
  height: number;
  data: [number, number][];
};

const LineChart = ({ height, data }: Props) => {
  const width = 300;
  const walkX = d3
    .scaleLinear()
    .domain([0, 49])
    .range([10, width - 10]);

  const walkY = d3
    .scaleLinear()
    .domain([0, 4])
    .range([200 - 10, 10]);

  const line = d3
    .line()
    .x((d) => walkX(d[0]))
    .y((d) => walkY(d[1]));

  return (
    <svg width={"100%"} height={height}>
      <path
        d={line(data) || undefined}
        fill="none"
        stroke="steelblue"
        stroke-width="1.5"
        stroke-miterlimit="1"
      ></path>
    </svg>
  );
};

export default LineChart;

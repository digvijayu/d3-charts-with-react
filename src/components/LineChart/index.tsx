import React from "react";
import * as d3 from "d3";

type Props = {
  height: number;
  data: [number, number][];
};

type ChartState = {
  minMaxX: [number, number] | [undefined, undefined];
  minMaxY: [number, number] | [undefined, undefined];
  walkX: d3.ScaleLinear<number, number>;
  walkY: d3.ScaleLinear<number, number>;
  line: d3.Line<[number, number]>;
} | null;

const DEFAULT_WIDTH = 200;

const LineChart = ({ height, data }: Props) => {
  const [width, setWidth] = React.useState<number>(DEFAULT_WIDTH);

  const [chartState, setChartState] = React.useState<ChartState>(null);

  React.useEffect(() => {
    const minMaxX = d3.extent(data.map((d) => d[0]));
    const minMaxY = d3.extent(data.map((d) => d[1]));
    const walkX = d3
      .scaleLinear()
      .domain([minMaxX[0] || 0, minMaxX[1] || 0])
      .range([10, width - 10]);

    const walkY = d3
      .scaleLinear()
      .domain([minMaxY[0] || 0, minMaxY[1] || 0])
      .range([height - 10, 10]);

    const line = d3
      .line()
      .x((d) => walkX(d[0]))
      .y((d) => walkY(d[1]));

    setChartState({
      minMaxX,
      minMaxY,
      walkX,
      walkY,
      line,
    });
  }, [data, height, width]);

  const svgContainerRef = React.useCallback((node) => {
    if (node !== null) {
      setWidth(node.getBoundingClientRect().width);
    }
  }, []);

  if (chartState === null) {
    return <div>Loading...</div>;
  }

  return (
    <div ref={svgContainerRef}>
      <svg width="100%" height={height}>
        <path
          d={chartState.line(data) || undefined}
          fill="none"
          stroke="steelblue"
          strokeWidth="1.5"
          strokeMiterlimit="1"
        ></path>
      </svg>
    </div>
  );
};

export default LineChart;

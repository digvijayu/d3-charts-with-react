import React from "react";

import LineChart from "./../../components/LineChart";
import { generateWalkData } from "./data";

const NO_OF_DATA_POINTS = 5000;

const LineCharts = () => {
  const [data, setData] = React.useState(generateWalkData(NO_OF_DATA_POINTS));
  return (
    <div>
      <button onClick={() => setData(generateWalkData(NO_OF_DATA_POINTS))}>
        Reload
      </button>
      <LineChart
        height={300}
        data={data.map((data) => [data.step, data.value])}
      />
    </div>
  );
};

export default LineCharts;

import React from "react";

import LineChart from "./../../components/LineChart";
import { WALK_STAT } from "./data";

const LineCharts = () => {
  return (
    <div>
      <LineChart
        height={300}
        data={WALK_STAT.map((data) => [data.step, data.value])}
      />
    </div>
  );
};

export default LineCharts;

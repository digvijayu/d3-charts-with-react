import React from "react";

import LineChart from "src/components/LineChart";
import { generateWalkData } from "src/pages/LineCharts/data";

const NO_OF_DATA_POINTS = 500;

export default {
  title: "Welcome",
};

const Chart = () => {
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

export const toStorybook = () => <Chart />;

toStorybook.story = {
  name: "to Storybook",
};

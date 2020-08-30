import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";

import Home from "./pages/Home";
import BarCharts from "./pages/BarCharts";
import LineCharts from "./pages/LineCharts";
import NavigationPanel from "./components/NavigationPanel";

function App() {
  return (
    <Page>
      <BrowserRouter>
        <LeftPane>
          <NavigationPanel />
        </LeftPane>
        <RightPane>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/bar-charts">
              <BarCharts />
            </Route>
            <Route path="/line-charts">
              <LineCharts />
            </Route>
          </Switch>
        </RightPane>
      </BrowserRouter>
    </Page>
  );
}

export default App;

const Page = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
`;

const LeftPane = styled.div`
  width: 300px;
  background-color: #aaa;
  margin-right: 10px;
`;

const RightPane = styled.div`
  flex: 1;
`;

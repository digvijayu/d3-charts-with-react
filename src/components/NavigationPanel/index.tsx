import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavigationPanel = () => {
  return (
    <NavigationLinkList>
      <NavigationLinkContainer>
        <NavigationLink to="/">Home</NavigationLink>
      </NavigationLinkContainer>
      <NavigationLinkContainer>
        <NavigationLink to="/bar-charts">bar-charts</NavigationLink>
      </NavigationLinkContainer>
      <NavigationLinkContainer>
        <NavigationLink to="/line-charts">line-charts</NavigationLink>
      </NavigationLinkContainer>
    </NavigationLinkList>
  );
};

export default NavigationPanel;

const NavigationLinkList = styled.ul`
  display: block;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const NavigationLinkContainer = styled.li`
  color: blue;
  display: block;

  &:hover {
    background-color: blue;
    color: white;
  }
`;

const NavigationLink = styled(Link)`
  color: inherit;
  display: block;
  padding: 10px;
  margin: 10px 0px;
`;

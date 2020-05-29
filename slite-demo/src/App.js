import React from "react";
import Favorites from "./components/Favorites";
import Management from "./components/Management";
import People from "./components/People";
import Policies from "./components/Policies";
import SideBar from "./components/SideBar";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";

const MainContainer = styled.div`
  width: 95%;
  max-width: 1186px;
  height: 823px;
  margin: 48px auto;
  background: pink;
  border-radius: 10px 10px;
`;

const TopRow = styled.div`
  display: flex;
`;

const Row = styled.div`
  display: flex;
  height: 100%;
`;

const PageContent = styled.div`
  width: 75%;
  background: blue;
`;

function App() {
  return (
    <MainContainer>
      <Router>
        <TopRow>
          <p>here is the topbar</p>
        </TopRow>
        <Row>
          <SideBar />
          <Switch>
            <PageContent>
              <Route path="policies">
                <Policies />
              </Route>
              <Route path="/favorites">
                <Favorites />
              </Route>
              <Route path="/management">
                <Management />
              </Route>
              <Route path="people">
                <People />
              </Route>
            </PageContent>
          </Switch>
        </Row>
      </Router>
    </MainContainer>
  );
}

export default App;

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
  border-radius: 8px;
  background-color: red;
`;

const TopRow = styled.div`
  display: flex;
  border-bottom: 1px solid;
  border-color: grey;
`;

const Row = styled.div`
  display: flex;
  height: 93.5%;
`;

const PageContent = styled.div`
  width: 75%;
`;

function App() {
  return (
    <div>
      <MainContainer>
        <TopRow>
          <p>here is the topbar</p>
        </TopRow>
        <Router>
          <Row>
            <SideBar />
            <Switch>
              <PageContent>
                <Route path="/policies">
                  <Policies />
                </Route>
                <Route path="/management">
                  <Management />
                </Route>
                <Route path="/people">
                  <People />
                </Route>
                <Route path="/favorites">
                  <Favorites />
                </Route>
              </PageContent>
            </Switch>
          </Row>
        </Router>
      </MainContainer>
    </div>
  );
}

export default App;

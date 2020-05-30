import React from "react";
import Favorites from "./components/Favorites";
import Management from "./components/Management";
import People from "./components/People";
import Policies from "./components/Policies";
import SideBar from "./components/SideBar";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";

const BackgroundDiv = styled.div`
  background: #b0bbff;
  margin-top: 0px;
  padding: 0px;
  height: 100%
  width: 100%;
`;
const MainContainer = styled.div`
  width: 95%;
  max-width: 1186px;
  height: 823px;
  margin: 48px auto;
  border-radius: 8px;
  background: #fdfdfd;
`;

const TopRow = styled.div`
  display: flex;
  border-bottom: 2px solid #efeff1;
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
    <BackgroundDiv>
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
                <Route exact path="/favorites">
                  <Favorites />
                </Route>
                <Route path="/favorites/people-and-culture">
                  <People />
                </Route>
              </PageContent>
            </Switch>
          </Row>
        </Router>
      </MainContainer>
    </BackgroundDiv>
  );
}

export default App;

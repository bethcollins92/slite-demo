import React, { useEffect, useState } from "react";
import Favorites from "./components/Favorites";
import Management from "./components/Management";
import People from "./components/People";
import Policies from "./components/Policies";
import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";
import "./App.css";
import { Switch, Route, useLocation } from "react-router-dom";
import styled from "styled-components";

const BackgroundDiv = styled.div`
  background: #b0bbff;
  min-height: 100%;
`;

const MainContainer = styled.div`
  width: 95%;
  max-width: 1186px;
  height: 823px;
  margin: 24px auto;
  border-radius: 8px;
  background: #fdfdfd;
  box-shadow: 0 12px 16px 0 rgba(34, 34, 34, 0.16),
    0 0 8px 0 rgba(34, 34, 34, 0.1);
`;

const Row = styled.div`
  display: flex;
  height: 93.5%;
`;

const SliteLogo = styled.img`
  width: 100px;
  margin-top: 32px;
  margin-left: 48px;
`;

const PageContent = styled.div`
  width: 75%;
`;

function App() {
  const [currentPath, setCurrentPath] = useState("");

  let location = useLocation();

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location.pathname]);

  return (
    <BackgroundDiv>
      <SliteLogo
        src="https://storage.googleapis.com/slite-cdn/logos/slite/color.svg"
        alt="slite logo"
      ></SliteLogo>
      <MainContainer>
        <TopBar currentPath={currentPath} />
        <Row>
          <SideBar currentPath={currentPath} />
          <Switch>
            <PageContent>
              <Route path="/policies">
                <Policies />
              </Route>
              <Route path="/management-resources">
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
      </MainContainer>
    </BackgroundDiv>
  );
}

export default App;

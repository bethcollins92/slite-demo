import React from "react";
import * as constants from "../utils/constants";
import styled from "styled-components";

const TopBarDiv = styled.div`
  display: flex;
  border-bottom: 2px solid #efeff1;
  height: 50px;
  align-items: center;
  justify-content: space-between;
`;
const TopBarText = styled.p`
  margin-left: 10px;
  font-weight: 500;
  font-size: 16px;
  color: #46474f;
`;

const Star = styled.img`
  width: 17px;
  margin-right: 10px;
`;

const CurrentPath = styled.div`
  display: flex;
`;

export default function TopBar(props) {
  return (
    <TopBarDiv>
      <CurrentPath>
        {props.currentPath.split("/").map((path, i) => {
          if (path !== "") {
            if (i !== 1) {
              return (
                <TopBarText key={i}>
                  {" \u203A "}
                  {constants.navNames[path]}
                </TopBarText>
              );
            } else
              return (
                <TopBarText key={i}>{constants.navNames[path]}</TopBarText>
              );
          }
        })}
      </CurrentPath>
      <div>
        <Star src={require("../assets/images/i-star.png")} alt="star"></Star>
      </div>
    </TopBarDiv>
  );
}

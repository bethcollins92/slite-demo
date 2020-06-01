import React from "react";
import * as constants from "../utils/constants";
import styled from "styled-components";

const TopBarDiv = styled.div`
  display: flex;
  border-bottom: 2px solid #efeff1;
  height: 50px;
  align-items: center;
`;
const TopBarText = styled.p`
  margin-left: 10px;
  font-weight: 500;
  font-size: 16px;
  color: #46474f;
`;

const Star = styled.img`
  width: 17px;
`;

export default function TopBar(props) {
  console.log(props.currentPath.split("/"));
  return (
    <TopBarDiv>
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
            return <TopBarText key={i}>{constants.navNames[path]}</TopBarText>;
        }
      })}
      <Star
        src="https://upload.wikimedia.org/wikipedia/commons/2/29/Gold_Star.svg"
        alt="star"
      ></Star>
    </TopBarDiv>
  );
}
//" \u203A "

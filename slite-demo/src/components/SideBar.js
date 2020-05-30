import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SideBarStyle = styled.div`
  width: 25%;
  background: yellow;
  max-height: 100%;
  border-right: 1px solid;
  border-color: grey;
  border-radius: 8px;
`;

const SideBarList = styled.li`
  list-style: none;
  font-size: 14px;
  padding: 4px 4px;
  background: pink;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  line-height: 25px;
`;

const DropDown = styled.div`
  width: 100%;
  line-height: 25px;
  border-radius: 4px;
  background-color: #f5f5f7;
  display: flex;
  justify-content: space-between;
`;

const DropDownText = styled(Link)``;
const DropDownArrow = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export default class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [
        { name: "📚Policies", route: "/policies", id: 1 },
        { name: "📖Management resources", route: "/management", id: 2 },
      ],
      shown: false,
    };
  }

  handleClick() {
    this.state.shown
      ? this.setState({
          shown: false,
        })
      : this.setState({
          shown: true,
        });
  }

  render() {
    return (
      <SideBarStyle>
        <DropDown onClick={() => this.handleClick()}>
          <DropDownText>⭐Favorites</DropDownText>
          <DropDownArrow>
            {this.state.shown ? "\u203A" : "\u203A"}
          </DropDownArrow>
        </DropDown>
        {this.state.shown && (
          <StyledLink to="/people">🏅People and Culture</StyledLink>
        )}
        {this.state.links.map((link) => {
          return (
            <SideBarList key={link.id}>
              <StyledLink to={link.route}>{link.name}</StyledLink>
            </SideBarList>
          );
        })}
      </SideBarStyle>
    );
  }
}

//onlick on arrow
//dropdown flex and space between
//arrow pointing down and sideways

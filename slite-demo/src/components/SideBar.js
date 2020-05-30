import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SideBarStyle = styled.div`
  width: 25%;
  max-height: 100%;
  border-right: 2px solid #efeff1;
`;

const SideBarList = styled.li`
  list-style: none;
  padding: 4px 4px 4px 0;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  line-height: 25px;
  font-size: 14px;
  color: #46474f;
  margin-left: 8px;
`;

const NestedLink = styled(StyledLink)`
  color: #fdfdfd;
`;

const DropDown = styled.div`
  width: 95%;
  line-height: 25px;
  border-radius: 4px;
  background-color: #f5f5f7;
  display: flex;
  justify-content: space-between;
  margin: 4px;
  align-items: center;
  padding: 4px;
`;

const NestedLinkDiv = styled(DropDown)`
  background: #5168ec;
  color: #fdfdfd;
  margin-left: 12px;
  width: 90%;
`;

const DropDownArrow = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 24px;
  color: grey;
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
        <DropDown>
          <StyledLink to="/favorites">
            <span role="img" aria-label="star">
              ⭐
            </span>
            Favorites
          </StyledLink>
          <DropDownArrow onClick={() => this.handleClick()}>
            {this.state.shown ? "\u203A" : "\u203A"}
          </DropDownArrow>
        </DropDown>

        {this.state.shown && (
          <NestedLinkDiv>
            <NestedLink to="/favorites/people-and-culture">
              <span role="img" aria-label="medal">
                🏅
              </span>
              People and Culture
            </NestedLink>
          </NestedLinkDiv>
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

import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SideBarStyle = styled.div`
  width: 25%;
  background: yellow;
  height: 100%;
  border-right: 1px solid;
  border-color: grey;
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
  margin: 0
  pading-top: 10px;
  border-radius: 4px;
  background-color: #f5f5f7;

`;

export default class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [
        { name: "🏅People and Culture", route: "/people", id: 1 },
        { name: "📚Policies", route: "/policies", id: 2 },
        { name: "📖Management resources", route: "/management", id: 3 },
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
        <DropDown onClick={() => this.handleClick()}>Favorites</DropDown>
        {this.state.links.map((link) => {
          return (
            <SideBarList key={link.id}>
              <StyledLink className="sidebar-links" to={link.route}>
                {link.name}
              </StyledLink>
            </SideBarList>
          );
        })}
      </SideBarStyle>
    );
  }
}

import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SideBarStyle = styled.div`
  width: 25%;
  background: red;
  height: 100%;
`;

export default class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [
        { name: "⭐Favorties", route: "/favorites" },
        { name: "🏅People and Culture", route: "/people" },
        { name: "📚Policies", route: "/policies" },
        { name: "📖Management resources", route: "/management" },
      ],
    };
  }

  render() {
    return (
      <SideBarStyle>
        {this.state.links.map((link) => {
          return (
            <li>
              <Link to={link.route}>{link.name}</Link>
            </li>
          );
        })}
      </SideBarStyle>
    );
  }
}

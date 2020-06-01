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
`;

const StyledLink = styled(Link)`
  color: ${(props) => (props.selected ? "#fdfdfd" : "#46474f")};
  text-decoration: none;
  line-height: 25px;
  font-size: 14px
  font-weight: 500;
`;

const HeaderDiv = styled.div`
  background: ${(props) => (props.selected ? "#5168ec" : "#f5f5f7")};
  width: 95%;
  line-height: 25px;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  margin: 4px;
  align-items: center;
  padding: 4px;
`;

const HeaderLink = styled(StyledLink)`
  color: ${(props) => (props.selected ? "#fdfdfd" : "#46474f")};
  margin-left: 4px;
`;

const NestedLinkDiv = styled(HeaderDiv)`
  background: ${(props) => (props.selected ? "#5168ec" : "#fdfdfd")};
  color: #fdfdfd;
  margin-left: 24px;
  width: 83%;
  padding: 6px;
`;

const ListDiv = styled(HeaderDiv)`
  background: ${(props) => (props.selected ? "#5168ec" : "#fdfdfd")};
  padding: 6px;
  width: 93%;
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
        { name: "📚 Policies", route: "/policies", id: 1 },
        {
          name: "📖 Management resources",
          route: "/management-resources",
          id: 2,
        },
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
        <HeaderDiv selected={this.props.currentPath === "/favorites"}>
          <HeaderLink
            selected={this.props.currentPath === "/favorites"}
            to="/favorites"
          >
            <span role="img" aria-label="star">
              ⭐
            </span>
            <span> </span>
            Favorites
          </HeaderLink>
          <DropDownArrow onClick={() => this.handleClick()}>
            {this.state.shown ? "\u2304" : "\u203A"}
          </DropDownArrow>
        </HeaderDiv>

        {this.state.shown && (
          <NestedLinkDiv
            selected={
              this.props.currentPath === "/favorites/people-and-culture"
            }
          >
            <StyledLink
              selected={
                this.props.currentPath === "/favorites/people-and-culture"
              }
              to="/favorites/people-and-culture"
            >
              <span role="img" aria-label="medal">
                🏅
              </span>
              People and culture
            </StyledLink>
          </NestedLinkDiv>
        )}

        {this.state.links.map((link) => {
          return (
            <SideBarList key={link.id}>
              <ListDiv selected={this.props.currentPath === link.route}>
                <StyledLink
                  selected={this.props.currentPath === link.route}
                  to={link.route}
                >
                  {link.name}
                </StyledLink>
              </ListDiv>
            </SideBarList>
          );
        })}
      </SideBarStyle>
    );
  }
}

import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 90%;
  max-width: 600px;
  margin: 60px auto;
`;

const Title = styled.h1`
  font-size: 46px;
  line-height: 55px;
  color: #46474f;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  line-height: 25px;
  font-size: 16px;
  font-weight: 500;
  color: #46474f;

  &:hover {
    color: gray;
  }
`;

export default class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [
        { name: "🏅 People and culture", route: "/people-and-culture", id: 1 },
      ],
    };
  }
  render() {
    return (
      <Container>
        <Title>Favorites</Title>
        <div>
          {this.state.links.map((link) => {
            return <StyledLink to={link.route}>{link.name}</StyledLink>;
          })}
        </div>
      </Container>
    );
  }
}

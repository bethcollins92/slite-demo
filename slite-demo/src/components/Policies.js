import React, { Component } from "react";
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

const TextBox = styled.div`
  padding: 10px;
  background-color: #edf1ff;
  border-radius: 4px;
  border-left: 8px solid;
  border-color: #5168ec;
  font-size 16px;
  margin-bottom: 12px;
`;

const Text = styled.p`
  color: #46474f;
  font-size: 16px;
  line-height: 26px;
`;

const PolicyListDiv = styled.div`
  padding: 2px 4px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
`;

const PolicyList = styled.h3`
  font-size: 18px;
  color: #46474f;
`;

export default class Policies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textBox:
        "Here you’ll find all the information you need about our policies.",
      policies: [
        "🎁 Benefits",
        "🌴 Vacation and sick leave",
        "📜 Code of conduct",
      ],
    };
  }

  render() {
    return (
      <Container>
        <Title>Policies</Title>
        <TextBox>
          <Text>{this.state.textBox}</Text>
        </TextBox>
        <PolicyListDiv>
          {this.state.policies.map((link, i) => {
            return <PolicyList key={i}>{link}</PolicyList>;
          })}
        </PolicyListDiv>
      </Container>
    );
  }
}

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

const NotelinkDiv = styled.div`
  padding: 2px 4px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
`;

const NoteLink = styled.div`
  background-color: #edf1ff;
  border-radius: 4px;
  width: fit-content;
  line-height: 25px;
  margin: 16px 0px 0px 0px;
  padding: 4px;
  color: #5168ec;
  font-weight: 500;
`;

export default class People extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textBox:
        "Here you’ll find all the important information related to our internal culture. You can read about our story, learn about our values, and get the full overview of the tools we use.",
      noteLinks: ["Our culture", "Values", "Tips & tricks"],
    };
  }
  render() {
    return (
      <Container>
        <Title>People & Culture</Title>
        <TextBox>
          <Text>{this.state.textBox}</Text>
        </TextBox>
        <NotelinkDiv>
          {this.state.noteLinks.map((link, i) => {
            return <NoteLink key={i}>{link}</NoteLink>;
          })}
        </NotelinkDiv>
      </Container>
    );
  }
}

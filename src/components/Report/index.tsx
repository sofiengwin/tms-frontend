import React from "react";
import styled from "styled-components";

const Report: React.FC = () => {
  return (
    <Container>
      <List>
        <Ul>
          {[
            "white",
            "blue",
            "yellow",
            "green",
            "teal",
            "linen",
            "coral",
            "coral",
            "coral",
            "coral",
            "coral",
          ].map((a: string) => (
            <Li color={a}>
              <span>{a}</span>
              <p></p>
            </Li>
          ))}
        </Ul>
      </List>
    </Container>
  );
};

export default Report;

export const Container = styled.div`
  padding: 5% 10%;
`;
export const List = styled.div`
  display: grid;
  grid-template-columns: 95% 5%;
`;
export const Ul = styled.ul`
  list-style: none;
`;
export const Li = styled.li`
  width: 100%;
  background: rgba(2, 2, 2, 0.5);
  padding: 1em 2em;
  margin-bottom: 1em;
  color: white;
  border-radius: 0.25em;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    width: 5em;
    height: 2em;
    border-radius: 0.3rem;
    background: ${(props) => (props.color ? props.color : "")};
  }
`;
export const LiColor = styled.li`
  width: 100%;
  background: ${(props) => (props.color ? props.color : "")};
  padding: 1.6em;
  margin-bottom: 1em;
  color: white;
  border-radius: 0.25em;
`;
export const Colors = styled.li``;

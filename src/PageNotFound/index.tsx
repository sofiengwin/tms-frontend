import React from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const PageNotFound = () => {
  const history = useHistory();
  return (
    <Container>
      <Image>
        <img src='./404.PNG' alt='page not found' />
      </Image>
      <ButtonStyle variant='info' onClick={() => history.push("/")}>
        Go Back Home
      </ButtonStyle>
    </Container>
  );
};

export default PageNotFound;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  flex-direction: column;
  /* background: #e3e6e7; */
  h1 {
    font-size: 5em;
    color: #888;
  }
`;

const Image = styled.div`
  width: 100%;

  img {
    width: 80%;
    display: block;
    margin: auto;
  }
`;

const ButtonStyle = styled(Button)`
  margin-top: 2em;
`;

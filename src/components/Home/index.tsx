import * as React from "react";
import { Link } from "react-router-dom";
import { Container, Land, Blue, Red, Green, H1, H2 } from "./styled";
import Button from "react-bootstrap/Button";

const Home: React.FC = () => {
  return (
    <Container>
      <Land>
        <Blue></Blue>
        <Red>
          <H1>Bayelsa State</H1>
        </Red>
        <Green>
          <H2>Revenue Collection System</H2>
        </Green>
      </Land>
      <Button
        variant='primary'
        size='lg'
        style={{
          color: "white",
          marginTop: "5em",
          width: "50%",
          marginRight: "auto",
          marginLeft: "auto",
        }}
      >
        <Link to='collect-payment' style={{ color: "white", marginTop: "5em" }}>
          Collect Payment
        </Link>
      </Button>
    </Container>
  );
};

export default Home;

import * as React from "react";
import { Link } from "react-router-dom";
import { Container } from "./styled";
import Button from "react-bootstrap/Button";

const Home: React.FC = () => {
  return (
    <Container>
      <Button variant='primary' size='lg' block>
        <Link to='collect-payment' style={{ color: "white" }}>
          Collect Payment
        </Link>
      </Button>
      <Button variant='primary' size='lg' block>
        <Link to='report' style={{ color: "white" }}>
          New Report
        </Link>
      </Button>
      <Button variant='primary' size='lg' block>
        <Link to='defaulter' style={{ color: "white" }}>
          Defaulter Report
        </Link>
      </Button>
    </Container>
  );
};

export default Home;

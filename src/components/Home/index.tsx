import * as React from "react";
import { Container, Button } from "./styled";

const Home: React.FC = () => {
  return (
    <Container>
      <Button>Collect Payment</Button>
      <Button>New Report</Button>
    </Container>
  );
};

export default Home;

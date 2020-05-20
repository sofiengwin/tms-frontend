import * as React from "react";
import {Link} from 'react-router-dom';
import { Container, Button } from "./styled";

const Home: React.FC = () => {
  return (
    <Container>
      <Button><Link to="collect-payment">Collect Payment</Link></Button>
      <Button><Link to="report">New Report</Link></Button>
    </Container>
  );
};

export default Home;

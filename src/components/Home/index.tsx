import * as React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import {Center} from '../ui/Center';

const Home: React.FC = () => {
  return (
    <Center>
      <Button
        variant='primary'
        size='lg'
        style={{
          color: "white",
          marginTop: "5em",
          marginRight: "auto",
          marginLeft: "auto",
        }}
      >
        <Link to='collect-payment' style={{ color: "white", marginTop: "5em" }}>
          Collect Payment
        </Link>
      </Button>
    </Center>
  );
};

export default Home;

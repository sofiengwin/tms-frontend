import React from "react";
import styled from "styled-components";
import { Card } from "react-bootstrap";

const CardUi = ({
  content: { amount, title },
}: {
  content: {
    amount: string;
    title: string;
  };
}) => {
  return (
    <Card style={{ marginBottom: "1rem", marginTop: "3rem" }}>
      <CardBody>
        <Card.Text>{title} Total</Card.Text>
        <Card.Text>
          <span>&#8358;</span> {amount}
        </Card.Text>
      </CardBody>
    </Card>
  );
};

export default CardUi;

const CardBody = styled(Card.Body)`
  padding: 0.5em;
`;

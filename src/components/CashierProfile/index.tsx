import React from "react";
import styled from "styled-components";
import Charted from "./Chart";
import CardUi from "../ui/Card";

const cardContents = [
  { title: "Yearly", amount: "1,000,000" },
  { title: "Monthly", amount: "100,000" },
  { title: "Daily", amount: "10,000" },
];

const CashierProfile = () => {
  return (
    <Container>
      <H1>Cashier Profile</H1>
      <Charted />
      <Grid>
        {cardContents.map((content) => (
          <CardUi content={content} />
        ))}
      </Grid>
      <Profile>
        <p>Name: John Doe</p>
        <p>Email Address: johnd@example.com</p>
        <p>Location: Akenfa</p>
      </Profile>
    </Container>
  );
};

export default CashierProfile;

const Container = styled.div`
  width: 100%;
  padding: 0 10%;

  @media (max-width: 769px) {
    padding: 0 1em;
  }
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1em;
`;
const Profile = styled.div`
  border: 1px solid #999;
  padding: 1em;
  margin-top: 2em;
`;
const H1 = styled.h1`
  text-align: center;
  padding: 0 0 1em 0;
`;

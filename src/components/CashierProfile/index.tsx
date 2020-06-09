import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Charted from "./Chart";
import CardUi from "../ui/Card";
import { AuthContext } from "../context/AuthContext";
import { useParams } from "react-router-dom";
import Spinner from '../ui/Spinner';


const CashierProfile = () => {
  const [stats, setStats] = useState<any>({})
  const {appService} = useContext(AuthContext)
  const {cashierId} = useParams();

  useEffect(() => {
    const fetchStats = async () => {
      const sts = await appService.fetchPaymentStats(cashierId)
      console.log({sts})
      setStats(sts)
    }

    fetchStats();
  }, []);

  const cardContents = [
    { title: "Yearly", amount: stats.yearlyTotal },
    { title: "Monthly", amount: stats.monthlyTotal},
    { title: "Daily", amount: stats.today },
  ];

  const {cashier} = stats;
  console.log({stats})

  return (
    <>
      {appService.isLoading ? (
        <Spinner />
      ) : (
        <Container>
          <H1>Cashier Profile</H1>
          {stats.dailyTotals && <Charted dailyTotals={stats.dailyTotals}/>}
          {stats.yearlyTotal && <Grid>
            {cardContents.map((content, index) => (
              <CardUi key={index} content={content} />
            ))}
          </Grid>}
          {cashier && <Profile>
            <p>Name: {cashier.name}</p>
            <p>Email Address: {cashier.email}</p>
            <p>Location: {cashier.areaOfOperation}</p>
          </Profile>}
        </Container>
      )}
    </>
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

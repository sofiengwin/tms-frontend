import React, { useContext, useEffect, useState } from "react";
import {observer} from 'mobx-react';
import styled from "styled-components";
import Charted from "../CashierProfile/Chart";
import CardUi from "../ui/Card";
import { AuthContext } from "../context/AuthContext";
import CenterSpinner from "../ui/Spinner";


const PaymentStats: React.FC<any> = () => {
  const [stats, setStats] = useState<any>({})
  const {appService} = useContext(AuthContext)

  useEffect(() => {
    const fetchStats = async () => {
      const sts = await appService.fetchPaymentStats(undefined)
      setStats(sts)
    }

    fetchStats();

    // eslint-disable-next-line
  }, []);

  

  const cardContents = [
    { title: "Yearly", amount: stats.yearlyTotal },
    { title: "Monthly", amount: stats.monthlyTotal},
    { title: "Daily", amount: stats.today },
  ];

  return (
    <>
      {appService.isLoading ? (
        <CenterSpinner />
      ) : (
        <Container>
          <H1>Payment Stats</H1>
          {stats.dailyTotals && <Charted dailyTotals={stats.dailyTotals}/>}
          {stats.yearlyTotal && <Grid>
            {cardContents.map((content, index) => (
              <CardUi key={index} content={content} />
            ))}
          </Grid>}
        </Container>
      )}
    </>
  );
};

export default observer(PaymentStats);

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

const H1 = styled.h1`
  text-align: center;
  padding: 0 0 1em 0;
`;
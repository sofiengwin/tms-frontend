import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Charted from "../CashierProfile/Chart";
import CardUi from "../ui/Card";
import { AuthContext } from "../context/AuthContext";
import WithLoader from '../WithLoader';

interface Props {
  setLoading: (state: string) => void;
}

const PaymentStats: React.FC<Props> = ({setLoading}) => {
  const [stats, setStats] = useState<any>({})
  const {appService} = useContext(AuthContext)

  useEffect(() => {
    const fetchStats = async () => {
      const sts = await appService.fetchPaymentStats(undefined)
      console.log({sts})
      setLoading('loaded')
      setStats(sts)
    }

    fetchStats();
  }, []);

  const cardContents = [
    { title: "Yearly", amount: stats.yearlyTotal },
    { title: "Monthly", amount: stats.monthlyTotal},
    { title: "Daily", amount: stats.today },
  ];

  return (
    <>
      <Container>
        <H1>Payment Stats</H1>
        {stats.dailyTotals && <Charted dailyTotals={stats.dailyTotals}/>}
        {stats.yearlyTotal && <Grid>
          {cardContents.map((content, index) => (
            <CardUi key={index} content={content} />
          ))}
        </Grid>}
      </Container>
    </>
  );
};

export default WithLoader(PaymentStats);

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
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Report from "./ReportCard";
import { AuthContext } from "../context/AuthContext";
import { IPayment } from "../../data/models/Payment";
import { Spinner } from "react-bootstrap";
import { Center } from "../ui/Center";
import { observer } from "mobx-react";

const Reports: React.FC = () => {
  const { appService } = useContext(AuthContext);
  const [payments, setPayments] = useState<IPayment[]>([]);

  const fetchPayments = async () => {
    console.log(appService.isLoading);
    const pyts = await appService.fetchPayments();
    console.log({ pyts });

    setPayments(pyts);
  };

  useEffect(() => {
    fetchPayments();
  }, []);
  console.log({ appService }, appService.isLoading);
  return (
    <Container>
      {appService.isLoading ? (
        <Center>
          <Spinner
            animation='border'
            variant='primary'
            style={{ width: "150px", height: "150px" }}
          />
        </Center>
      ) : (
        <Report title='Today Report' data={payments} />
      )}
    </Container>
  );
};

export default observer(Reports);

export const Container = styled.div`
  padding: 5% 10%;
  width: 100%;

  @media (max-width: 769px) {
    padding: 5% 0.5em;
  }
`;

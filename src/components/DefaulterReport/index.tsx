import React from "react";
import styled from "styled-components";
import Report from "../Report/ReportCard";
import { reports } from "../Report/data";

interface ReportInterface {
  id: number;
  name: string;
  color: string;
}

const index: React.FC = () => {
  return (
    <Container>
      <Report title='Defaulters Report' data={reports} />
    </Container>
  );
};

export default index;

export const Container = styled.div`
  padding: 5% 10%;
  width: 100%;

  @media (max-width: 769px) {
    padding: 5% 0;
  }
`;

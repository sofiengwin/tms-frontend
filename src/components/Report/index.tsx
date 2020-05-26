import React from "react";
import styled from "styled-components";
import Report from "./ReportCard";
import { reports } from "./data";

interface ReportInterface {
  id: number;
  name: string;
  color: string;
}

const index: React.FC = () => {
  return (
    <Container>
      <Report title='Today Report' data={reports} />
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

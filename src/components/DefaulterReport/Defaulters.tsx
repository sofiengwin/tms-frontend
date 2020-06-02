import React from "react";
import styled from "styled-components";
import Report from "./DefaultersReport";
import { ICreateDriver } from "../../data/models/Driver";

interface Props {
  defaulters: Dict<ICreateDriver[]>
}

const Defaulters: React.FC<Props> = ({defaulters}) => {
  return (
    <Container>
      {Object.keys(defaulters).map((day, index) => {
        return <Report key={index} title={day.toUpperCase()} data={defaulters[day]} />
      })}
    </Container>
  );
};

export default Defaulters;

export const Container = styled.div`
  padding: 5% 10%;
  width: 100%;

  @media (max-width: 769px) {
    padding: 5% 0;
  }
`;
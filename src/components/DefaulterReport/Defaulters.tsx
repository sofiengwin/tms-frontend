import React from "react";
import styled from "styled-components";
import Report from "./DefaultersReport";
import { ICreateDriver } from "../../data/models/Driver";

interface Props {
  defaulters: Dict<ICreateDriver[]>;
  state: string;
}

const Defaulters: React.FC<Props> = ({ defaulters, state }) => {
  let newState = state !== undefined ? state : "";

  return (
    <Container>
      <Report title={newState.toUpperCase()} data={defaulters[newState]} />
      {/* {Object.keys(defaulters).map((day, index) => {
        return (
          <Report
            key={index}
            title={day.toUpperCase()}
            data={defaulters[day]}
          />
        );
      })} */}
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

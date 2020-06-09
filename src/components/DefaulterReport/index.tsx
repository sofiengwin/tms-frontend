import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";
import Defaulters from "./Defaulters";
import Spinner from "../ui/Spinner";
import { observer } from "mobx-react";
import {Center} from '../ui/Center';

const options = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
];

const DefaultReport: React.FC = () => {
  const { appService } = useContext(AuthContext);
  const [defaulters, setDefaulters] = useState({});
  const [state, setState] = useState<string>("monday");

  useEffect(() => {
    const fetchDefaulters = async () => {
      const dfts = await appService.fetchDefaulters();

      console.log({ dfts });

      if (dfts) {
        setDefaulters(dfts);
      }
    };

    fetchDefaulters();

    // eslint-disable-next-line
  }, []);

  const handleChange = ({ target: { value } }: any) => {
    setState(value);
  };
  return (
    <Container>
      {appService.isLoading ? (
        <Spinner />
      ) : (
        <Center style={{flexDirection: 'column'}}>
        <div style={{ padding: "0 1em" }}>
          <SelectStyle onChange={handleChange}>
            {options.map((text: string) => (
              <option value={text}>{text}</option>
            ))}
          </SelectStyle>
        </div>
        <Defaulters defaulters={defaulters} state={state} />
        </Center>
      )}
    </Container>
  );
};

export default observer(DefaultReport);

export const Container = styled.div`
  padding: 5% 10%;
  width: 100%;

  @media (max-width: 769px) {
    padding: 5% 0;
  }
`;

const SelectStyle = styled.select`
  width: 250px;
  padding: 0.5em;
  border-radius: 0.3em;
`;

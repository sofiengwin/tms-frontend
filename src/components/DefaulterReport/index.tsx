import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Report from "../Report/ReportCard";
import { reports } from "../Report/data";
import { AuthContext } from "../context/AuthContext";
import Defaulters from './Defaulters';
import Spinner from '../ui/Spinner';
import { observer } from "mobx-react";

const DefaultReport: React.FC = () => {
  const {appService} = useContext(AuthContext);
  const [defaulters, setDefaulters] = useState({})

  useEffect(() => {
    const fetchDefaulters = async () => {
      const dfts = await appService.fetchDefaulters()

      console.log({dfts});
      setDefaulters(dfts);
    }

    fetchDefaulters();
  }, []);

  return (
    <>
      {appService.isLoading ? <Spinner /> : <Defaulters defaulters={defaulters} />}
    </>
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

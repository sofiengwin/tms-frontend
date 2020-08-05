import React, { useContext, useState, useEffect } from "react";
import ListDrivers from './ListDrivers';
import { AuthContext } from "../context/AuthContext";
import { ICreateDriver } from "../../data/models/Driver";
import Spinner from '../ui/Spinner';

const QrImages = () => {
  const {appService} = useContext(AuthContext);
  const [drivers, setDrivers] = useState<ICreateDriver[]>([]);

  useEffect(() => {
    const fetchDrivers = async () => {
        const drvs = await appService.fetchDrivers();
        console.log({drvs})
        if (drvs) {
          setDrivers(drvs)
        }
    }

    fetchDrivers();

    // eslint-disable-next-line
  }, []);

  return (
    <>
      {appService.isLoading ? <Spinner /> : <ListDrivers drivers={drivers} />}
    </>
  );
};

export default QrImages;

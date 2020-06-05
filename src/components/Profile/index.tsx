import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import Spinner from "../ui/Spinner";
import Profile from "./Profile";
import { observer } from "mobx-react";
import { useParams, useHistory } from "react-router-dom";
import { DriverType } from "../../data/graphql/fetchDriver";
import ErrorModal from "../ui/ErrorModal";

const DriverProfile = () => {
  const { appService } = useContext(AuthContext);
  const [driver, setDriver] = useState<Partial<DriverType>>({});
  const [errors, setErrors] = useState<string[]>([]);
  const { driverId } = useParams();
  const history = useHistory();

  useEffect(() => {
    const fetchProfile = async () => {
      if (!driverId) {
        setErrors(["Must provide driver ID"]);

        return;
      }

      const driver = await appService.fetchDriver(Number(driverId));

      if (!driver) {
        setErrors(["Driver not found! Invalid driver ID"]);

        return;
      }

      setDriver(driver);
    };

    fetchProfile();

    // eslint-disable-next-line
  }, []);

  return (
    <>
      <ErrorModal
        show={errors.length > 0}
        errorMessages={errors}
        onClose={() => {
          setErrors([]);
          history.push("/");
        }}
      />
      {appService.isLoading ? <Spinner /> : <Profile driver={driver} />}
    </>
  );
};

export default observer(DriverProfile);

import * as React from "react";
import Scanner from "./Scanner";
import Payment from "./Payment";

const CollectPayment = () => {
  const [data, setData] = React.useState("1::1");

  const onScan = (data: string) => {
    if (data) {
      setData(data);
    }
  };

  return (
    <>
      {data.length ? (
        <Payment data={data} scanAnother={() => setData("")} />
      ) : (
        <Scanner onScan={onScan} />
      )}
    </>
  );
};

export default CollectPayment;

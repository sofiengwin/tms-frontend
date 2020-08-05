import * as React from "react";
import Scanner from "./Scanner";
import Payment from "./Payment";
import { useParams } from "react-router-dom";

const CollectPayment = () => {
  const [data, setData] = React.useState("");
  const { defaultedAt } = useParams();

  // console.log({ defaultedAt });

  const onScan = (data: string) => {
    if (data) {
      setData(data);
    }
  };

  return (
    <>
      {data.length ? (
        <Payment
          data={data}
          scanAnother={() => setData("")}
          defaultedAt={defaultedAt}
        />
      ) : (
        <Scanner onScan={onScan} defaultedAt={defaultedAt} />
      )}
    </>
  );
};

export default CollectPayment;

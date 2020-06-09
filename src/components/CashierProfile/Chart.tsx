import React, { useState } from "react";
import { Bar } from "react-chartjs-2";

interface Props {
  dailyTotals: {date: string, amount: number}[];
}

const Charted: React.FC<Props> = ({dailyTotals}) => {
  const dd = dailyTotals.map((d) => d.amount)
  console.log({dailyTotals, dd})
  const [chartData] = useState({
    labels: dailyTotals.map((d) => d.date),
    datasets: [
      {
        label: "Date",
        data: dailyTotals.map((d) => d.amount),
        backgroundColor: [
          `${"violet"}`,
          `${"violet"}`,
          `${"violet"}`,
          `${"violet"}`,
          `${"violet"}`,
          `${"violet"}`,
          `${"violet"}`,
        ],
      },
    ],
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        height: "13.1875em",
      }}
    >
      <Bar
        data={chartData}
        options={{
          maintainAspectRatio: false,
          responsive: true,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
            xAxes: [
              {
                gridLines: {
                  display: false,
                },
                barThickness: 20,
              },
            ],
          },
        }}
      ></Bar>
    </div>
  );
};

export default Charted;

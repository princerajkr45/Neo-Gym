import React from "react";
import PieChart from "../Dashboard/PieChart";
import Expense from "../Dashboard/Expense";
import ChartConfig from "../Dashboard/ChartConfig";

export default function Charts() {
  return (
    <>
      <ChartConfig />

      <Expense />

      <PieChart />
    </>
  );
}

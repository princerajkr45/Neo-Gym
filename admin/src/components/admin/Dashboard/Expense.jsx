import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import Chart from "react-apexcharts";
import { FaChartBar } from "react-icons/fa";

export default function Expense() {
  const ExpenseChartConfig = {
    type: "bar",
    height: 240,
    series: [
      {
        name: "Total Amount",
        data: [1000, 2080],
      },
    ],
    options: {
      chart: {
        toolbar: {
          show: true,
        },
      },
      title: {
        text: "Total Amount",
        align: "center",
        style: {
          fontSize: "16px",
          fontWeight: "bold",
          color: "#000",
        },
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#020617"],
      plotOptions: {
        bar: {
          horizontal: true,
          columnWidth: "40%",
          borderRadius: 2,
        },
      },
      xaxis: {
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        labels: {
          style: {
            colors: "#616161",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
        categories: ["Earnings", "Expenses"],
      },
      yaxis: {
        labels: {
          style: {
            colors: "#616161",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
        title: {
          text: "terms",
          offsetX: 10,
          style: {
            colors: "#616161",
            fontSize: "18px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
      },

      fill: {
        opacity: 0.8,
      },
      tooltip: {
        theme: "dark",
      },
    },
  };
  return (
    <>
      {/* Earnings & expenses Reports */}
      <section className="border p-2">
        <div className="flex items-center gap-1 border py-1 px-1 ">
          <FaChartBar className="h-5 w-5" />
          <h1 className="border-l p-1">Earnings & expenses Reports</h1>
        </div>
        <Card className="rounded-b-xl rounded-t-none">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="flex flex-col gap-4  md:flex-row md:items-center"
          ></CardHeader>
          <CardBody className="px-2 pb-0">
            <Chart {...ExpenseChartConfig} />
          </CardBody>
        </Card>
      </section>
    </>
  );
}

import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import Chart from "react-apexcharts";
import { FaChartPie } from "react-icons/fa";

export default function PieChart() {
  const pieChartMemberConfig = {
    type: "pie",
    width: 280,
    height: 280,
    series: [60, 40],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },

      dataLabels: {
        enabled: false,
      },
      colors: ["#1e88e5", "#ff8f00"],
      legend: {
        show: true,
        position: "right",
        markers: {
          width: 10,
          height: 10,
        },
        labels: {
          colors: "#616161",
        },
      },
      tooltip: {
        y: {
          formatter: (value) => `${value} people`,
        },
      },
      labels: ["Male", "Female"],
    },
  };

  const pieChartStaffConfig = {
    type: "pie",
    width: 280,
    height: 280,
    series: [50, 25, 25],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },

      dataLabels: {
        enabled: false,
      },
      colors: ["#1e88e5", "#ff8f00", "#ff9f00"],
      legend: {
        show: true,
        position: "right",

        markers: {
          width: 10,
          height: 10,
        },
        labels: {
          colors: "#616161",
          formatter: function (value, opts) {
            // Custom legend names based on series index
            const seriesNames = ["Manager", "Staff", "Trainer"];
            return seriesNames[opts.seriesIndex];
          },
        },
      },
      tooltip: {
        y: {
          formatter: (value) => `${value} people`,
        },
      },
      labels: ["Manager", "Staff", "Trainer"],
    },
  };
  return (
    <>
      <section className="flex justify-around gap-10 p-2">
        <div className=" w-full">
          <div className="flex items-center gap-1 border py-1 px-1 ">
            <FaChartPie className="h-5 w-5" />
            <h1 className="border-l p-1">
              Registered Gym Members by Gender: Overview
            </h1>
          </div>
          <Card className="rounded-b-xl rounded-t-none">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
            ></CardHeader>
            <CardBody className="mt-4 grid place-items-center px-2">
              <Chart {...pieChartMemberConfig} />
            </CardBody>
          </Card>
        </div>
        <div className=" w-full">
          <div className="flex items-center gap-1 border py-1 px-1 ">
            <FaChartPie className="h-5 w-5" />

            <h1 className="border-l p-1">
              Staff Members by Designation: Overview
            </h1>
          </div>
          <Card className="rounded-b-xl rounded-t-none">
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
            ></CardHeader>
            <CardBody className="mt-4 grid place-items-center px-2">
              <Chart {...pieChartStaffConfig} />
            </CardBody>
          </Card>
        </div>
      </section>
    </>
  );
}

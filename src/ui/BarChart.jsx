"use client";

import { chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import sourceData from "../data/sourceData.json";
import revenueData from "../data/revenueData.json";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";

const BarChart = () => {
  return (
    <div className=" my-3 flex flex-col items-center justify-center gap-y-3  ">
      <div className=" h-60 w-full md:w-[75%] px-3 py-3 bg-white shadow-md shadow-black/35 rounded-md flex items-center justify-center">
        <Line
          data={{
            labels: revenueData.map((data) => data.label),
            datasets: [
              {
                label: "Revenue",
                data: revenueData.map((data) => data.revenue),
                backgroundColor: "yellow",
                borderColor: "green",
              },
              {
                label: "Cost",
                data: revenueData.map((data) => data.cost),
                backgroundColor: "blue",
                borderColor: "red",
              },
            ],
          }}
          options={{
            elements: {
              line: {
                tension: 0.5,
              },
            },
            plugins: {
              title: {
                text: "Monthly Revenue & Cost",
              },
            },
          }}
        />
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2 gap-y-3 w-full md:w-[75%] ">
        <div className=" flex items-center justify-center">
          <div className=" h-60 w-full md:w-[90%] px-3 py-3 bg-white shadow-md shadow-black/35 rounded-md flex items-center justify-center">
            <Bar
              data={{
                labels: sourceData.map((data) => data.label),
                datasets: [
                  {
                    label: "Count",
                    // label: sourceData.map((data) => data.label),
                    data: sourceData.map((data) => data.value),
                    backgroundColor: ["blue", "yellow", "pink", "green"],
                    borderRadius: 5,
                  },

                  // {
                  //   label: "Loss",
                  //   data: [90, 100, 70],
                  // },
                ],
              }}
              options={{
                plugins: {
                  title: {
                    text: "Revenue",
                  },
                },
              }}
            />
          </div>
        </div>
        <div className=" flex items-center justify-center">
          <div className=" h-60 w-full md:w-[70%] px-3 py-3 bg-white shadow-md shadow-black/35  flex items-center justify-center rounded-md">
            <Doughnut
              data={{
                labels: sourceData.map((data) => data.label),
                datasets: [
                  {
                    label: "Count",
                    data: sourceData.map((data) => data.value),
                    backgroundColor: ["blue", "yellow", "pink", "green"],
                    borderColor: ["blue", "yellow", "pink", "green"],
                  },

                  // {
                  //   label: "Loss",
                  //   data: [90, 100, 70],
                  // },
                ],
              }}
              options={{
                plugins: {
                  title: {
                    text: "Revenue",
                  },
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarChart;

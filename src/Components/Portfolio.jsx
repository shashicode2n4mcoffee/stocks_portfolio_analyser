import React from "react";
import "./Portfolio.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  scales: {
    y: {
      position: "right",
    },
  },
  // plugins: {
  //   legend: {
  //     position: 'top',
  //   },
  //   title: {
  //     display: true,
  //     text: 'Portfolio Performance',
  //   },
  // },
};

const Portfolio = ({ finalData }) => {
  return (
    <div className="portfolio">
      <h3>Portfolio Performace</h3>
      {finalData.finalDates ? (
        <Line
          options={options}
          data={{
            labels: finalData.finalDates.map((item) => item),
            datasets: [
              {
                label: "Portfolio",
                data: finalData.finalValueArr.map((item) => item),
                borderColor: "rgb(255, 99, 132)",
                backgroundColor: "rgba(255, 99, 132, 0.5)",
              },
            ],
          }}
          height={500}
          width={1000}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Portfolio;

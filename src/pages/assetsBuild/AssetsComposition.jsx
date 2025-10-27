import React from 'react';
import { Pie } from 'react-chartjs-2';   // ✅ correct package
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Register the pieces you need
ChartJS.register(ArcElement, LinearScale, Tooltip, CategoryScale, BarElement, Legend);

const data = {
  labels: [
    "Miscellaneous Assets", 
    "Inventories",
    "Prepayments owed",
    "Trade & Receivables",
    "Derivative Instruments",
    "Short-term Financial Assets",
    "Cash & cash equivalents",
  ],
  datasets: [
    {
      label: "Beginning",
      data: [3908, 17226, 422, 24824, 442, 649, 11197],
      backgroundColor: [
        "rgba(245, 39, 145, 0.4)",
        "rgba(54, 162, 235, 0.6)",  
        "rgba(244, 67, 54, 0.7)",
        "rgba(76, 175, 80, 0.5)",
        "rgba(255, 152, 0, 0.7)",
        "rgba(255, 235, 59, 0.7)",
        "rgba(156, 39, 176, 0.7)",     
      ],
      borderColor: Array(7).fill("rgba(255, 255, 255, 1)"),
      borderWidth: 1,
    },
  ]
};

const options = {
  plugins: {
    title: {
      display: true,
      text: "Current Assets Composition Beginning",
      color: "purple",
      font: {
        size: 14,
        weight: "bold"
      }
    },
    legend: {
      labels: {
        color: "purple",
        font: {
          size: 9,
          weight: "normal"
        },
        boxWidth: 6,
        boxHeight: 6,
        padding: 5
      }
    },
  },
  // Pie charts don’t use scales, but you can still hide them safely
  scales: {
    y: { display: false }
  }
};

const AssetsComposition = () => {
  return (
    <div>
      <Pie data={data} options={options} />
    </div>
  );
};

export default AssetsComposition;
import React from 'react'
import { Bar, Chart } from 'react-chartjs-2'



const AssetsChart = () => {
    const data = {
  labels: ["Yr 2021", "Yr 2020"],
  datasets: [
    {
      label: "Total Assets by Yr",
      data: [175990, 142391],
      backgroundColor: [
        "rgba(245, 39, 145, 0.5)",
        "rgba(54, 162, 235, 0.8)"       
      ],
      borderColor: [
        "rgba(245, 39, 145, 0.86)",
        "rgba(0, 87, 152)"        
      ],
      borderWidth: 1
    }
  ]
};

    const options = {
    plugins: {
        title: {
        display: true,
        text: "Total Assets by Yr",
        color: "white", // Change title color
        font: {
            size: 18, // Adjust font size
            weight: "bold"
        }
        },
        legend: {
            labels: {
                color: "white"
            }
        }
    },
    
    scales: {
        y:  {
            grid: {
                color: false,
            },
            ticks: {
                color: "white",
            },
            border: {
            color: "white"
            },
        },

        x:{
            grid: {
            color: false,
            },
            ticks: {
                color: "white"
            },
            border: {
            color: "white"
            }
        }   
    }
};

  return (

    <div className='chart text-white ml-5 flex dataCard'>
      <Bar data={data} options={options}/>        
    </div>
  )
}

export default AssetsChart
import { scales} from 'chart.js';
import React from 'react'
import { Pie, Chart } from 'react-chartjs-2'


const data4 = {
  labels: [
    "Miscellaneous Liabilities", 
    "Provisions",
    "Pension obligations",
    "Borrowings",
    "Lease liability",
    "Trade & other payables",
    "Current tax liability",
    "Derivative financial Instruments",
    "Contract & other liabilities"
  ],
  datasets: [
    {
      label: "Liabilities Ending",
      data: [
        0,
        1215,
        1467,
        4815,
        2552,
        8497,
        4174,
        0,
        2658
      ],
      backgroundColor: [
        "rgba(245, 39, 145, 0.4)",
        "rgba(54, 162, 235, 0.6)",  
        "rgba(244, 67, 54, 0.7)",
        "rgba(76, 175, 80, 0.5)",
        "rgba(255, 152, 0, 0.7)",
        "rgba(255, 235, 59, 0.7)",
        "rgba(156, 39, 176, 0.7)",
        "rgba(0, 188, 212, 0.7)",
        "rgba(0, 150, 136, 0.7)"       
      ],
      borderColor: [       
        "rgba(255, 255, 255, 1)",             
      ],
      borderWidth: 1,
    },
  ]
};

const options = {
    plugins: {
        title: {
        display: true,
        text: "Liabilities Composition Ending",
        color: "purple", // Change title color
        font: {
            size: 14, // Adjust font size
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
                  boxWidth: 6,   // 👈 Width of the color box
                  boxHeight: 6,  // 👈 Optional: height of the color box
                  padding: 5
            }        
        },
    },   
    scales: {
      y: {
        display: false
      }
    }
};

const LiabilitiesCompositionEnd = () => {
  return (
     <div>
        <Pie data={data4} options={options}/>            
    </div>
  )
}

export default LiabilitiesCompositionEnd
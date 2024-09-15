"use client";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({accounts}: DoughnutChartProps) => {
    const data = {
        datasets: [
            {
                label: 'Banks',
                data: [1250, 2500, 3750],
                backgroundColor: [
                    '#0747b6',
                    '#007bff',
                    '#0056b3'
                ]
            }
        ],
        labels: ['Bank 1', 'Bank 2', 'Bank 3']
    }
  return <Doughnut 
   data={data}
   options={{
    cutout: '70%',
    plugins: {
        legend: {
            display: false
        }
    }
   }}
   />
}

export default DoughnutChart
import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import './NbrPatients.css';

const NbrPatients = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Male',
        data: [500, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000, 5500, 6000],
        borderColor: 'blue',
        backgroundColor: 'rgba(0, 0, 255, 0.1)',
        fill: false,
      },
      {
        label: 'Female',
        data: [4000, 4500, 3000, 2000, 1500, 500, 1000, 2500, 3500, 4000, 5000, 5500],
        borderColor: 'pink',
        backgroundColor: 'rgba(255, 192, 203, 0.1)',
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            label += Math.round(context.raw) + ' Patients';
            return label;
          },
        },
      },
    },
  };

  return (
    <div className="chart-container">
      <div className='elkalaa'>
        <h2>Nombre de patients</h2>
        <div className="legend">
          <select className="select-frequency">
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </select>
        </div>
      </div>
      <div className='dataa'><Line data={data} options={options} /></div>
      
    </div>
  );
};

export default NbrPatients;

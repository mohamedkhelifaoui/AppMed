import React from 'react';
import Header from './Header';
import Statistics from './Statistics';
import PatientsChart from './PatientsChart';
import PredictionsHistory from './PredictionsHistory';
import './Dashboard.css';
import NbrPatient from './NbrPatients';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Header />
      <Statistics />
      <div className='elkala'>
        <NbrPatient/>
        <PatientsChart />
        </div>
      <PredictionsHistory />
    </div>
  );
};

export default Dashboard;

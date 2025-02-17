import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../api/auth'; // Import authentication check
import Header from './Header';
import Statistics from './Statistics';
import PatientsChart from './PatientsChart';
import PredictionsHistory from './PredictionsHistory';
import './Dashboard.css';
import NbrPatients from './NbrPatients';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await getUser();
        setUser(res.data);
      } catch (err) {
        navigate('/login'); // Redirect to login if not authenticated
      }
    };
    checkAuth();
  }, [navigate]);

  if (!user) return <p>Chargement...</p>;

  return (
    <div className="dashboard">
      <Header />
      <Statistics />
      <div className='elkala'>
        <NbrPatients />
        <PatientsChart />
      </div>
      <PredictionsHistory />
    </div>
  );
};

export default Dashboard;

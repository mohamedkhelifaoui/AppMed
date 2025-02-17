import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Bienvenue from './components/Bienvenue/Bienvenue';
import Prediction from './components/Prediction/Prediction';
import Prediction2 from './components/Prediction2/Prediction2';
import Prediction3 from './components/Prediction3/Prediction3';
import WelcomPage from './components/WelcomPage/WelcomPage';
import LoginPage from './components/Connexion/LoginPage';
import Consultations from './components/Consultations/Consultations';
import Historique from './components/Consultations/Historique/Historique';

function App() {
  return (
    <Router>
    <div>
      <Routes>
        <Route exact path="/" element={<WelcomPage/>} /> 
        <Route exact path="/login" element={<LoginPage/>} /> 
        <Route exact path="/bienvenue" element={<Bienvenue/>} />
        <Route exact path="/prediction" element={<Prediction/>} />
        <Route exact path="/prediction2" element={<Prediction2/>} />
        <Route exact path="/prediction3" element={<Prediction3/>} />
        <Route exact path="/Consultations" element={<Consultations/>} />
        <Route exact path="/Consultations2" element={<Historique/>} />

      </Routes>
    </div>
  </Router>
  );
}

export default App;

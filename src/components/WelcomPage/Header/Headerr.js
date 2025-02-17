import React from 'react';
import './Headerr.css';
import logo from '../../../Assets/cancer 1 (1).png'
import { useNavigate } from 'react-router-dom';


const Headerr = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/login'); 

  };
  
  return (
    <header className="headerr">
      <div className="logo">
        <img src={logo} alt="DeepMRI Logo" className="logo-image" />
        <span className="logo-text">DeepMRI</span>
      </div>
      <nav className="nav">
        <a href="#home" className="nav-link">Accueil</a>
        <a href="#about" className="nav-link">À Propos</a>
      </nav>
      <button className="login-button" onClick={handleSubmit}>S'identifier</button>
    </header>
  );
};

export default Headerr;

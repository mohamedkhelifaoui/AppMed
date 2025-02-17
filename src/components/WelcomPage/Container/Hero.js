import React from 'react';
import './Hero.css';
import doctorImage from '../../../Assets/Rectangle 197.png'; // Replace with the actual path to the doctor image
import patientImage from '../../../Assets/Rectangle 196 (1).png'; // Replace with the actual path to the patient image
import { useNavigate } from 'react-router-dom';


const Hero = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/login'); 
  };
  return (
    <div className="hero-container">
      <div className="hero-text">
        <h1>Votre Suivi <br /><span className="highlight">Personnalisé</span> du <br /> Cancer du Sein</h1>
        <p>Accédez à notre tableau de bord en ligne pour un suivi personnalisé du cancer du sein, offrant soutien et informations essentielles.</p>
        <button className="start-button" onClick={handleSubmit}>Commencer</button>
      </div>
      <div className="hero-images">
        <img src={doctorImage} alt="Doctor" className="hero-image" />
        <img src={patientImage} alt="Patient" className="hero-image2" />
      </div>
    </div>
  );
};

export default Hero;

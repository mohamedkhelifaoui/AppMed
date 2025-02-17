import React from 'react';
import './AboutUs.css';
import aboutUsImage from '../../../Assets/Rectangle 206.png'; // Replace with the actual path to the about us image
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/login'); 
  };
  return (
    <div className="about-us-container">
      <div className="about-us-image">
        <img src={aboutUsImage} alt="About Us" className='srrrc' />
      </div>
      <div className="about-us-text">
        <span className='h2'>Contre le Cancer du Sein</span>
        <span className='h1'>À Propos de Nous</span>
        <p>Découvrez notre engagement fondé sur l'empathie et le professionnalisme, notre équipe multidisciplinaire et notre mission d'offrir un soutien intégré aux personnes touchées par le cancer du sein.</p>
        <button className="identify-button" onClick={handleSubmit}>S'identifier</button>
      </div>
    </div>
  );
};

export default AboutUs;

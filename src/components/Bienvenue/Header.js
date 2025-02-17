import React from 'react';
import './Header.css';
import profilePic from '../../Assets/profile-pic.png'; // Make sure to add your profile picture in the same directory
import notification from '../../Assets/notification.png'
import pic3 from '../../Assets/3.png'
import { useNavigate } from 'react-router-dom';


const Header = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/prediction'); // Change '/about' to your desired path
  };


  return (
    <div className="header">
      <div className="header-left">
        <span>Bienvenue Nadia,</span>
      </div>
      <div className="header-right">
        <button className="prediction-button" onClick={handleClick}>
          Faire une prédiction
          <i className="icon icon-prediction"><img src={pic3} alt='#'/></i>
        </button>
        <div className="notification-icon">
          <i className="icon icon-notification"><img src={notification} alt='#'/></i>
        </div>
        <div className="profile">
          <span className="profile-name">Nadia Mans</span>
          <img src={profilePic} alt="Nadia Mans" className="profile-pic" />
        </div>
      </div>
    </div>
  );
};

export default Header;

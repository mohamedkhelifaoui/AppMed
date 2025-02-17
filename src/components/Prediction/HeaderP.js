import React from 'react';
import './HeaderP.css';
import profilePic from '../../Assets/profile-pic.png'; // Make sure to add your profile picture in the same directory
import notification from '../../Assets/notification.png'


const HeaderP = () => {
  
  


  return (
    <div className="header">
      <div className="header-left">
        <span>Segmentation et Classification Avancées du Cancer du Sein via IRM</span>
      </div>
      <div className="header-right">
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

export default HeaderP;

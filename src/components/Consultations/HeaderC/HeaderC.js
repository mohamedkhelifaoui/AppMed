import React from 'react'
import profilePic from '../../../Assets/profile-pic.png'
import notification from '../../../Assets/notification.png'
import pic3 from '../../../Assets/3.png'
import './HeaderC.css'
import { useNavigate } from 'react-router-dom';



const HeaderC = () => {
  const navigate = useNavigate();
  
    const handleClickk = () => {
      navigate('/prediction'); // Change '/about' to your desired path
    };
  

  return (
<div className="headerC">
      <div className="headerC-left">
        <span>Historique de Vos Prédictions</span>
      </div>
      <div className="headerC-right">
        <button className="prediction-button" onClick={handleClickk}>
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
    </div>  )
}

export default HeaderC
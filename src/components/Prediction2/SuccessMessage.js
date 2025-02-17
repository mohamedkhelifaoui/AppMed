import React from 'react';
import './SuccessMessage.css';
import pic from '../../Assets/circle-check.png'

const SuccessMessage = () => {
  return (
    <div className="success-container">
      <div className="success-icon"><img src={pic} alt='#'/></div>
      <span>Envoi avec Succès</span>
      <p>Votre IRM a été envoyée avec succès. Vous pouvez consulter les résultats ci-dessous.</p>
    </div>
  );
};

export default SuccessMessage;

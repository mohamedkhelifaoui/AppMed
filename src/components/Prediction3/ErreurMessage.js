import React from 'react';
import './ErreurMessage.css';
import pic from '../../Assets/Primary (2).png'

const ErreurMessage = () => {
  return (
    <div className="Erreur-container">
      <div className="Erreur-icon"><img src={pic} alt='#'/></div>
      <span>Echec D’envoi</span>
      <p>Votre IRM n’est pas compatible. Vous voulez le envoyer encore ci-dessous.</p>
    </div>
  );
};

export default ErreurMessage;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../../axiosConfig';  // Importer Axios configuré
import './LoginPage.css';
import microscopeImage from '../../Assets/doctor.png'; 
import pic from '../../Assets/keyboard_arrow_down.png';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await API.post('/auth/login', { email, password });

      if (response.status === 200) {
        alert('Connexion réussie !');  // Pour tester, remplace par une gestion de state plus tard
        navigate('/bienvenue'); // Redirection après connexion réussie
      }
    } catch (err) {
      setError(err.response?.data?.message || "Erreur de connexion");
    }
  };

  return (
    <div className="login-page">
      <div className="back-link">
        <a href="/">
          <img src={pic} alt="#" />
          Revenir
        </a>
      </div>
      <div className='logggin'>
        <div className="login-left">
          <span className="login-title">Connexion</span>
          <p className="login-subtitle">Entrez votre adresse e-mail et votre mot de passe</p>
          {error && <p className="error-message">{error}</p>}
          <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Votre email" required />

            <label htmlFor="password">Mot de passe</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Votre mot de passe" required />

            <div className="login-options">
              <div className='checkk'>
                <input type="checkbox" />
                Rester connecté
              </div>
              <div>
                <a href="#" className="forgot-password">Mot de passe oublié ?</a>
              </div>
            </div>

            <button type="submit" className="login-button">Se Connecter</button>
          </form>
          <p className="footer-text">Copyright © 2024 DeepMRI | Tous droits réservés</p>
        </div>
      </div>
      <div className="login-right">
        <img src={microscopeImage} alt="Microscope" className="login-image" />
      </div>
    </div>
  );
}

export default LoginPage;

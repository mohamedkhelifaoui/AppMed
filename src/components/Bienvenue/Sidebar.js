import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../../axiosConfig';
import './Sidebar.css';
import Pic1 from '../../Assets/1.png';
import Pic2 from '../../Assets/2.png';
import Pic3 from '../../Assets/3.png';
import Pic4 from '../../Assets/4.png';
import Pic5 from '../../Assets/5.png';
import Pic6 from '../../Assets/6.png';
import Pic7 from '../../Assets/7.png';
import Pic8 from '../../Assets/8.png';
import Pic9 from '../../Assets/9.png';

const Sidebar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await API.get('/auth/me');
        setUser(response.data);
      } catch (error) {
        console.log("Utilisateur non connecté");
      }
    };
    checkAuth();
  }, []);

  const handleLogout = async () => {
    await API.post('/auth/logout');
    setUser(null);
    navigate('/login');
  };

  return (
    <div className="sidebar">
      <div className='sidebar-elements'>
        <div className='logo'>
          <img src={Pic1} alt='logo' />
          <h2>DeepMRI</h2>
        </div>

        <div className="sidebar-item" onClick={() => navigate('/bienvenue')}>
          <img src={Pic2} alt='#' />
          <span>Tableau de bord</span>
        </div>

        {user ? (
          <>
            <div className="sidebar-item" onClick={() => navigate('/prediction')}>
              <img src={Pic3} alt='#' />
              <span>Prédiction</span>
            </div>
            <div className="sidebar-item" onClick={() => navigate('/consultations')}>
              <img src={Pic4} alt='#' />
              <span>Consultations</span>
            </div>
            <div className="sidebar-item">
              <img src={Pic5} alt='#' />
              <span>Patients</span>
            </div>
            <div className="sidebar-item">
              <img src={Pic6} alt='#' />
              <span>Modèles</span>
            </div>
            <div className="sidebar-item">
              <img src={Pic7} alt='#' />
              <span>Commentaires</span>
            </div>
            <div className="sidebar-item">
              <img src={Pic8} alt='#' />
              <span>Settings</span>
            </div>
          </>
        ) : (
          <p className="sidebar-warning">Veuillez vous connecter</p>
        )}
      </div>

      {user && (
        <div className='sidebar-button' onClick={handleLogout}>
          <div className="sidebar-item">
            <img src={Pic9} alt='#' />
            <span>Se Déconnecter</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;

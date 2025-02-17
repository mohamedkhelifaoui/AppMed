import React, { useState } from 'react';
import './Dropzone.css';
import pic1 from '../../Assets/upload.png'
import { useNavigate } from 'react-router-dom';


const Dropzone = (props) => {

  


  const [file, setFile] = useState(null);

  const handleFileUpload = (event) => {
    setFile(event.target.files[0]);
  };

  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/prediction2'); 

  };

  return (
    <div className='mm'>
        <div className="dropzone-container">
      <div className="dropzone">
        <input
          type="file"
          accept=".png, .jpg, .jpeg, .pdf"
          onChange={handleFileUpload}
          className="file-input"
        />
        <img src={pic1} alt='#'/>
        <p>Importer votre IRM</p>
        <span className="file-formats">Les fichiers PNG, JPG et PDF sont autorisés.</span>
      </div>
      <div className="result-section">
        <h2>{props.data1}</h2>
        {/* Obtenez un résultat instantané maintenant */}
        <p>{props.data2}</p>
        {/* Commencez l'analyse pour une détection et classification détaillée. */}
        <button onClick={handleSubmit} className="send-button">Envoyer</button>
      </div>
    </div>
    </div>

  );
};

export default Dropzone;

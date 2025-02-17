import React, { useState } from 'react';
import './PredictionsTable.css';
import { useNavigate } from 'react-router-dom';


const predictionsData = [
  { id: 53, date: '30 Mai 2024', status: 'maligne' },
  { id: 52, date: '28 Mai 2024', status: 'maligne' },
  { id: 52, date: '28 Mai 2024', status: 'maligne' },
  { id: 52, date: '28 Mai 2024', status: 'maligne' },
  { id: 52, date: '28 Mai 2024', status: 'maligne' },
  { id: 52, date: '28 Mai 2024', status: 'maligne' },
  { id: 52, date: '28 Mai 2024', status: 'maligne' },
  { id: 52, date: '28 Mai 2024', status: 'maligne' },
  { id: 52, date: '28 Mai 2024', status: 'maligne' },
  { id: 52, date: '28 Mai 2024', status: 'maligne' },
  { id: 52, date: '28 Mai 2024', status: 'maligne' },
  { id: 51, date: '22 Mai 2024', status: 'Bénigne' },
  { id: 50, date: '20 Mai 2024', status: 'Bénigne' },
  { id: 49, date: '18 Mai 2024', status: 'maligne' },
  { id: 48, date: '18 Mai 2024', status: 'maligne' },
  { id: 47, date: '18 Mai 2024', status: 'maligne' },
  { id: 46, date: '18 Mai 2024', status: 'maligne' },
  { id: 45, date: '18 Mai 2024', status: 'maligne' },
  { id: 44, date: '18 Mai 2024', status: 'Bénigne' },
  { id: 43, date: '18 Mai 2024', status: 'maligne' },
  { id: 42, date: '18 Mai 2024', status: 'Bénigne' },
  { id: 41, date: '18 Mai 2024', status: 'Bénigne' },
  { id: 40, date: '18 Mai 2024', status: 'maligne' },
  { id: 39, date: '18 Mai 2024', status: 'Bénigne' },
  { id: 38, date: '18 Mai 2024', status: 'Bénigne' },
  { id: 37, date: '18 Mai 2024', status: 'Bénigne' },
  { id: 36, date: '18 Mai 2024', status: 'maligne' },
  { id: 53, date: '30 Mai 2024', status: 'maligne' },
  { id: 52, date: '28 Mai 2024', status: 'maligne' },
  { id: 51, date: '22 Mai 2024', status: 'Bénigne' },
  { id: 50, date: '20 Mai 2024', status: 'Bénigne' },
  { id: 49, date: '18 Mai 2024', status: 'maligne' },
  { id: 48, date: '18 Mai 2024', status: 'maligne' },
  { id: 47, date: '18 Mai 2024', status: 'maligne' },
  { id: 46, date: '18 Mai 2024', status: 'maligne' },
  { id: 45, date: '18 Mai 2024', status: 'maligne' },
  { id: 44, date: '18 Mai 2024', status: 'Bénigne' },
  { id: 43, date: '18 Mai 2024', status: 'maligne' },
  { id: 42, date: '18 Mai 2024', status: 'Bénigne' },
  { id: 41, date: '18 Mai 2024', status: 'Bénigne' },
  { id: 40, date: '18 Mai 2024', status: 'maligne' },
  { id: 39, date: '18 Mai 2024', status: 'Bénigne' },
  { id: 38, date: '18 Mai 2024', status: 'Bénigne' },
  { id: 37, date: '18 Mai 2024', status: 'Bénigne' },
  { id: 36, date: '18 Mai 2024', status: 'maligne' },
];

const PredictionsTable = () => {



    const navigate = useNavigate();
  
    const handleClickk = () => {
      navigate('/consultations2'); // Change '/about' to your desired path
    };
  
  
  const [activePage, setActivePage] = useState(1);
  const itemsPerPage = 18;

  const handleClick = (pageNumber) => {
    setActivePage(pageNumber);
  };

  const displayData = predictionsData.slice((activePage - 1) * itemsPerPage, activePage * itemsPerPage);

  const getStatusClass = (status) => {
    return status === 'maligne' ? 'status-malignant' : 'status-benign';
  };

  return (
    <div className="predictions-table-container">
      <table className="predictions-table">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Date</th>
            <th>Nombre du tumeurs</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {displayData.map((prediction) => (
            <tr key={prediction.id}>
              <td className='iinfo'>Prédiction #{prediction.id}</td>
              <td className='iinfo'>{prediction.date}</td>
              <td className={getStatusClass(prediction.status)}>{prediction.status}</td>
              <td><button className="consult-button" onClick={handleClickk}>Consulter</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <span>Éléments par page </span>
        <select value={itemsPerPage}>
          <option value="18">18</option>
          <option value="36">36</option>
        </select>
        <div className="page-numbers">
          {[...Array(Math.ceil(predictionsData.length / itemsPerPage)).keys()].map(number => (
            <span
              key={number + 1}
              className={activePage === number + 1 ? 'active-page' : ''}
              onClick={() => handleClick(number + 1)}
            >
              {number + 1}
            </span>
          ))}
          <span className="next-page" onClick={() => handleClick(activePage + 1)}>Suivant</span>
        </div>
      </div>
    </div>
  );
};

export default PredictionsTable;

import React from 'react';
import './PredictionsHistory.css';

const PredictionsHistory = () => {
  const data = [
    { name: 'Annette Black', date: 'Dec 18, 2021', radiologist: 'John Doe', status: 'Bénigne', statusColor: 'green' },
    { name: 'Savannah Nguyen', date: 'Dec 18, 2021', radiologist: 'Rim Bn', status: 'Bénigne', statusColor: 'green' },
    { name: 'Ronald Richards', date: 'Dec 18, 2021', radiologist: 'John Doe', status: 'maligne', statusColor: 'red' },
    { name: 'Bessie Cooper', date: 'Dec 18, 2021', radiologist: 'Mohamed Reda', status: 'maligne', statusColor: 'red' },
  ];

  return (
    <div className="history-container">
      <div className="header">
        <h2>Historique des prédictions</h2>
        <a href="/view-all" className="view-all">View all</a>
      </div>
      <table>
        <thead>
          <tr>
            <th>Patient name</th>
            <th>Date in</th>
            <th>Radiologist</th>
            <th>Classe Majeur</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>
                <div className="patient-info">
                  <div className="avatar"></div>
                  {row.name}
                </div>
              </td>
              <td>{row.date}</td>
              <td>{row.radiologist}</td>
              <td className={row.statusColor}>{row.status}</td>
              <td><div className="more-options">•••</div></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PredictionsHistory;

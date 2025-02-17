import React from 'react';
import './TumorClassification.css';
import pic from '../../Assets/image1.png'
import pic1 from '../../Assets/check_circle.png'
import pic2 from '../../Assets/cancel.png'


const TumorClassification = () => {
  return (
    <div className='containeeer'>
        <div>
            <img src={pic} alt='#' />
        </div>
        <div className="table-container">
      <h1>Classification du tumeur</h1>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Etat</th>
            <th>Pourcentage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tumeur bénigne</td>
            <td>
              <span className="status good"><img src={pic1} alt='bien'/> Bien</span>
            </td>
            <td>
              <span className="percentage">20</span>
              <div className="progress-bar">
                <div className="progress good" style={{ width: '20%' }}></div>
              </div>
            </td>
          </tr>
          <tr>
            <td>Tumeur maligne</td>
            <td>
              <span className="status danger"><img src={pic2} alt='bien'/> Danger</span>
            </td>
            <td>
              <span className="percentage">80</span>
              <div className="progress-bar">
                <div className="progress danger" style={{ width: '80%' }}></div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default TumorClassification;

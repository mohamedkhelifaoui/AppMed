import React from 'react';
import './Statistics.css';

const Statistics = () => {
  const StatisticsData = [
    { label: 'Total Patients', value: 414, iconClass: 'icon-patients', color: 'green' },
    { label: 'Total Personnelles', value: 30, iconClass: 'icon-staff', color: 'purple' },
    { label: 'Examens', value: 112, iconClass: 'icon-exams', color: 'orange' },
    { label: 'Moyenne Frais', value: '20000 DA', iconClass: 'icon-fees', color: 'blue' },
    { label: 'Gains', value: '65000 DA', iconClass: 'icon-gains', color: 'black' }
  ];

  return (
    <div className="Statistics">
      {StatisticsData.map((stat, index) => (
        <div className="stat-card" key={index}>
          <div className="stat-label">{stat.label}</div>
          <div className='dtt'>
            <div className="stat-value" style={{ color: stat.color }}>{stat.value}</div>
            <div className={`stat-icon ${stat.iconClass}`} style={{ color: stat.color }}></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Statistics;

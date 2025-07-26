import React from 'react';
import './TabSection.css';

const tabs = [
  {
    title: '1:1 Coaching Program',
    description: 'Tailored 1:1 program for personalised preparation',
    url: '#coaching',
  },
  {
    title: 'Consulting Cohort 101',
    description: 'Consulting foundations with global like-minded peers',
    url: '#cohort',
  },
  {
    title: 'CaseBuddy',
    description: 'Self practice cases at your own pace',
    url: '#casebuddy',
  },
];

const TabSection = () => {
  return (
    <div className="tab-section">
      <div className="tabs">
        {tabs.map((tab, index) => (
          <div key={index} className="tab-item">
            <a href={tab.url} className="tab-button">
              {tab.title}
            </a>
            <p className="tab-description">{tab.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabSection;

import React, { useState } from 'react';

const ProjectsPage = () => {
  const [changeTab, setChangeTab] = useState(false);
  return (
    <div className="projects-container center-container">
      <div className="projects-container-heading">
        <div
          className={`${changeTab ? '' : 'active-tab'} mr-4`}
          onClick={() => {
            setChangeTab(false);
          }}
        >
          <h2 className={`${changeTab ? 'inactive-tab' : ''} `}>
            Nacionalni Projekti
          </h2>
        </div>
        <div
          className={`${changeTab ? 'active-tab' : ''}`}
          onClick={() => {
            setChangeTab(true);
          }}
        >
          <h2 className={`${changeTab ? '' : 'inactive-tab'}`}>
            Medjunarodni Projekti
          </h2>
        </div>
      </div>

      <div className="projects"></div>
    </div>
  );
};

export default ProjectsPage;

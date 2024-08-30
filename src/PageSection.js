// PageSection.js
import React from 'react';
import Breadcrumb from './Breadcrumb';
import TitleSection from './TitleSection';
import './PageSection.css'; // Import external CSS

const PageSection = () => {
  return (
    <div className="page-section-container">
      <div className="breadcrumb-row">
        <Breadcrumb />
      </div>
      <div className="title-row">
        <TitleSection />
      </div>
    </div>
  );
};

export default PageSection;

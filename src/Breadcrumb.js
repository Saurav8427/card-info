import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './Breadcrumb.css'; // Import external CSS

const Breadcrumb = () => {
  return (
    <nav className="breadcrumb-container">
      <FontAwesomeIcon icon={faHome} />
      <span className="breadcrumb-icon">
        <FontAwesomeIcon icon={faChevronRight} />
      </span>
      <a href="/" className="breadcrumb-link">
        Category
      </a>
      <span className="breadcrumb-icon">
        <FontAwesomeIcon icon={faChevronRight} />
      </span>
      <a href="/" className="breadcrumb-link">
        Subcategory
      </a>
      <span className="breadcrumb-icon">
        <FontAwesomeIcon icon={faChevronRight} />
      </span>
      <span className='text-gray-400'>Item</span>
    </nav>
  );
};

export default Breadcrumb;

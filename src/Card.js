import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faStar } from '@fortawesome/free-solid-svg-icons';
import './Card.css';

const Card = () => {
  return (
    <div className="card-container">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="card-image"
            src="/path-to-image.png"
            alt="Instafeed"
          />
        </div>
        <div className="card-content">
          <div className="card-title">Teemill: Eco Print on Demand</div>
          <p className="card-description">
            Collect and display product reviews and star ratings. Sales with social proof.
          </p>
          <div className="card-pricing">
            <div className="card-pricing-item">
              <FontAwesomeIcon icon={faDollarSign} className="text-green-500" />
              <p className="card-pricing-text">$24 / month</p>
            </div>
            <div className="card-pricing-item mt-2">
              <FontAwesomeIcon icon={faDollarSign} className="text-green-500" />
              <p className="card-pricing-text">$36 / month</p>
            </div>
          </div>
          <div className="card-stats">
            <div className="card-stats-item">
              Points: <span className="card-stats-item-value">122</span>
            </div>
            <div className="card-stats-item">
              Market Share: <span className="card-stats-item-value">13%</span>
            </div>
            <div className="card-stats-item">
              Launch Date: <span className="card-stats-item-value">12 May 23</span>
            </div>
          </div>
          <div className="card-rating">
            <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
            <p className="card-rating-text">7.5 (1,844 reviews)</p>
          </div>
          <button className="card-button-primary">
            People
          </button>
          <button className="card-button-secondary">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

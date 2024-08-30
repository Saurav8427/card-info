import React from 'react';
import './ReviewCard.css';

const ReviewCard = () => {
    return (
        <div className="review-card">
            {/* Text and Chart in One Row */}
            <div className="rating-container">
                <div className="text-content">
                    <div className="rating-label">Good</div>
                    <div className="review-count">1,844 reviews</div>
                </div>
                <div className="radial-progress" style={{ "--value": 75 }}>
                    <span className="progress-value">7.5</span>
                </div>
            </div>

            {/* Buttons */}
            <div className="button-group">
                <button className="people-button">People</button>
                <button className="details-button">View Details</button>
            </div>
        </div>
    );
};

export default ReviewCard;

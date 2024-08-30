import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import './FilterBar.css'; // Import the custom CSS file

const FilterBar = () => {
    return (
        <div className="filter-bar">
            <div className="filter-group">
                {/* Mobile-only: All filters button */}
                <button className="all-filters-btn">
                    <FontAwesomeIcon icon={faFilter} className="icon-margin-right" />
                    All filters
                </button>
                {/* Rest of the buttons */}
                <div className="desktop-only filter-options">
                    <button className="people-btn">
                        People
                        <FontAwesomeIcon icon={faCaretDown} className="icon-margin-left" />
                    </button>
                    <button className="locations-btn">
                        Locations
                        <span className="locations-count">2</span>
                        <FontAwesomeIcon icon={faCaretDown} className="icon-margin-left" />
                    </button>
                    <button className="seniority-btn">
                        Seniority
                        <FontAwesomeIcon icon={faCaretDown} className="icon-margin-left" />
                    </button>
                </div>
                {/* 1st, 2nd, 3rd+ grouped together */}
                <div className="ranking-group">
                    <button className="ranking-btn">1st</button>
                    <button className="ranking-btn">2nd</button>
                    <button className="ranking-btn">3rd+</button>
                </div>
                {/* Current company button */}
                <button className="desktop-only current-company-btn">
                    Current company
                    <FontAwesomeIcon icon={faCaretDown} className="icon-margin-left" />
                </button>

                <button className="reset-btn">
                    <span className='mr-2 text-xl font-thin'>|</span>Reset
                </button>
            </div>
            {/* Order by button (always rightmost) */}
            <button className="order-by-btn">
                Order by
                <FontAwesomeIcon icon={faCaretDown} className="icon-margin-left" />
            </button>
        </div>
    );
};

export default FilterBar;

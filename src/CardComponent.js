import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
// import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import './CardComponent.css'; // Import the custom CSS file
import ReviewCard from './ReviewCard';

// const data = [
//   { name: 'Points', value: 122 },
//   { name: 'Market Share', value: 13 },
// ];

// const COLORS = ['#00C49F', '#FFBB28'];

const CardComponent = () => {
  return (
    <div className="card-container">
      <div className="card-left">
        <img
          src="https://i.ytimg.com/vi/FClJzbiQcoM/maxresdefault.jpg"
          alt="Placeholder"
          className="card-image"
        />
      </div>

      <div className="card-middle">
        <h3 className="card-title">Teemill: Eco Print on Demand</h3>
        <p className="card-description">Collect and display product reviews and star ratings, sales with social proof.</p>
        
        <div className="pricing-plans-text"><FontAwesomeIcon icon={faDollarSign} size='sm'/>Pricing plans 4</div>
        <div className="pricing-options">
          <div className="pricing-plan">$24 / month</div>
          <div className="pricing-plan">$36 / month</div>
          <div className="pricing-plan">$24 / month</div>
        </div>
        <div className="divider"></div>
        <div className="details">
          <div className="info-group">
            <p>Points <FontAwesomeIcon icon={faInfoCircle} className='text-blue-600' /></p>
            <p className="info-value">122</p>
          </div>
          <div className="info-group">
            <p>Market Share</p>
            <p className="info-value">13%</p>
          </div>
          <div className="info-group">
            <p>Launch Date</p>
            <p className="info-value">12 May 23</p>
          </div>
        </div>
      </div>
      <div className="divider-bottom"></div>
      <div className="vertical-divider"></div>
    <ReviewCard />
      {/* <div className="card-right">
        <ResponsiveContainer width={80} height={80}>
          <PieChart>
            <Pie
              data={[{ name: 'Rating', value: 7.5 }]}
              cx="50%"
              cy="50%"
              innerRadius={30}
              outerRadius={40}
              startAngle={180}
              endAngle={-180}
              fill="#8884d8"
              dataKey="value"
              isAnimationActive={false}
              label={({ cx, cy }) => (
                <text
                  x={cx}
                  y={cy}
                  fill="black"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize={24}
                >
                  7.5
                </text>
              )}
            >
              <Cell fill="#8884d8" />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="buttons-container">
          <button className="people-btn">People</button>
          <button className="details-btn">View Details</button>
        </div>
      </div> */}
    </div>
  );
};

export default CardComponent;

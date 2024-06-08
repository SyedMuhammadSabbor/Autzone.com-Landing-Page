import React from 'react'
import "./Rating.css"

const Rating = ({ rating = 0 }) => {
    const stars = Array(5).fill(0);
  
    return (
      <> {/* Use fragment for concise JSX return */}
        <div className="rating">
          {stars.map((_, index) => (
            <span key={index} className={`star ${index < rating ? 'filled' : ''}`}>
              ★
            </span>
          ))}
        </div>
      </>
    );
  };
  
  export default Rating;
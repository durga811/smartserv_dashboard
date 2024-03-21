
import React from 'react';
import './Dashboard.css'; // Import CSS file for styling

const Card = ({ name, rollNumber }) => {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>Roll Number: {rollNumber}</p>
    </div>
  );
};

export default Card;

import React from 'react';
import './Delete.css';

const Delete = ({ onDelete }) => {
  return (
      <button onClick={onDelete} className="delete-button">
          Delete
      </button>
  );
};

export default Delete;
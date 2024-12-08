import React, { useState } from 'react';
import './AddComputer.css'; // For modal-specific styling

function AddComputer({ isOpen, onClose, onSubmit }) {
  const [computerName, setComputerName] = useState('');

  const handleInputChange = (e) => {
    setComputerName(e.target.value); // Update input field state
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(computerName); // Pass the computer name to the parent
    setComputerName(''); // Reset input field
    onClose(); // Close the modal
  };

  if (!isOpen) return null; // Do not render modal if not open

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Add Computer</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={computerName}
            onChange={handleInputChange}
            placeholder="Enter computer name"
            required  
          />
          <button type="submit" className="black-button">Submit</button>
          <button className="close-button" onClick={onClose}>Close</button>
        </form>
      </div>
    </div>
  );
}

export default AddComputer;

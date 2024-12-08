import React, { useState } from 'react';
import './AddMinion.css'; // For modal-specific styling

function AddMinion({ isOpen, onClose, onSubmit }) {
  const [minionName, setMinionName] = useState('');
  const [computerUsed, setComputerUsed] = useState('');
  const [deviceDate, setDeviceDate] = useState('');
  const [notes, setNotes] = useState('');

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const minionData = { minionName, computerUsed, deviceDate, notes };
    onSubmit(minionData); // Pass the form data to the parent
    setMinionName('');
    setComputerUsed('');
    setDeviceDate('');
    setNotes('');
    onClose(); // Close the modal
  };

  if (!isOpen) return null; // Do not render modal if not open

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Add Minion</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={minionName}
            onChange={(e) => handleInputChange(e, setMinionName)}
            placeholder="Minion Name"
            required
          />
          <input
            type="text"
            value={computerUsed}
            onChange={(e) => handleInputChange(e, setComputerUsed)}
            placeholder="Computer Used"
            required
          />
          <input
            type="date"
            value={deviceDate}
            onChange={(e) => handleInputChange(e, setDeviceDate)}
            required
          />
          <textarea
            value={notes}
            onChange={(e) => handleInputChange(e, setNotes)}
            placeholder="Notes"
            rows="4"
          />
          <button type="submit" className="black-button">Submit</button>
          <button className="close-button" onClick={onClose}>Close</button>
        </form>
      </div>
    </div>
  );
}

export default AddMinion;
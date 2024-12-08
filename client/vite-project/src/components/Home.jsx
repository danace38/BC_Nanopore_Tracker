import React, { useState, useEffect } from 'react';
import Nav from "./Nav";
import AddComputer from './AddComputer'; // Updated import
import AddMinion from './AddMinion'; // New import for AddMinion modal
import './Home.css';

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isComputerModalOpen, setIsComputerModalOpen] = useState(false); // State to manage computer modal visibility
  const [isMinionModalOpen, setIsMinionModalOpen] = useState(false); // State to manage minion modal visibility

  useEffect(() => {
    const fetchBioData = async () => {
      try {
        // Simulating API call with setTimeout (you can replace this with actual API call)
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        setIsLoading(false);
      } catch (err) {
        setError('Failed to fetch data');
        setIsLoading(false);
      }
    };

    fetchBioData();
  }, []);

  const handleAddComputerClick = () => {
    setIsComputerModalOpen(true); // Open the Add Computer modal
  };

  const handleAddMinionClick = () => {
    setIsMinionModalOpen(true); // Open the Add Minion modal
  };

  const handleCloseModal = () => {
    setIsComputerModalOpen(false);
    setIsMinionModalOpen(false); // Close both modals
  };

  const handleComputerSubmit = (computerName) => {
    console.log('Computer Name:', computerName); // Handle form submission (you can call an API here)
  };

  const handleMinionSubmit = (minionData) => {
    console.log('Minion Data:', minionData); // Handle form submission (you can call an API here)
  };

  return (
    <div className="home">
      <Nav />
      <main className="main-content">
        {isLoading && <p>Loading...</p>}
        {error && <p className="error-message">{error}</p>}
        
        {/* Message above the buttons */}
        <p className="select-message">Select one of the following options:</p>

        {/* Add two black buttons */}
        <div className="button-container">
          <button className="black-button" onClick={handleAddComputerClick}>Add Computer</button>
          <button className="black-button" onClick={handleAddMinionClick}>Add Minion</button>
        </div>

        {/* Modal for adding computer */}
        <AddComputer 
          isOpen={isComputerModalOpen} 
          onClose={handleCloseModal} 
          onSubmit={handleComputerSubmit} 
        />

        {/* Modal for adding minion */}
        <AddMinion 
          isOpen={isMinionModalOpen} 
          onClose={handleCloseModal} 
          onSubmit={handleMinionSubmit} 
        />
      </main>
    </div>
  );
}

export default Home;

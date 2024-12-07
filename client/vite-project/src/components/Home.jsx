import React, { useState, useEffect } from 'react';
import Nav from "./Nav";
import './Home.css';

function Home() {
  const [bioData, setBioData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBioData = async () => {
      try {
        // Simulating API call with setTimeout
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        setBioData([]);
        setIsLoading(false);
      } catch (err) {
        setError('Failed to fetch data');
        setIsLoading(false);
      }
    };

    fetchBioData();
  }, []);

  return (
    <div className="home">
      <Nav />
      <main className="main-content">
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="error-message">{error}</p>
        ) : (
          <p>No data available</p>
        )}
      </main>
    </div>
  );
}

export default Home;
import React, { useState, useEffect } from 'react';
import Nav from "./Nav";
import BioDataTable from "./BioDataTable";
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
        
        const mockData = [
          {
            id: "1",
            experimenter_Name: "Ilana Cohen",
            experiment_Name: "NP19 - SYNCOM experiment 1132",
            type: "SQK-16S114.24",
            location: "Lab A",
            status: "Completed",
            date_Run: "May 8 2024",
          },
          {
            id: "2",
            experimenter_Name: "Elettra",
            experiment_Name: "Cheng soil 1a",
            type: "SQK-16S114.24",
            location: "Lab B",
            status: "Processing",
            date_Run: "June 10 2024",
          },
          {
            id: "3",
            experimenter_Name: "Muth BUEE",
            experiment_Name: "HRPT microplastic and BTech",
            type: "SQK-16S114.24",
            location: "Lab C",
            status: "Failed",
            date_Run: "June 2024",
          },
        ];

        setBioData(mockData);
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
        <h1>Nanopore Runs Tracker </h1>
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="error-message">{error}</p>
        ) : (
          <BioDataTable data={bioData} />
        )}
      </main>
    </div>
  );
}

export default Home;
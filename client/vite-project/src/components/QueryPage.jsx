import React, { useState } from 'react';
import Nav from "./Nav";

const QueryTest = () => {
  const [output, setOutput] = useState('');

  const fetchData = (endpoint) => {
    setOutput('Loading...');
    
    fetch(`http://localhost:8000/${endpoint}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setOutput(JSON.stringify(data, null, 2));
      })
      .catch(error => {
        setOutput(`Error: ${error.message}`);
      });
  };

  const buttons = [
    { id: 'fetchExperiments', text: 'Fetch Experiments', endpoint: 'experiment' },
    { id: 'fetchRuns', text: 'Fetch Runs', endpoint: 'run' },
    { id: 'fetchBarcode', text: 'Fetch Barcode', endpoint: 'barcode' },
    { id: 'fetchHardware', text: 'Fetch Hardware', endpoint: 'hardware' },
    { id: 'fetchLibraryPrep', text: 'Fetch Library Prep', endpoint: 'library_prep' },
    { id: 'fetchNote', text: 'Fetch Note', endpoint: 'note' },
    { id: 'fetchOperator', text: 'Fetch Operator', endpoint: 'operator' },
    { id: 'fetchParticipants', text: 'Fetch Participants', endpoint: 'participants' },
    { id: 'fetchSample', text: 'Fetch Sample', endpoint: 'sample' },
    { id: 'fetchSequencingUnit', text: 'Fetch Sequencing Unit', endpoint: 'sequencing_unit' },
  ];

  return (
    <div>
      <Nav />
      <h1>Query Test</h1>
      {buttons.map(button => (
        <button key={button.id} onClick={() => fetchData(button.endpoint)}>
          {button.text}
        </button>
      ))}
      <div 
        style={{
          marginTop: '20px',
          whiteSpace: 'pre-wrap',
          fontFamily: 'monospace'
        }}
      >
        {output}
      </div>
    </div>
  );
};

export default QueryTest;
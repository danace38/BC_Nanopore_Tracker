import React, { useState, useEffect } from 'react';
import Nav from "./Nav";

const DatabaseQuery = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [keyword, setKeyword] = useState('');
  const [tableName, setTableName] = useState('experiment');
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const tables = [
    'experiment', 'run', 'barcode', 'run_hardware', 'experiment_hardware',
    'library_prep', 'note', 'operator', 'participants', 'sample', 'sequencing_unit'
  ];

  useEffect(() => {
    fetchData();
  }, [currentPage, tableName, keyword]);

  const fetchData = async () => {
    try {
      let url = `http://localhost:8000/api/data/${tableName}?page=${currentPage}&limit=20`;
      if (keyword) {
        url += `&search=${encodeURIComponent(keyword)}`;
      }

      const response = await fetch(url);
      const result = await response.json();

      if (response.ok) {
        setData(result);
        setError(null);
      } else {
        setError(`Error: ${JSON.stringify(result)}`);
      }
    } catch (error) {
      setError(`Error: ${error.message}`);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  };

  const handleNextPage = () => {
    setCurrentPage(prev => prev + 1);
  };

  const handleTableChange = (e) => {
    setTableName(e.target.value);
    setCurrentPage(1);
    setKeyword('');
  };

  const handleSearch = () => {
    setCurrentPage(1);
    fetchData();
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: '20px' }}>
       <Nav />
      <h1>Database Query with Search</h1>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
        <div>
          <label htmlFor="tableSelect">Select Table:</label>
          <select id="tableSelect" value={tableName} onChange={handleTableChange}>
            {tables.map(table => (
              <option key={table} value={table}>{table}</option>
            ))}
          </select>
        </div>
        <div>
          <input 
            type="text" 
            value={keyword} 
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Enter keyword to search"
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>

      <div style={{ marginTop: '10px' }}>
        <button onClick={handlePrevPage}>Previous Page</button>
        <span>Page: {currentPage}</span>
        <button onClick={handleNextPage}>Next Page</button>
      </div>

      {error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
          <thead>
            <tr>
              {data.length > 0 && Object.keys(data[0]).map(key => (
                <th key={key} style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', backgroundColor: '#f4f4f4' }}>
                  {key}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                {Object.values(row).map((value, idx) => (
                  <td key={idx} style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default DatabaseQuery;
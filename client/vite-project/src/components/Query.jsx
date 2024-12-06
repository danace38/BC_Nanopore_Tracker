import React, { useState, useEffect } from 'react';
import Nav from "./Nav";
import './Query.css';

const Query = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [keyword, setKeyword] = useState('');
  const [tableName, setTableName] = useState('experiment');
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const tables = [
    'experiment', 'run', 'barcode', 'computer', 'library_prep', 'minion', 'operator', 'participants', 'sample', 'sequencing_unit'
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

  const handleEdit = (row) => {
    // Implement edit functionality here
    console.log('Edit row:', row);
  };

  const handleDelete = (row) => {
    // Implement delete functionality here
    console.log('Delete row:', row);
  };

  return (
    <div className="container">
      <Nav />
      <h1 className="header">Database Query with Search</h1>
      <div className="controls">
        <div>
          <label htmlFor="tableSelect">Select Table: </label>
          <select id="tableSelect" value={tableName} onChange={handleTableChange} className="select">
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
            className="input"
          />
          <button onClick={handleSearch} className="button">Search</button>
        </div>
      </div>

      {error ? (
        <p className="error">{error}</p>
      ) : (
        <div className="table-container">
          <table className="query-table">
            <thead>
              <tr>
                {data.length > 0 && Object.keys(data[0]).map(key => (
                  <th key={key} className="query-th">{key}</th>
                ))}
                {/* No Actions column */}
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index}>
                  {Object.values(row).map((value, idx) => (
                    <td key={idx} className="query-td">{value}</td>
                  ))}
                  {/* Edit and Delete buttons directly in the row */}
                  <td className="query-td">
                    <button onClick={() => handleEdit(row)} className="button edit-button">Edit</button>
                    <button onClick={() => handleDelete(row)} className="button delete-button">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <div className="pagination">
        <button onClick={handlePrevPage} className="button" disabled={currentPage === 1}>Previous Page</button>
        <span>Page: {currentPage}</span>
        <button onClick={handleNextPage} className="button">Next Page</button>
      </div>
    </div>
  );
};

export default Query;
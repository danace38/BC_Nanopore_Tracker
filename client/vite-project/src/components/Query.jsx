import React, { useState, useEffect } from 'react';
import Nav from "./Nav";
import Edit from './Edit';
import Delete from './Delete';
import './Query.css';

const Query = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [keyword, setKeyword] = useState('');
    const [tableName, setTableName] = useState('experiment');
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [editingRow, setEditingRow] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const tables = [
        'experiment', 'run', 'barcode', 'computer', 'library_prep', 
        'minion', 'operator', 'participant', 'sample', 'sequencing_unit'
    ];

    useEffect(() => {
        fetchData();
    }, [currentPage, tableName, keyword]);

    const fetchData = async () => {
        setIsLoading(true);
        setError(null);
        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            let url = `http://localhost:8000/api/data/${tableName}?page=${currentPage}&limit=20`;
            if (keyword) {
                url += `&search=${encodeURIComponent(keyword)}`;
            }
            const response = await fetch(url);
            const result = await response.json();

            if (response.ok) {
                setData(result);
            } else {
                throw new Error(`Error: ${JSON.stringify(result)}`);
            }
        } catch (error) {
            setError(`Failed to fetch data: ${error.message}`);
        } finally {
            setIsLoading(false);
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
        setEditingRow(row);
    };

    const handleSave = async (editedRow) => {
        setIsLoading(true);
        try {
            const response = await fetch(`http://localhost:8000/api/data/${tableName}/${editedRow.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(editedRow),
            });
            if (response.ok) {
                setEditingRow(null);
                fetchData();
            } else {
                throw new Error('Failed to update data');
            }
        } catch (error) {
            setError(`Error: ${error.message}`);
        } finally {
            setIsLoading(false);
        }
    };

    // Adjusted handleDelete function
    const handleDelete = async (row) => {
        if (window.confirm('Are you sure you want to delete this row?')) {
            setIsLoading(true);
            try {
                // Adjusted URL for DELETE request
                const url = `http://localhost:8000/api/delete/${tableName}/${row.id}`;
                console.log(`Sending DELETE request to: ${url}`);
                const response = await fetch(url, { method: 'DELETE' });
                if (!response.ok) throw new Error('Failed to delete data');
                fetchData(); // Refresh data after deletion
            } catch (error) {
                setError(`Error: ${error.message}`);
            } finally {
                setIsLoading(false);
            }
        }
    };

    return (
        <div className="container">
            <Nav />
            <h1 className="header">Database Query with Search</h1>
            <div className="controls">
                <div>
                    <label htmlFor="tableSelect">Select Table:</label>
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

            {isLoading ? (
                <p className="loading">Loading...</p>
            ) : error ? (
                <p className="error">{error}</p>
            ) : (
                <div className="table-container">
                    <table className="query-table">
                        <thead>
                            <tr>
                                {data.length > 0 && Object.keys(data[0]).map(key => (
                                    <th key={key} className="query-th">{key}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((row, index) => (
                                editingRow === row ? (
                                    <Edit
                                        key={index}
                                        row={row}
                                        onSave={handleSave}
                                        onCancel={() => setEditingRow(null)}
                                    />
                                ) : (
                                    <tr key={index}>
                                        {Object.values(row).map((value, idx) => (
                                            <td key={idx} className="query-td">{value}</td>
                                        ))}
                                        <td className="query-td">
                                            <button onClick={() => handleEdit(row)} className="edit-button">Edit</button>
                                            {/* Pass the row to Delete component */}
                                            <Delete onDelete={() => handleDelete(row)} />
                                        </td>
                                    </tr>
                                )
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
            
            <div className="pagination">
                <button onClick={handlePrevPage} className="pagination-button" disabled={currentPage === 1}>Previous Page</button>
                <span>Page: {currentPage}</span>
                <button onClick={handleNextPage} className="pagination-button">Next Page</button>
            </div>
        </div>
    );
};

export default Query;
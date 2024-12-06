import React from 'react';
import './BioDataTable.css';


const BioDataTable = ({ data }) => {
    return (
      <table className="bio-table">
        <thead>
          <tr>
            <th>Experimenter</th>
            <th> Experiment </th>
            <th>Library Prep Kit</th>
            <th>Location</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.experimenter_Name}</td>
              <td>{item.experiment_Name}</td>
              <td>{item.type}</td>
              <td>{item.location}</td>
              <td>
                <span className={`status-badge ${item.status.toLowerCase()}`}>
                  {item.status}
                </span>
              </td>
              <td>{item.date_Run}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default BioDataTable;
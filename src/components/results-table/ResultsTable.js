import React from 'react';
import { RefreshCcw, FlaskRound } from 'lucide-react';
import './ResultsTable.css';

const ResultsTable = () => (
  <div className="results-table">
    <table>
      <thead>
        <tr>
          <th>Mark</th>
          <th>Details</th>
          <th>Status</th>
          <th>Class/Description</th>
        </tr>
      </thead>
      <tbody>
        {[1, 2, 3, 4].map((_, index) => (
          <tr key={index}>
            <td>
              <div className="logo-placeholder"></div>
            </td>
            <td>
              <p className="bold-text">Meta Logo</p>
              <p>FACEBOOK INC.</p>
              <p className="small-text">88713620</p>
              <p className="small-text">26th Jan 2020</p>
            </td>
            <td>
              <span className="status-live">• Live/Registered</span>
              <p className="small-text">on 26 Jun 2020</p>
              <p className="status-expiry"><RefreshCcw size={12} className='refresh-icon' />26 Dec 2027</p>
            </td>
            <td>
              <p>Computer services, Social Media,</p>
              <p>Networking, Virtual Communities</p>
              <div className="class-tags">
                <span><FlaskRound size={14} className="flask-icon" /> Class 45</span>
                <span><FlaskRound size={14} className="flask-icon" /> Class 8</span>
                <span><FlaskRound size={14} className="flask-icon" /> Class 8</span>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default ResultsTable;

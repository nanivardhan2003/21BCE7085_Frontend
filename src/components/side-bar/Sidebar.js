import React, { useState } from 'react';
import { Search, Filter, Share2, Menu } from 'lucide-react';
import './Sidebar.css';

const Sidebar = () => {
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [selectedOwner, setSelectedOwner] = useState('Tesla, Inc.');
  const [selectedTab, setSelectedTab] = useState('Owners');
  const [displayMode, setDisplayMode] = useState('Grid View');
  const statuses = [
    { name: 'All', color: '#3b82f6' },
    { name: 'Registered', color: '#10b981' },
    { name: 'Pending', color: '#f59e0b' },
    { name: 'Abandoned', color: '#ef4444' },
    { name: 'Others', color: '#6b7280' }
  ];
  const renderOwners = () => (
    <>
      <div className="sidebar-search-wrapper">
        <Search size={20} className="search-icon" />
        <input
          type="text"
          placeholder="Search Owners"
          className="sidebar-search-input"
        />
      </div>
      {['Tesla, Inc.', 'LEGALFORCE RAPC.', 'SpaceX Inc.', 'Space X Inc.'].map((owner, index) => (
        <div key={index} className="owner-item">
          <input
            type="checkbox"
            checked={owner === selectedOwner}
            onChange={() => setSelectedOwner(owner)}
          />
          <label>{owner}</label>
        </div>
      ))}
    </>
  );

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <button className="filter-icon-button"><Filter size={20} /> Filter</button>
        <button className="round-icon-button"><Share2 size={20} /></button>
        <button className="round-icon-button"><Menu size={20} /></button>
      </div>

      <div className="filter-section">
        <h3>Status</h3>
        <div className="status-options">
          {statuses.map((status) => (
            <button
              key={status.name}
              className={`status-button ${selectedStatus === status.name ? 'selected' : ''}`}
              onClick={() => setSelectedStatus(status.name)}
              style={{
                '--status-color': status.color,
                backgroundColor: selectedStatus === status.name ? status.color : 'transparent',
                color: selectedStatus === status.name ? 'white' : 'black'
              }}
            >
              {status.name !== 'All' && (
                <span
                  className="status-dot"
                  style={{ backgroundColor: status.color }}
                />
              )}
              {status.name}
            </button>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <div className="tabs">
          {['Owners', 'Law Firms', 'Attorneys'].map((tab) => (
            <button
              key={tab}
              className={`tab-button ${selectedTab === tab ? 'active-tab' : ''}`}
              onClick={() => setSelectedTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="tab-content">
          {selectedTab === 'Owners' && renderOwners()}
        </div>
      </div>

      <div className="filter-section">
        <h3>Display</h3>
        <div className="display-options">
          {['Grid View', 'List View'].map((view) => (
            <button
              key={view}
              className={`display-button ${displayMode === view ? 'selected' : ''}`}
              onClick={() => setDisplayMode(view)}
            >
              {view}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
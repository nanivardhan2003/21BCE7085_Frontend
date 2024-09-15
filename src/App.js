import React from 'react';
import Header from './components/header/Header';
import SearchResults from './components/search-results/SearchResults';
import ResultsTable from './components/results-table/ResultsTable';
import Sidebar from './components/side-bar/Sidebar';
import './App.css';

const App = () => (
  <div className="app">
    <Header />
    <div className="main-content">
      <div className="results-section">
        <SearchResults />
        <ResultsTable />
      </div>
      <Sidebar />
    </div>
  </div>
);

export default App;

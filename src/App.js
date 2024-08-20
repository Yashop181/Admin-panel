import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './SideBar';
import MainContent from './MainContent';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <MainContent/>
      </div>
    </Router>
  );
}

export default App;

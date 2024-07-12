
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Feature1 from './feature1';
import Dashboard from './Dashboard';
import Sidebar from './component/Sidebar/Sidebar';
import Header from './component/Header/Header';
import DashAccount from './DashAccount';
import Message from './Message';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  return (

      <Router>
          <div className="app-container">
              <Header />
              <div className="content-container">
                  <Sidebar />
                  <div className="content">
                      <Routes>
                          <Route path="/dashboard" element={<Dashboard />} />
                          <Route path="/feature1" element={<Feature1 />} />
                          <Route path="/account" element={<DashAccount />} />
                          <Route path="/" element={<Dashboard />} />
                          <Route path="/message" element={<Message />} />
                      </Routes>
                  </div>
              </div>
          </div>
      </Router>
  );
}
export default App;

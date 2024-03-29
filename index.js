import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Interface from './components/PeripheralPages/Interface'
import ReactGA from 'react-ga'
import DocPage from './components/DocumentationPage/DocPage';
import Experience from './components/Roadmap/Experience'
import RoadmapPage from './components/Roadmap2/Page/RoadmapPage';
import InterfacePage from './components/Interface3D/Page/InterfacePage';

import {
    BrowserRouter as Router,
    Route,
    Routes
  } from "react-router-dom";
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <Routes>
            <Route path = "/" element = {<App />} />
            <Route path = "/litepaper" element = {<RoadmapPage />} />
            <Route path = "/interface" element = {<InterfacePage />} />
            <Route path = "/documentation" element = {<DocPage />} />
        </Routes>
    </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
ReactGA.initialize('G-T4TQ0XJRZM')
ReactGA.pageview(window.location.pathname + window.location.search);
reportWebVitals();

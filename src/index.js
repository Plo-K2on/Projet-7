import React from 'react';
// eslint-disable-next-line
import ReactDOM, { createRoot } from 'react-dom/client';
import './index.css';
import Home from './Pages/Home';
import Fiche from './Pages/Fiche';
import Propos from './Pages/Propos';
import Error from './Pages/404';
import reportWebVitals from './reportWebVitals';
import Navigation from './Components/Navigation';
import Footer from './Components/Footer';
import './Styles/Index.css';
import 'typeface-montserrat';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => (
  <div className='container'>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/propos" element={<Propos />} />
      <Route path="/fiche/:id" element={<Fiche />} />
      <Route path="*" element={<Error />} />
    </Routes>
    <Footer />
  </div>
)

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
)

reportWebVitals();

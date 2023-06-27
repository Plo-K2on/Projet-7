import React from 'react';
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
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//     errorElement: <Error />,
//   },

//   {
//     path: "/fiche/:id",
//     element: <Fiche />,
//     errorElement: <Error />,
//   },

//   {
//     path: "/Propos",
//     element: <Propos />,
//     errorElement: <Error />,
//   },

//   {
//     path: "/404",
//     element: <Error />,
//   }
// ]);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <div className='container'>
//       <Navigation />
//       <RouterProvider router={router} />
//       <Footer />
//     </div>
    
//   </React.StrictMode>
// );

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

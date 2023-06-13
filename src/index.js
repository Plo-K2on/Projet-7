import React from 'react';
import ReactDOM from 'react-dom/client';
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
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },

  {
    path: "/fiche/:id",
    element: <Fiche />,
  },

  {
    path: "/Propos",
    element: <Propos />,
  },

  {
    path: "/404",
    element: <Error />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='container'>
      <Navigation />
      <RouterProvider router={router} />
      <Footer />
    </div>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

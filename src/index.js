import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import FAQ from './faq';



import Adopt from './Adoption';
import AdoptaDog from './AdoptaDog';
import AdoptaCat from './AdoptaCat';
import Petpage from './Petpage';
import Adoptform from './Adoptform';
ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/faq" element={<FAQ />} />
      <Route path="/AdoptaDog" element={<AdoptaDog/>} />
      <Route path="/AdoptaCat" element={<AdoptaCat/>} />
      <Route path="/Petpage" element={<Petpage/>} />
      <Route path="/Adoptform" element={<Adoptform/>} />
      <Route path="/Adoption" element={<Adopt />} />
      
      <Route path="/" element={<App />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);

import React from 'react';
import Demo from './Demo';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';

import NotFound from './pages/NotFountPage';
import AboutePage from './pages/aboutePage';

const App = () => {
   

  return (
    <div>
      

   
   <BrowserRouter>
    <Routes>
   <Route path='/' element={<HomePage/>} />
   <Route path='/product' element={<ProductPage/>} />
    <Route path='/about' element={<AboutePage/>} />
    <Route path='/*' element={<NotFound/>} />

    </Routes>
   </BrowserRouter>





    </div>
  );
};

export default App;
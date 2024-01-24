import React from 'react';
import { Route, Routes } from 'react-router-dom';

import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import Order from '../Pages/Order/Order';

const AppRoutes = () => {
   
    return (
      <Routes >
        <Route
          path="/"
          element={<Home/>}
          errorElement={<ErrorPage />}
        />
        <Route
          path="/order"
          element={<Order/>}
          errorElement={<ErrorPage />}
        />
        
       <Route
          path="/*"
          errorElement={<ErrorPage />}
        />
      </Routes>
    );
}

export default AppRoutes;
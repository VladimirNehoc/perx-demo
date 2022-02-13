import React from 'react';
import {
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';

const Main = React.lazy(() => import('./pages/Main'));
const Basket = React.lazy(() => import('./pages/Basket'));

const AppRoutes = () => (
  <Routes>
    <Route path="/main" element={<Main />} />
    <Route path="/basket" element={<Basket />} />
    <Route path="*" element={<Navigate to="/main" />} />
  </Routes>
);

export default AppRoutes;

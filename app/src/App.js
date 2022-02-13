import React, { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import api from 'api';
import AppRoutes from './AppRoutes';

import basketActions from './store/basket/actions';

import './style.less';

const { addFromStorage } = basketActions;

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Получение корзины из localStorage
    try {
      const basketJSON = localStorage.getItem('basket');
      const basketData = JSON.parse(basketJSON);

      dispatch(addFromStorage(basketData));
    } catch (e) {
      localStorage.removeItem('basket');
    }

    // Получение актуальных дилеров
    api.get('dealers')
      .then((res) => {
        console.log('Актуальные ID дилеров -', res.data);
      });
  }, []);

  return (
    <div className="app">
      <Suspense fallback={<div>Загрузка...</div>}>
        <AppRoutes />
      </Suspense>
    </div>
  );
};

export default App;

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import _ from 'lodash';

import api from 'api';

import Card from 'containers/Card';
import Loader from 'components/Loader';
import Header from 'containers/Header';
import BasketButton from 'components/BasketButton';

import mainActions from 'store/main/actions';

import './style.less';

const { setItems, setIsLoadingItems } = mainActions;

const Main = () => {
  const dispatch = useDispatch();

  const { items, isLoadingItems } = useSelector((state) => state.main);
  const { dealers } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(setIsLoadingItems(true));

    api.get('goods', { dealers: dealers || [] }).then((res) => {
      if (res.error) {
        console.log(res.error);
      } else {
        dispatch(setItems(res.data));
      }

      dispatch(setIsLoadingItems(false));
    });
  }, []);

  if (isLoadingItems) {
    return <Loader />;
  }

  return (
    <div className="page-main">
      <Header
        title="Список товаров"
      >
        <BasketButton />
      </Header>

      <div className="cards-container">
        {
          _.map(items, (item, index) => (
            <Card
              key={`${item.id}-${index}`}
              item={item}
            />
          ))
        }
      </div>
    </div>
  );
};

export default Main;

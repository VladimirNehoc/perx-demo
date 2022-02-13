import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';

import api from 'api';

import Header from 'containers/Header';
import Home from 'assets/react-images/Home';
import basketActions from 'store/basket/actions';
import Content from './Content';

import './style.less';

const {
  setIsLoadingProductsData,
  setProductsData,
  resetBasket,
} = basketActions;

const Basket = () => {
  const dispatch = useDispatch();
  const { basket } = useSelector((state) => state);

  const {
    items,
    productsData,
  } = basket;

  const totalSum = _.reduce(items, (result, count, id) => {
    const data = productsData[id];

    if (_.isEmpty(data)) return result;

    return result + (data.price * count);
  }, 0);

  useEffect(() => {
    dispatch(setIsLoadingProductsData(true));

    const idsString = _.join(_.keys(items), ',');

    api.get('goods', { dealers: idsString })
      .then((res) => {
        if (res.error) {
          console.log(res.error);
        } else {
          const data = _.keyBy(res.data, 'id');

          dispatch(setProductsData(data));
        }

        dispatch(setIsLoadingProductsData(false));
      });
  }, []);

  return (
    <div className="page-basket">
      <Header title="Корзина">
        <Link to="/main" style={{ fontSize: 16, textDecoration: 'none', color: '#000' }}>
          <Home style={{ width: 30 }} />
        </Link>
      </Header>

      {
        !_.isEmpty(items) && (
          <div className="page-basket_info">
            <div className="page-basket_info_reset-button">
              <button
                type="button"
                onClick={() => dispatch(resetBasket())}
              >
                Очистить корзину
              </button>
            </div>

            <div className="page-basket_info_total">
              <span>{`Итого: ${totalSum} $`}</span>
            </div>
          </div>
        )
      }

      <Content />
    </div>
  );
};

export default Basket;

import React from 'react';
import { useSelector } from 'react-redux';
import {
  Link,
} from 'react-router-dom';
import _ from 'lodash';

import BasketLogo from 'assets/react-images/Basket';

import './style.less';

const BasketButton = () => {
  const { basket } = useSelector((state) => state);

  const itemsCount = _.reduce(basket.items, (result, count) => {
    if (_.isNumber(count)) {
      return result + count;
    }

    return result;
  }, 0);

  return (
    <Link to="/basket">
      <div className="basket-button">
        <BasketLogo style={{ width: 30 }} />

        {itemsCount > 0 && (
        <div className="basket-button_count">
          <span>{itemsCount}</span>
        </div>
        )}
      </div>
    </Link>
  );
};

export default BasketButton;

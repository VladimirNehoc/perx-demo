import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';

import basketActions from 'store/basket/actions';
import ItemsChanger from 'components/ItemsChanger';

const { addToBasket, removeFromBasket } = basketActions;

const ProductActions = ({
  itemId,
}) => {
  const dispatch = useDispatch();

  const { basket } = useSelector((state) => state);

  const { items } = basket;

  const alreadyInBasket = _.hasIn(items, itemId);
  const count = _.get(items, `[${itemId}]`, 0);

  if (alreadyInBasket) {
    return (
      <ItemsChanger
        count={count}
        onAdd={() => dispatch(addToBasket(itemId))}
        onRemove={() => dispatch(removeFromBasket(itemId))}
        disableAdd={count > 8}
      />
    );
  }

  return (
    <div
      role="button"
      className="buy-button"
      tabIndex={0}
      onClick={() => dispatch(addToBasket(itemId))}
      onKeyPress={() => dispatch(addToBasket(itemId))}
    >
      <span>Купить</span>
    </div>
  );
};

ProductActions.propTypes = {
  itemId: PropTypes.string.isRequired,
};

export default ProductActions;

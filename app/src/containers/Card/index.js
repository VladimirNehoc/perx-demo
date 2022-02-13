import React from 'react';
import PropTypes from 'prop-types';

import Image from 'components/Image';
import ProductActions from './ProductActions';

import './style.less';

const Card = ({
  item,
}) => {
  const {
    id,
    name,
    price,
    image,
  } = item;

  return (
    <div className="card">
      <div className="card_title">
        <span>{name}</span>
      </div>
      <div className="card_image">
        <Image src={image} />
      </div>
      <div className="card_body">
        <div className="card_body_price">
          <span>
            {`${price} $`}
          </span>
        </div>
        <div className="card_body_actions">
          <ProductActions
            itemId={id}
          />
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.oneOfType([PropTypes.string]),
  }).isRequired,
};

export default Card;

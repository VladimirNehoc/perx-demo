import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';

import Image from 'components/Image';
import ItemsChanger from 'components/ItemsChanger';
import Empty from 'components/Empty';

import basketActions from 'store/basket/actions';

const {
  addToBasket,
  removeFromBasket,
} = basketActions;

const Content = () => {
  const dispatch = useDispatch();
  const { basket } = useSelector((state) => state);

  const {
    items,
    productsData,
  } = basket;

  if (_.isEmpty(items)) {
    return <Empty title="Корзина пуста" />;
  }

  return (
    <div className="basket-items-container">
      {
          _.map(items, (count, id, index) => {
            const hasProduct = !_.isEmpty(productsData[id]);
            const productData = productsData[id];

            return (
              <div
                key={`${id}-${index}`}
                className="basket-items-container_item"
              >
                {
                  !hasProduct
                    ? (
                      <span style={{ padding: '0 10px' }}>Продукт не найден</span>
                    ) : (
                      <>
                        <div className="basket-items-container_item_image">
                          <Image src={productData.image} />
                        </div>
                        <div className="basket-items-container_item_name">
                          <span>{productData.name}</span>
                        </div>
                        <div className="basket-items-container_item_count">
                          <ItemsChanger
                            count={count}
                            onAdd={() => dispatch(addToBasket(id))}
                            onRemove={() => dispatch(removeFromBasket(id))}
                            disableAdd={count > 8}
                          />
                        </div>
                      </>
                    )
                }
              </div>
            );
          })
        }
    </div>
  );
};

export default Content;

import _ from 'lodash';
import actions from './actions';

export const initialState = {
  isLoadingItems: false,
  isLoadingProductsData: false,
  items: {},
  productsData: {},
};

const reducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case actions.SET_IS_LOADING_ITEMS:
      return {
        ...state,
        isLoadingItems: payload,
      };
    case actions.SET_IS_LOADING_PRODUCTS_DATA:
      return {
        ...state,
        isLoadingProductsData: payload,
      };
    case actions.SET_ITEMS:
      return {
        ...state,
        items: payload,
      };
    case actions.SET_PRODUCTS_DATA:
      return {
        ...state,
        productsData: payload,
      };
    case actions.ADD_TO_BASKET: {
      const newItems = { ...state.items };
      const itemId = payload;

      if (_.hasIn(newItems, itemId)) {
        newItems[itemId] = newItems[itemId] ? newItems[itemId] + 1 : 1;
      } else {
        newItems[itemId] = 1;
      }

      localStorage.setItem('basket', JSON.stringify(newItems));

      return {
        ...state,
        items: newItems,
      };
    }
    case actions.REMOVE_FROM_BASKET: {
      const newItems = { ...state.items };
      const ItemId = payload;

      if (_.hasIn(newItems, ItemId)) {
        if (newItems[ItemId] === 1 || !newItems[ItemId]) {
          delete newItems[ItemId];
        } else {
          newItems[ItemId] -= 1;
        }
      }

      localStorage.setItem('basket', JSON.stringify(newItems));

      return {
        ...state,
        items: newItems,
      };
    }
    case actions.ADD_FROM_STORAGE: {
      return {
        ...state,
        items: payload,
      };
    }
    case actions.RESET_BASKET: {
      localStorage.removeItem('basket');

      return {
        ...state,
        items: {},
      };
    }
    default:
      return state;
  }
};

export default reducer;

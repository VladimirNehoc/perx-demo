const page = 'BASKET';

const actions = {
  SET_IS_LOADING_ITEMS: `${page}_SET_IS_LOADING`,
  SET_IS_LOADING_PRODUCTS_DATA: `${page}_SET_IS_LOADING_PRODUCTS_DATA`,
  SET_ITEMS: `${page}_SET_ITEMS`,
  SET_PRODUCTS_DATA: `${page}_SET_PRODUCTS_DATA`,
  ADD_TO_BASKET: `${page}_ADD_TO_BASKET`,
  REMOVE_FROM_BASKET: `${page}_REMOVE_FROM_BASKET`,
  ADD_FROM_STORAGE: `${page}_ADD_FROM_STORAGE`,
  RESET_BASKET: `${page}_RESET_BASKET`,

  setIsLoading: (isLoading) => ({
    type: actions.SET_IS_LOADING_ITEMS,
    payload: isLoading,
  }),

  setIsLoadingProductsData: (isLoading) => ({
    type: actions.SET_IS_LOADING_PRODUCTS_DATA,
    payload: isLoading,
  }),

  setItems: (items) => ({
    type: actions.SET_ITEMS,
    payload: items,
  }),

  setProductsData: (productsData) => ({
    type: actions.SET_PRODUCTS_DATA,
    payload: productsData,
  }),

  addToBasket: (id) => ({
    type: actions.ADD_TO_BASKET,
    payload: id,
  }),

  removeFromBasket: (id) => ({
    type: actions.REMOVE_FROM_BASKET,
    payload: id,
  }),

  addFromStorage: (data) => ({
    type: actions.ADD_FROM_STORAGE,
    payload: data,
  }),

  resetBasket: () => ({
    type: actions.RESET_BASKET,
  }),
};

export default actions;

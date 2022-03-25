const page = 'MAIN';

const actions = {
  SET_IS_LOADING_ITEMS: `${page}_SET_IS_LOADING`,
  SET_ITEMS: `${page}_SET_ITEMS`,

  setIsLoadingItems: (isLoading) => ({
    type: actions.SET_IS_LOADING_ITEMS,
    payload: isLoading,
  }),

  setItems: (items) => ({
    type: actions.SET_ITEMS,
    payload: items,
  }),
};

export default actions;

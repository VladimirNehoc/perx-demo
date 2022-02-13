import actions from './actions';

export const initialState = {
  isLoadingItems: false,
  items: [],
};

const reducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case actions.SET_IS_LOADING_ITEMS:
      return {
        ...state,
        isLoadingItems: payload,
      };
    case actions.SET_ITEMS:
      return {
        ...state,
        items: payload,
      };
    default:
      return state;
  }
};

export default reducer;

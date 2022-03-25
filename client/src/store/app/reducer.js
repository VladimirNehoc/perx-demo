import actions from './actions';

const appInitialState = {
  dealers: [],
};

const reducer = (state = appInitialState, { type, payload } = {}) => {
  switch (type) {
    case actions.SET_DEALERS:
      return {
        ...state,
        dealers: payload,
      };
    default:
      return state;
  }
};

export default reducer;

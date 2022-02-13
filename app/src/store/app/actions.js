const page = 'APP';

const actions = {
  SET_DEALERS: `${page}_SET_DEALERS`,

  setDealers: (dealers) => ({
    type: actions.SET_DEALERS,
    payload: dealers,
  }),
};

export default actions;

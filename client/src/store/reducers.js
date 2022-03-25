import { combineReducers } from 'redux';

import app from './app/reducer';
import main from './main/reducer';
import basket from './basket/reducer';

export default combineReducers({
  app,
  main,
  basket,
});

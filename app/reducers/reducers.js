/**
 * @Author: zhangb
 * @Date: 2019-07-09 10:45:57
 * @Email: lovewinders@163.com
 * @Last Modified by: zhangb
 * @Last Modified time: 2019-09-12 16:28:28
 * @Description: 
 */
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import undoable from 'redux-undo';

import experiment from './Experiment';
import layout from './Layout';

import undoReducer from "./undoReducer";

export default (history) => combineReducers({
  router: connectRouter(history),
  experiment,
  layout,
  // undoReducer,
  undoable: undoable(undoReducer),
  //   ... // rest of your reducers
})
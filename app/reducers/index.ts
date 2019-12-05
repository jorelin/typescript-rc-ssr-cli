import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import undoable from 'redux-undo';

import experiment from './Experiment';
import layout from './Layout';

import undoReducer from './undoReducer';

export default (history): any => combineReducers({
    router: connectRouter(history),
    experiment,
    layout,
    // undoReducer,
    undoable: undoable(undoReducer),
    //   ... // rest of your reducers
});
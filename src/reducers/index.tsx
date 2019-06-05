import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

// Reducers
import boardReducer from './board';
import solveOptionsReducer from './solveOptions';

const rootReducer = (history: any) => combineReducers({
    board: boardReducer,
    solveOptions: solveOptionsReducer,
    router: connectRouter(history),
});

export default rootReducer;

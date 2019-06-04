import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

// Reducers
import boardReducer from './board';
// import boardSizeReducer from './boardSize';
// import lettersReducer from './letters';
import solveOptionsReducer from './solveOptions';

const rootReducer = (history: any) => combineReducers({
    board: boardReducer,
    // boardSize: boardSizeReducer,
    // letters: lettersReducer,
    solveOptions: solveOptionsReducer,
    router: connectRouter(history),
});

export default rootReducer;

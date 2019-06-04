import { createBrowserHistory } from 'history';
import {
    applyMiddleware,
    createStore,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

export const history = createBrowserHistory();

export default function configureStore(preloadedState: {}) {
    const store = createStore(
        rootReducer(history),
        preloadedState,
        composeWithDevTools(
            applyMiddleware(
                routerMiddleware(history),
                thunk,
            ),
        ),
    );

    return store;
};

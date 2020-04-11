/*import  { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './context/GlobalState';

const initialState = {};

const middleWare = [thunk];

const store = createStore(rootReducer, initialState, compose(
    rootReducer,
    applyMiddleware(...middleWare),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

export default store;
*/
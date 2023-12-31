import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import initialState from './InitialState';
import tablesReducer from './tablesRedux';

export const getAllTables = (state) => state.tables;

const subreducers = {
    tables: tablesReducer,
}

const reducer = combineReducers(subreducers);
const store = createStore(
    reducer,
    initialState,

    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
);

export default store;
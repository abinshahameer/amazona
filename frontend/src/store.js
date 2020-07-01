import {createStore, combineReducers, compose  } from 'redux' 
import { productListReducer } from './reducers/productReducers';
const initialState={};
const reducer=combineReducers({
    productList: productListReducer,
})
const store=createStore(reducer,initialState,compose(applyMiddleware(thunnk)));
export default store;
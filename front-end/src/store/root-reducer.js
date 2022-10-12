import { combineReducers } from 'redux';
import { orderReducer } from './order/order-reducer';
import { productReducer } from './products/products-reducer';
import { userReducer } from './users/user-reducer';


export const rootReducer = combineReducers({
  products: productReducer,
  order: orderReducer,
  user: userReducer,
});
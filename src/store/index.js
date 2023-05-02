import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import { applyMiddleware } from 'redux';
import productsReducer from './products/products';
import usersReducer from './users/users';
import thunkMiddleware from 'redux-thunk';

const store = configureStore(
  { reducer: { productsReducer, usersReducer } },
  applyMiddleware(thunkMiddleware, createLogger())
);

export default store;

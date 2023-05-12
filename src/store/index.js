import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import { applyMiddleware } from 'redux';
import productsReducer from './products/products';
import usersReducer from './users/users';
import authReducer from './auth/auth';
import thunkMiddleware from 'redux-thunk';

const store = configureStore(
  { reducer: { authReducer, productsReducer, usersReducer } },
  applyMiddleware(thunkMiddleware, createLogger())
);

export default store;

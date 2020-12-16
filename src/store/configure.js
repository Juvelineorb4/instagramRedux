import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducer';
import { createBrowserHistory } from 'history';

const logger = createLogger({
  level: 'info',
  collapsed: true
});

export const history = createBrowserHistory();

export const store = configureStore({
  reducer: rootReducer,
  middleware: [logger, ...getDefaultMiddleware()]
});
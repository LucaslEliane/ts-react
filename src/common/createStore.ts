import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/reducers';
import { Todos } from './todos/todos';
import loggerMiddleware from './middlewares/logger-middleware';

export default createStore<Todos>(
  rootReducer,
  applyMiddleware(
    loggerMiddleware
  )
);
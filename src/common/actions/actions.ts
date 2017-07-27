import { createAction } from 'redux-actions';
import { Todo } from '../todos/todos';

export const ADD_TODO: string = 'ADD_TODO';
export const DELETE_TODO: string = 'DELETE_TODO';
export const COMPLETE_TODO: string = 'COMPLETE_TODO';
export const EDIT_TODO: string = 'EDIT_TODO';

export const addTodo = createAction<Todo, Todo>(
  ADD_TODO,
  todo => todo
);

export const deleteTodo = createAction<number, Todo>(
  DELETE_TODO,
  todo => todo.id
);

export const completeTodo = createAction<Todo, Todo>(
  COMPLETE_TODO,
  todo => todo
);

export const editTodo = createAction<Todo, Todo>(
  EDIT_TODO,
  todo => todo
);
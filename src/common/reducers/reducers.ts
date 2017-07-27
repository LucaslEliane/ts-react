import {
  ADD_TODO,
  DELETE_TODO,
  COMPLETE_TODO,
  EDIT_TODO
} from '../actions/actions';

import {
  Todos,
  Todo
} from '../todos/todos';

import { handleActions } from 'redux-actions';

interface Action {
  payload: Todo;
  action: string;
}

const initialState: Todos = [
  {
    id: 0,
    content: 'this is the initial todo',
    isComplete: false
  }
];

const rootReducer =  handleActions<Todos, Todo>(
  {
    [ADD_TODO]: (state: Todos, action: Action) => {
      const { payload } = action;
      const maxId = state.reduce((prev, value) => {
        if (value.id > prev) {
          return value.id;
        }
        return prev;
      }, 0);
      return [{
        id: maxId + 1,
        isComplete: payload.isComplete,
        content: payload.content
      }, ...state];
    },
    [DELETE_TODO]: (state: Todos, action: { payload: number, action: string }) => {
      const returnValue: Todos = [];
      const deleteId: number = action.payload;
      for (let value of state) {
        value.id === deleteId || returnValue.push(value);
      }
      return returnValue;
    },
    [COMPLETE_TODO]: (state: Todos, action: { payload: Todo, action: string }) => {
      const { payload } = action;
      const returnValue: Todos = [...state];
      for (let key in returnValue) {
        if (returnValue[key].id === payload.id) {
          returnValue[key].isComplete = !returnValue[key].isComplete;
          break;
        }
      }
      return returnValue;
    },
    [EDIT_TODO]: (state: Todos, action: { payload: Todo, action: string }) => {
      const { payload } = action;
      const returnValue: Todos = [...state];
      for (let key in returnValue) {
        if (returnValue[key].id === payload.id) {
          returnValue[key].content = payload.content;
          break;
        }
      }
      return returnValue;
    }
  },
  initialState
);

export default rootReducer;
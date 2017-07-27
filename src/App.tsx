import * as React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './common/createStore';
import TodoList from './components/TodoList/TodoList';
import AddTodo from './components/AddTodo/AddTodo';

class App extends React.Component<{}, {}> {
  render() {
    return (
      <Provider store={store}>
        <main>
          <AddTodo />
          <TodoList />
        </main>
      </Provider>
    );
  }
}

export default App;
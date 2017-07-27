import * as React from 'react';
import './main.css';
import { Todos, Todo } from '../../common/todos/todos';
import {
  ListGroup
} from 'react-bootstrap';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import TodoItem from '../TodoItem/TodoItem';
import { deleteTodo, completeTodo, editTodo } from '../../common/actions/actions';

interface TodoListProps {
  todos: Todos;
  dispatch: Dispatch<{}>;
}

class TodoList extends React.Component<TodoListProps, {}> {
  constructor(props: TodoListProps) {
    super(props);
    this.handleDeleteTodo = this.handleDeleteTodo.bind(this);
    this.handleCompleteTodo = this.handleCompleteTodo.bind(this);
    this.handleEditTodo = this.handleEditTodo.bind(this);
  }
  handleDeleteTodo(todo: Todo) {
    const { dispatch } = this.props;
    dispatch(deleteTodo(todo));
  }
  handleCompleteTodo(todo: Todo) {
    const { dispatch } = this.props;
    dispatch(completeTodo(todo));
  }
  handleEditTodo(todo: Todo) {
    const { dispatch } = this.props;
    dispatch(editTodo(todo));
  }
  render() {
    const todos: Todos = this.props.todos;
    return (
      <ListGroup>
        {
          todos.map((value) => {
            return (
              <TodoItem
                todo={value}
                key={JSON.stringify(value)}
                deleteTodo={this.handleDeleteTodo}
                completeTodo={this.handleCompleteTodo}
                editTodo={this.handleEditTodo}
              />
            );
          })
        }
      </ListGroup>
    );
  }
}

function mapStateToProps(state: Todos) {
  return {
    todos: state
  };
}

export default connect(mapStateToProps)(TodoList);
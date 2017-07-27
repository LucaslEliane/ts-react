import * as React from 'react';
import './main.css';
import {
  ListGroupItem,
  Button,
  FormGroup,
  FormControl
} from 'react-bootstrap';
import {
  Todo
} from '../../common/todos/todos';

interface TodoItemProps {
  todo: Todo;
  editTodo: (todo: Todo) => void;
  deleteTodo: (todo: Todo) => void;
  completeTodo: (todo: Todo) => void;
  key?: string;
}

interface TodoItemState {
  editing: boolean;
  editingText: string;
}

class TodoItem extends React.Component<TodoItemProps, TodoItemState> {
  constructor(props: TodoItemProps) {
    super(props);
    this.state = {
      editing: false,
      editingText: this.props.todo.content
    };
    this.handleDoubleClick = this.handleDoubleClick.bind(this);
    this.getMainElement = this.getMainElement.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }
  handleDoubleClick() {
    this.setState({
      editing: true
    });
  }
  handleBlur() {
    const { editTodo, todo } = this.props;
    const { editingText } = this.state;
    this.setState({
      editing: false
    });
    editTodo({
      id: todo.id,
      isComplete: todo.isComplete,
      content: editingText
    });
  }
  handleChange(e: any) {
    const target = e.target;
    this.setState({
      editingText: target.value
    });
  }
  getMainElement(editing: boolean) {
    const { todo, deleteTodo, completeTodo } = this.props;
    const { editingText } = this.state;
    if (editing) {
      return (
        <ListGroupItem>
          <FormGroup>
            <FormControl type="text" value={editingText} onBlur={this.handleBlur} onChange={this.handleChange}/>
          </FormGroup>
        </ListGroupItem>
      );
    } else {
      return (
        <ListGroupItem className={todo.isComplete ? 'completed-item list-item' : 'list-item'}>
          <p onDoubleClick={this.handleDoubleClick}>{`${todo.id}  ${todo.content}`}</p>
          <Button bsStyle="danger" className="delete-button" onClick={() => deleteTodo(todo)}>DELETE</Button>
          <Button bsStyle="success" className="complete-button" onClick={() => completeTodo(todo)}>
            {todo.isComplete ? 'CANCEL' : 'COMPLETE'}
          </Button>
        </ListGroupItem>
      );
    }
  }
  render() {
    const { editing } = this.state;
    const element = this.getMainElement(editing);
    return (
      <div>
        {element}
      </div>
    );
  }
}

export default TodoItem;
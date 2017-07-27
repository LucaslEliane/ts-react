import * as React from 'react';
import './main.css';
import {
  FormGroup,
  FormControl,
  Button
} from 'react-bootstrap';
import {
  addTodo
} from '../../common/actions/actions';
import {
  connect
} from 'react-redux';
import {
  Todos
} from '../../common/todos/todos';
import { Dispatch } from 'redux';

interface AddTodoProps {
  dispatch: Dispatch<{}>;
}

class AddTodo extends React.Component<AddTodoProps, AddTodoState> {
  constructor(props: AddTodoProps) {
    super(props);
    this.state = {
      text: ''
    };
    this.handleAddTodoChange = this.handleAddTodoChange.bind(this);
    this.handleAddTodoClick = this.handleAddTodoClick.bind(this);
  }
  handleAddTodoClick(e: any) {
    const { text } = this.state;
    const { dispatch } = this.props;
    if (text !== '') {
      dispatch(addTodo({
        id: 0,
        isComplete: false,
        content: text
      }));
      this.setState({
        text: ''
      });
    }
  }
  handleAddTodoChange(e: any) {
    const target = e.target;
    this.setState({
      text: target.value
    });
  }
  render() {
    return (
      <FormGroup className="add-group">
        <FormControl
          type="text"
          placeholder="Input A New Todo Item!!!"
          className="add-input"
          onChange={this.handleAddTodoChange}
          value={this.state.text}
        />
        <Button bsStyle="primary" className="add-button" onClick={this.handleAddTodoClick}>
          ADD
        </Button>
      </FormGroup>
    );
  }
}

function mapStateToProps(state: Todos) {
  return {};
}

export default connect(mapStateToProps)(AddTodo);
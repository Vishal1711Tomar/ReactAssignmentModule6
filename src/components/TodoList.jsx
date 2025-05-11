import React, { useContext } from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import { TodoContext } from '../Context/TodoContext';

const TodoList = () => {
  const { todos, deleteTodo, searchTerm } = useContext(TodoContext);

  const filteredTodos = todos.filter(todo =>
    todo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ListGroup>
      {filteredTodos.map((todo, index) => (
        <ListGroup.Item
          key={index}
          className="d-flex justify-content-between align-items-center"
        >
          {todo}
          <Button variant="danger" size="sm" onClick={() => deleteTodo(index)}>
            Delete
          </Button>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default TodoList;

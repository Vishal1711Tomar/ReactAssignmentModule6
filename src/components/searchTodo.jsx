import React, { useContext } from 'react';
import { Form } from 'react-bootstrap';
import { TodoContext } from '../Context/TodoContext';

const SearchTodo = () => {
  const { searchTerm, setSearchTerm } = useContext(TodoContext);

  return (
    <Form.Control
      type="text"
      placeholder="Search tasks"
      className="mb-3"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};

export default SearchTodo;

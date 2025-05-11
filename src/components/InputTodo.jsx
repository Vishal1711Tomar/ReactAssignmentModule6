import React, { useContext, useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { TodoContext } from '../Context/TodoContext';

const InputTodo = () => {
  const [input, setInput] = useState('');
  const { addTodo } = useContext(TodoContext);

  const handleAdd = () => {
    const trimmed = input.trim();
    if (trimmed) {
      addTodo(trimmed);
      setInput('');
    }
  };

  return (
    <Row className="mb-3">
      <Col md={9}>
        <Form.Control
          type="text"
          placeholder="Enter a task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </Col>
      <Col md={3}>
        <Button variant="success" className="w-100" onClick={handleAdd}>
          Add
        </Button>
      </Col>
    </Row>
  );
};

export default InputTodo;

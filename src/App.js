import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Container, Navbar, Button } from 'react-bootstrap';
import { TodoProvider, TodoContext } from './Context/TodoContext';
import InputTodo from './components/InputTodo';
import TodoList from './components/TodoList';
import SearchTodo from './components/searchTodo';

const ClearAllButton = () => {
  const { clearAll } = React.useContext(TodoContext);
  return (
    <Button variant="outline-danger" onClick={clearAll} className="mb-3">
      Clear All
    </Button>
  );
};

function App() {
  return (
    <TodoProvider>
      <Navbar bg="primary" variant="dark" className="mb-4">
        <Container>
          <Navbar.Brand>Context To-Do App By Vishal Tomar</Navbar.Brand>
        </Container>
      </Navbar>

      <Container>
        <InputTodo />
        <SearchTodo />
        <ClearAllButton />
        <TodoList />
      </Container>
    </TodoProvider>
  );
}
export default App;

import { TodoCounter } from './components/todoCounter';
import { TodoSearch } from './components/todoSearch';
import { TodoList } from './components/todoList';
import { TodoItem } from './components/todoItem';
import { CreateTodoButton } from './components/createTodoButton';
import React from 'react';

//creo array d areas
const todos = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Tomar el curso de intro a React', completed: false },
  { text: 'Llorar con la llorona', completed: false },
  { text: 'L', completed: true }
];

function App() {
  return (
    /* uilizo React.Fragment en vez de un div */
    <React.Fragment>
      <TodoCounter total={10} completed={5}/>
      <TodoSearch />

      <TodoList>
        {/* todo lo q se desarrolle dentro del comp TodoList --> react lo pasa por props en children */}
        {
          todos.map(todo => (
            <TodoItem key={todo.text} text={todo.text} completed={todo.completed} />
          ))
        }
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}


export default App;

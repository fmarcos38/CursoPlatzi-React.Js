import { TodoCounter } from './components/todoCounter';
import { TodoSearch } from './components/todoSearch';
import { TodoList } from './components/todoList';
import { TodoItem } from './components/todoItem';
import { CreateTodoButton } from './components/createTodoButton';
import React, { useState } from 'react';

//NOTA: los estados se manejan en el componente padre, y se pasan por props a los hijos
//creo array d areas
const arrTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el curso de intro a React', completed: false },
  { text: 'Llorar con la llorona', completed: false },
  { text: 'Decidir de q mierda laburar', completed: true }
];


function App() {
  //estado para los todos
  const [todos, setTodos] = useState(arrTodos);
  //estado para el SEARCH
  const [search, setSearch] = useState(''); console.log(search);
  
  //variables para el total y completados
  const completedTodos = todos.filter( todo => !!todo.completed ).length;
  const totalTodos = todos.length;

  return (
    /* uilizo React.Fragment en vez de un div */
    <>
      <TodoCounter total={totalTodos} completed={completedTodos}/>
      <TodoSearch search={search} setSearch={setSearch}/>

      <TodoList>
        {/* todo lo q se desarrolle dentro del comp TodoList --> react lo pasa por props en children */}
        {
          arrTodos.map(todo => (
            <TodoItem key={todo.text} text={todo.text} completed={todo.completed} />
          ))
        }
      </TodoList>

      <CreateTodoButton />
    </>
  );
}


export default App;

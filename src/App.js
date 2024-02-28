import { TodoCounter } from './components/todoCounter';
import { TodoSearch } from './components/todoSearch';
import { TodoList } from './components/todoList';
import { TodoItem } from './components/todoItem';
import { CreateTodoButton } from './components/createTodoButton';
import React, { useState } from 'react';

//NOTA: los estados se manejan en el componente padre, y se pasan por props a los hijos
//creo array d areas
/* const arrTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el curso de intro a React', completed: false },
  { text: 'Llorar con la llorona', completed: false },
  { text: 'Decidir de q mierda laburar', completed: true }
]; */


function App() {

  //Manejo del localStorage
  const localStorageTodos = JSON.parse(localStorage.getItem('todos')); //este va a ser mi nuevo estado
  let todosInicial; //variable para el estado inicial con los todos del localStorage
  if(!localStorageTodos) { //si no hay nada en el localStorage creo un array vacio
    localStorage.setItem('todos', JSON.stringify([]));
  }else{
    todosInicial = localStorageTodos;
  }
  
  //funcion para actualizar el localStorage y el estado
  const saveTodos = (newTodos) => {
    const stringTodos = JSON.stringify(newTodos);
    localStorage.setItem('todos', stringTodos);
    setTodos(newTodos);
  };
  
  //estado para los todos
  const [todos, setTodos] = useState(todosInicial);
  //estado para el SEARCH
  const [search, setSearch] = useState('');
  
  //variables para el total y completados
  const completedTodos = todos.filter( todo => !!todo.completed ).length;
  const totalTodos = todos.length;
  
  //filtro los todos segun el search
  const searchToDos  = todos.filter(todo => todo.text.toLowerCase().includes(search.toLowerCase()));//paso todo a minus y comparo

  //funcion para marcar como completado
  const handlerComplete = (text) => {
    const todoIndex = todos.findIndex( todo => todo.text === text );
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos); //actualizo localStorage y estado
  };
  //funcion para borrar
  const handlerDelete = (text) => {
    const todoIndex = todos.findIndex( todo => todo.text === text );
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos); //actualizo localStorage y estado
  };


  return (
    /* uilizo React.Fragment en vez de un div */
    <>
      <TodoCounter total={totalTodos} completed={completedTodos}/>
      <TodoSearch search={search} setSearch={setSearch}/>

      <TodoList>
        {/* todo lo q se desarrolle dentro del comp TodoList --> react lo pasa por props en children */}
        {
          searchToDos.map(todo => (
            <TodoItem 
              key={todo.text} 
              text={todo.text} 
              completed={todo.completed} 
              handlerComplete={handlerComplete}
              handlerDelete={handlerDelete}
            />
          ))
        }
      </TodoList>

      <CreateTodoButton />
    </>
  );
}


export default App;

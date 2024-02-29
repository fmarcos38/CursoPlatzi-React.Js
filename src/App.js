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

//creacion de un Hooks personalizado para el manejo del localStorage
//el hook recibe el nombre del item y su valor inicial(q es un array vacio o cualquier estado inicial q se le pase al hook)
function useLocalStorage(itemName, initialValue) {
  //busco el item en el localStorage
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem; //variable para guardar el estado inical, osea lo q tenga el localStorage
  //si no existe el item en el localStorage lo creo
  if(!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  }else{
    parsedItem = JSON.parse(localStorageItem);
  }
  
  //creo estado local para el item del localStorage y lo inicializo con el valor q obtuve
  const [item, setItem] = useState(parsedItem);
  //creo funcion para guardar en el localStorage, es la q eporto en el rreturn
  const saveItem = (newItem) => {
    setItem(newItem);
    localStorage.setItem(itemName, JSON.stringify(newItem));
  };
  //retorno el estado y la funcion
  return [
    item,
    saveItem
  ];
}

function App() {    
  //estado para los todos - uso el hook personalizado
  //sino recuerdo lo q tiene el localStorage, escribo en la consola del inspector localStorage
  const [todos, setTodos] = useLocalStorage('todos', []);
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
    setTodos(newTodos); //actualizo localStorage y estado
  };
  //funcion para borrar
  const handlerDelete = (text) => {
    const todoIndex = todos.findIndex( todo => todo.text === text );
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos); //actualizo localStorage y estado
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

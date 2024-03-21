import React, { createContext, useState } from 'react';
import { useLocalStorage } from './useLocalStorage';

// Crear el contexto para los todos
const TodoContext = createContext();

// Componente TodoProvider
function TodoProvider({ children }) {
    // Estado de los todos obtenidos del localStorage
    const { item: todos, saveItem: saveTodos, loading, error } = useLocalStorage('TODOS_V1', []);

    // Estado para el valor de búsqueda
    const [searchValue, setSearchValue] = useState('');

    // Estado para controlar la apertura y cierre del modal
    const [openModal, setOpenModal] = useState(false);

    // Función para obtener la cantidad de todos completados
    const completedTodos = todos.filter(todo => !!todo.completed).length;

    // Función para obtener la cantidad total de todos
    const totalTodos = todos.length;

    // Función para filtrar los todos basado en el valor de búsqueda
    const searchedTodos = todos.filter((todo) => {
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return todoText.includes(searchText);
    });

    // Función para añadir un nuevo todo
    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({ text, completed: false });
        saveTodos(newTodos);
    };

    // Función para marcar un todo como completado
    const completeTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex((todo) => todo.text === text);
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
    };

    // Función para eliminar un todo
    const deleteTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex((todo) => todo.text === text);
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    };

    return (
        // Proveer el contexto con los valores y funciones necesarios
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            addTodo,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
        }}>
            {children}
        </TodoContext.Provider>
    );
}

// Exportar el contexto y el componente TodoProvider
export { TodoContext, TodoProvider };

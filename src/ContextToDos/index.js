import React from "react";
import { useLocalStorage } from "../localStorage";

//invoco el context de react
const TodoContext = React.createContext();

//creo mi propio provider 
function TodoProvider({children}){
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
    } = useLocalStorage('TODOS_V1', []);

    //estado para el search
    const [searchValue, setSearchValue] = React.useState('');
    //estado para el Modal
    const [openModal, setOpenModal] = React.useState(false);
    //estado para la creación de ToDo
    //const [todo, setTodo] = React.useState({});

    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;

    const searchedTodos = todos.filter(
        (todo) => {
            const todoText = todo.text.toLowerCase();
            const searchText = searchValue.toLowerCase();
            return todoText.includes(searchText);
        }
    );

    // Función para añadir un nuevo todo
    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({ text, completed: false });
        saveTodos(newTodos);
    };

    // Función para marcar un todo como completado
    const completeTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
            (todo) => todo.text === text
        );
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
    };

    // Función paraeliminar un todo 
    const deleteTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
            (todo) => todo.text === text
        );
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    };
    
    return(
        /* a través de value paso todas props q voy a necesitar para cada componente(children) 
        y en el componente SOLO hago destructuring de la q necesite MEDIANTE useContext o TodoContext.Consumer */
        <TodoContext.Provider value={
            {
                loading,
                error,
                completedTodos,
                totalTodos,
                searchValue,
                setSearchValue,
                searchedTodos,
                completeTodo,
                deleteTodo,
                openModal,
                setOpenModal,
                addTodo,
            }
        } >
            {children}
        </TodoContext.Provider>
    )
};


export {
    TodoContext,
    TodoProvider,
};
import React from 'react';
import './todoCounter.css';
import { TodoContext } from '../../ContextToDos';

function TodoCounter() {
    //utilizo useContext
    const { completedTodos, totalTodos } = React.useContext(TodoContext);

    return (
        <h2 className="TodoCounter">Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOs</h2>
    )
};

export { TodoCounter };
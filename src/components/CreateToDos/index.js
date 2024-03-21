import React from 'react';
import { TodoContext } from '../../ContextToDos';
import './createTodoButton.css';

function CreateTodoButton() {
    const { openModal, setOpenModal } = React.useContext(TodoContext);

    /* const handlerOpenModal = () => {
        setOpenModal(!openModal)
        
    }; */

    return (
        <button 
            className="CreateTodoButton" 
            onClick={() => setOpenModal(!openModal)} //aqui adentro le paso la funcion q quiero q se ejecute
        >
            +
        </button>
    );
};

export { CreateTodoButton };
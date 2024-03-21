import React from 'react'
import './form.css';
import { TodoContext } from '../../ContextToDos';

function TodoForm() {
    const { addTodo, setOpenModal } = React.useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState('');

    //para el btn cancelar
    const handleCancelar = (e) => {
        e.preventDefault();
        setOpenModal(false) //no usar directamnt en el onClick
    };
    //para btn crear 
    const handleCrear = (e) => {
        e.preventDefault();
        //invoco a la funcion q está en el contexto GLOBAL para crear un toDo
        addTodo(newTodoValue);
        setOpenModal(false);
    };
    //para textarea va tomando lo q digita el user
    const handleOnChange = (e) => {
        setNewTodoValue(e.target.value);
    };

    return (
        <form onSubmit={handleCrear}>
            <label>Ing tu ToDo</label>
            <textarea value={newTodoValue} placeholder='creo toDo' onChange={handleOnChange}/>
            <div className='contBtn'>
                <button className='cancelar btns' type='buttom' onClick={(e) => handleCancelar(e)}>Cancelar</button>
                <button className='crear btns' type='submit'>Crear</button>
            </div>
        </form>
    )
}

export default TodoForm
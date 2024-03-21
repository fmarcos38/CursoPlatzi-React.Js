import React from 'react';
import { TodoCounter } from '../components/ToDosCounter';
import { TodoSearch } from '../components/ToDosSearch';
import { TodoList } from '../components/ToDosList';
import { TodoItem } from '../components/ToDosItem';
import { Loading } from '../components/Loading';
import { TodosError } from '../components/TodosError';
import { EmptyTodos } from '../components/EmptyTodos';
import { CreateTodoButton } from '../components/CreateToDos';
import { TodoContext } from '../ContextToDos';
import { Modal } from '../components/Modal';
import TodoForm from '../components/ToDosForm';

function AppUI() {
    const { 
        loading, 
        error, 
        searchedTodos, 
        completeTodo, 
        deleteTodo, 
        openModal,         
    } = React.useContext(TodoContext);

    return (
        <>
            <TodoCounter />
            <TodoSearch />
            <TodoList>
                {loading &&
                    (
                        <>
                            <Loading />
                            <Loading />
                            <Loading />
                        </>
                    )
                }
                {error && <TodosError />}
                {
                    (!loading && searchedTodos.length === 0) && <EmptyTodos />
                }
                {
                    searchedTodos.map(todo => (
                        <TodoItem
                            key={todo.text}
                            text={todo.text}
                            completed={todo.completed}
                            onComplete={() => completeTodo(todo.text)}
                            onDelete={() => deleteTodo(todo.text)}
                        />
                    )
                    )
                }
            </TodoList>

            <CreateTodoButton />

            {/* creo componente para teletransportar(React Portals) */}
            {
                openModal && (
                    <Modal>
                        <TodoForm/>
                    </Modal>
                )
            }
        </>
    );
}
export default AppUI;
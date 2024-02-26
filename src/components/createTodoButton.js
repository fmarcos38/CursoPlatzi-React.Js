import './createTodoButton.css';

function CreateTodoButton({ onClick }) {
    return (
        <button className="CreateTodoButton" onClick={onClick}>Create Todo</button>
    );
};

export { CreateTodoButton };
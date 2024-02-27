import './createTodoButton.css';

function CreateTodoButton({ onClick }) {
    return (
        <button 
            className="CreateTodoButton" 
            onClick={() => {console.log("click btn")}} //aqui adentro le paso la funcion q quiero q se ejecute
        >
            +
        </button>
    );
};

export { CreateTodoButton };
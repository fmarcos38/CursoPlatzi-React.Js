import './todoItem.css'; 

function TodoItem(props) { 
    return (
        <li className="TodoItem">
            {/* utilizo clases dinamicas SI viene TRUE(osea completada) &&(entonces)*/}
            <span className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}> 
                V
            </span>
            <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
                {props.text}
            </p>
            <span className="Icon Icon-delete">X</span>
        </li>
    ); 
}

export { TodoItem };
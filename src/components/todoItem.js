import './todoItem.css';

function TodoItem({ text, completed}) {
    return(
        <li className="TodoItem">
            <span 
                className={`Icon Icon-check ${{completed} && "Icon-check--active"}`}>C</span>
            <p>{text}</p>
            <span>X</span>
        </li>
    )
}

export {TodoItem}
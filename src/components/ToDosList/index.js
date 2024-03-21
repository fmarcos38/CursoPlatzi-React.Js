function TodoList(props) {
    return(
        <ul className="TodoList">
            {props.children} {/* children es un prop especial de react */}
        </ul>
    )
};

export { TodoList };
import React from 'react';
import './todoSearch.css';

function TodoSearch({ search, setSearch }) { //le paso el estado y la funcion q modifica el estado

    return (
        <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="TodoSearch"
        />
    );
};

export { TodoSearch };
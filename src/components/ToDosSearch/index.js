import React from 'react';
import './todoSearch.css';

function TodoSearch({ searchValue, setSearchValue }) { //le paso el estado y la funcion q modifica el estado

    return (
        <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="TodoSearch"
        />
    );
};

export { TodoSearch };

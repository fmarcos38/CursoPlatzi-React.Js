import React from 'react';

//-----------creacion de un Hooks personalizado para el manejo del localStorage--------------------------------------------
//el hook recibe el nombre del item y su valor inicial(q es un array vacio o cualquier estado inicial q se le pase al hook)
function useLocalStorage(itemName, initialValue) {
    //creo estado local para el item del localStorage y lo inicializo con el valor q obtuve
    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    React.useEffect(() => {
        setTimeout(() => {
            try {
                //busco SI ya existe el item a caargar
                const localStorageItem = localStorage.getItem(itemName);

                //variable para guardar el estado inical, osea lo q tenga el localStorage
                let parsedItem;

                if (!localStorageItem) {
                    //lo cargo
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItem = initialValue;
                } else {
                    parsedItem = JSON.parse(localStorageItem);
                    setItem(parsedItem);
                }

                //actalizo estadfo loading
                setLoading(false);
            } catch (error) {
                setLoading(false);
                //si tengo error actualizo estado
                setError(true);
            }
        }, 2000);
    });

    //creo funcion para guardar en el localStorage el item, es la q exporto en el return
    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);
    };

    return {
        item,
        saveItem,
        loading,
        error,
    };
}

export { useLocalStorage };


// localStorage.removeItem('TODOS_V1');

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el Curso de Intro a React.js', completed: false },
//   { text: 'Llorar con la Llorona', completed: false },
//   { text: 'LALALALALA', completed: false },
//   { text: 'Usar estados derivados', completed: true },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
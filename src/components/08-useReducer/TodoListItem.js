import React from 'react'

export const TodoListItem = ({ todo, index, handleDelete, handleToggle }) => {
    return (
        <li
            key={todo.id}
            className="list-group-item"
        >
            <p 
                // checking if todo.done es true or false
                // escuchando el evento click y envandoselo a un handler
                className={`${ todo.done && 'complete' }`}
                onClick={ () => handleToggle( todo.id ) }
            >
                {/* printing the list number and todo decription */}
                {index + 1}. { todo.desc }
            </p>
            <button 
                onClick={ () => handleDelete( todo.id ) }
                className="btn btn-danger"
            >
                Borrar
            </button>
        </li>
    )
}

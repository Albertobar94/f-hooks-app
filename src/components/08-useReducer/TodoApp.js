import React, { useEffect, useReducer } from 'react';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer';
import './styles.css';

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {
    //Using the React Reducer and getting the initial state from Local Storage
    const [ todos, dispatch ] = useReducer(todoReducer, [], init);

    //Saving items in local storage each time todos changes
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos ))
    }, [todos]);

    //The todo Id we get it from the iteration in the rendering phase
    const handleDelete = todoId => {
        // Object to be sent to the reducer
        const action = {
            type: 'delete',
            payload: todoId
        }
        //sending object to the reducer
        dispatch( action );
    }

    //The todo Id we get it from the iteration in the rendering phase
    const handleToggle = ( todoId ) => {
        // Object to be sent to the reducer
        const action = {
            type: 'toggle',
            payload: todoId
        }
        //sending object to the reducer
        dispatch( action );
    }

    const handleAddTodo = ( newTodo ) => {
        //sending object to the reducer
        dispatch( newTodo );
    }

    return (
        <div>
            <h1>TodoApp ( { todos.length } ) </h1>
            <hr/>
            <div className="row">
                <div className="col-6">
                    <TodoList  
                        todos={ todos } 
                        handleDelete={ handleDelete }
                        handleToggle={ handleToggle }
                    />
                </div>
                <div className="col-6">
                    <TodoAdd 
                        handleAddTodo={ handleAddTodo }
                    />
                </div>
            </div>
        </div>
    )
}

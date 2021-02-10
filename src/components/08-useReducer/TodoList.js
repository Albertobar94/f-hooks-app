import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = ({ todos, handleDelete, handleToggle}) => {
    return (
        <div>
            <ul className="list-group list-group-flush" >
                    {/* Rendering State */}
                    {/* Looping through all items in the state */}
                        {
                            todos.map( (todo, i) =>
                                <TodoListItem
                                    key={ todo.id }
                                    todo={ todo }
                                    index={ i }
                                    handleDelete={ handleDelete }
                                    handleToggle={ handleToggle }

                                />
                            )
                        }
                    </ul>
        </div>
    )
}

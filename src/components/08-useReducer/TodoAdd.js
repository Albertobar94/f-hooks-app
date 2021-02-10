import React from 'react'
import { useForm } from '../../hooks/useForm'

export const TodoAdd = ({ handleAddTodo }) => {
    //Custom Hook with an initialState of description
    const [ { description }, handleInputChange, reset ] = useForm({
        description: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        //Checking if input is empty
        if( description.trim().length < 1 ){
            return;
        }

        // Object to be sent to the reducer
        const action = {
            type: 'add',
            payload: {
                id: new Date().getTime(),
                desc: description,
                done: false
            }
        }
        //sending object to the reducer
        handleAddTodo( action );
        // Emptying the field in the inputValue
        reset();
    }

    return (
        <>
            <h4>Agregar</h4>
                <hr/>
                <form onSubmit={ handleSubmit } >
                    <input
                        type="text"
                        name="description"
                        className="form-control"
                        placeholder="Aprender ..."
                        autoComplete="off"
                        value={ description }
                        onChange={ handleInputChange }
                    />
                    <button
                        type="submit"
                        className="btn btn-outline-primary mt-1 btn-block"
                    >
                        Agregar
                    </button>
                </form>
        </>
    )
}

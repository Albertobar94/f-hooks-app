import React from 'react';
import { useForm } from '../../hooks/useForm';
import './effects.css';
 

export const FormWithCustomHook = () => {

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const { name, email, password } = formValues;

    return (
        <form onSubmit={ handleInputChange }>
            <h1>FormWithCustomHook</h1>
            <hr/>

            <div className="form-group">
                <input 
                    type="text" 
                    name="name" 
                    className="form-control" 
                    placeholder="Tu nombre"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group">
                <input 
                    type="text" 
                    name="email" 
                    className="form-control" 
                    placeholder="email@email.com"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-group">
                <input 
                    type="password" 
                    name="passwird" 
                    className="form-control" 
                    placeholder="email@email.com"
                    value={password}
                    onChange={handleInputChange}
                />
            </div>

        </form>
    )
}

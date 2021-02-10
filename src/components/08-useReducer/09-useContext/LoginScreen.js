import React, { useContext } from 'react'
import { UserContext } from './UserContext';

export const LoginScreen = () => {

    // 1. Obetener la reerencia al userContext
    const { setUser } = useContext( UserContext );
    
    return (
        <div>
            <h1>LoginScreen</h1>
            <hr/>
            <buttton
                className="btn btn-primary"
                onClick={ () => setUser({
                    id: 123,
                    name: 'tuputo'
                }) }
            >
                Login
            </buttton>
        </div>
    )
}

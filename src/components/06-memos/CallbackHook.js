import React, { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

    const [counter, setcounter] = useState(10);

    // const increment = () => {
    //     setcounter( p => p + 1);
    // }

    const increment = useCallback(
        (num) => {
            setcounter( p => p + num );
        },
        [ setcounter ],
    )



    return (
        <div>
            <h1> {counter } </h1>
            <ShowIncrement increment={ increment } />
        </div>
    )
}

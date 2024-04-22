import React, { useState } from 'react';
import classes from './Counter.module.scss';

export const Counter = () => {
    const [counter, setCounter] = useState(0);

    return (
        <div className={classes.btn}>
            <span>{counter}</span>
            <button onClick={()=> setCounter(prev => prev + 1)}>increment</button>        
        </div>
    );
}

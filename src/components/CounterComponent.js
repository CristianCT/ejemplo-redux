import React from 'react'
import { useDispatch } from 'react-redux' 

export default function CounterComponent({counter, incrementarContador, decrementarContador}) {
    const dispatch = useDispatch();
    return (
        <header className="App-header">
            <div>{ counter.count }</div>
            <button onClick={() => incrementarContador(dispatch)} >incrementar</button>
            <button onClick={() => decrementarContador(dispatch)} >decrementar</button>
        </header>
    )
}

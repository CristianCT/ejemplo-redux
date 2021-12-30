import React from 'react'

export default function CounterComponent({counter, incrementarContador, decrementarContador}) {
    return (
        <header className="App-header">
            <div>{ counter.count }</div>
            <button onClick={() => (incrementarContador)} >incrementar</button>
            <button onClick={() => decrementarContador} >decrementar</button>
        </header>
    )
}

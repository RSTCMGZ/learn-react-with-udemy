import React from 'react'
import useCounter from './useCounter'
function Sayac() {
    const [num, increment, decrement, reset] = useCounter()
    return (
        <div>
            <h2>sayı = {num}</h2>
            <button onClick={increment}>Arttır</button>
            <button onClick={decrement}>Azalt</button>
            <button onClick={reset}>Sıfırla</button>
        </div>
    )
}

export default Sayac
import { useState } from "react";

function Counter()
{
    const [count,setCount] = useState(0);

    function handleIncrement()
    {
        setCount(preVal=>preVal + 1);
    }

    function handleDecrement()
    {
        setCount(preVal => preVal - 1);
    }

    return(
        <>
            <button onClick={handleIncrement}>Increment</button>
            <h1>Counter Time:{count}</h1>
            <button onClick={handleDecrement}>Decrement</button>
        </>
    )
}

export default Counter;
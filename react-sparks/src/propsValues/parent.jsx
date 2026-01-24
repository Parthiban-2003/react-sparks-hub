import { useState } from "react";
import Child from "./child";

function Parent()
{
    const [names,setName] = useState('');

    return(
        <>
            <h1>Parent Values:</h1>
            <div>
                <form>
                    <label>Name:</label>
                    <input type="text" value={names} onChange={(e)=>setName(e.target.value)}
                    placeholder="Type Anything..." />
                </form>
            </div>

            <Child textValues={names}/>
        </>
    )
}

export default Parent;
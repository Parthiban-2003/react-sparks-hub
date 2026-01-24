import { useState } from "react";

function Toogle()
{
    const [toogle,setToogle] = useState(false);

    function handleSubmit(e)
    {
        e.preventDefault();
    }

    return(
        <>
            <h1>Toogle Text:</h1>
            <button onClick={()=>setToogle(true)}>Login</button>
            <button onClick={()=>setToogle(false)}>Logout</button>

            {
                toogle && (
                    <form onSubmit={handleSubmit}>
                        <label>Name:</label>
                        <input type="text" placeholder="Enter Your Name" /> <br /><br />

                        <label>Email</label>
                        <input type="email" placeholder="Enter Your Email" /> <br /><br />

                        <label>Password</label>
                        <input type="password" placeholder="Enter Your Password" /> <br /> <br />

                        <button type="submit">Add</button>
                    </form>
                )
            }
        </>
    )
}

export default Toogle;
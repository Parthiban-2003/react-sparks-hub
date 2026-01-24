import { useEffect, useState } from "react";

function ApiCallFetch()
{
    const [api,setApi] = useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=>res.json())
        .then(response => setApi(response))
        .catch((err) => console.log(err));
    },[])

    return(
        <>
            <h1>Api Call</h1>
            <ul>
                {
                    api.map((item)=>{
                        return <li key={item.id}>
                            {item.name} - {item.email}
                        </li>
                    })
                }
            </ul>
        </>
    )
}

export default ApiCallFetch;
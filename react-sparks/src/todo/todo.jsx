import { useEffect, useState } from "react";

function TodoApp() {

    const [initalvalue, setInitalvalue] = useState(()=>{
        return JSON.parse(localStorage.getItem('todo')) || []
    });

    const [IPValue, setIPValue] = useState('');
    const [isModified,setModified] = useState(null);

    useEffect(()=>{
        localStorage.setItem('todo',JSON.stringify(initalvalue))
    },[initalvalue]);

    function handleAddData() {
        const newTodo = {
            id:Date.now(),
            textValues:IPValue,
            complete:false,
        }

        if(IPValue)
        {
            setInitalvalue([...initalvalue,newTodo]);
            setIPValue('');
        }
    }

    function handleModifiedData()
    {
        const ModifiedData = initalvalue.map((item)=>{
            return item.id === isModified.id ? {...item, textValues:IPValue} : item
        });

        setInitalvalue(ModifiedData);
        setIPValue('');
        setModified(null);
    }

    function handleUpdateData(id)
    {
        const UpdateData = initalvalue.find((item)=>{
            return item.id === id
        });
        setIPValue(UpdateData.textValues);
        setModified(UpdateData);
    }

    function handleDeleteData(id)
    {
        const DeleteData = initalvalue.filter((item)=>{
            return item.id !== id
        });
        setInitalvalue(DeleteData);
    }

    function handleCompleteTask(id)
    {
        const CompleteTask = initalvalue.map((item)=>{
            return item.id === id ? {...item,complete:!item.complete} : item
        });
        setInitalvalue(CompleteTask);
    }

    return (
        <>
            <h1>Todo App</h1>

            <div>
                <input type="text" placeholder="Type Anything"
                    value={IPValue} onChange={(e) => setIPValue(e.target.value)}
                />

                <button onClick={isModified? handleModifiedData : handleAddData}>{isModified ?'Save':'Add'}</button>
            </div>

            <ul style={{listStyleType:'none'}}>
                {
                    initalvalue.map((item)=>{
                        return <li key={item.id} onDoubleClick={()=>handleCompleteTask(item.id)} style={{textDecoration:item.complete ? 'line-through' : 'none'}}>
                            {item.textValues}
                            <button onClick={()=>handleUpdateData(item.id)}>update</button>
                            <button onClick={()=>handleDeleteData(item.id)}>Delete</button>
                        </li>
                    })
                }
            </ul>
        </>
    )
}

export default TodoApp;
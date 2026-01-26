import ApiCallAsync from "../APICall/apiCallAsync";
import ApiCallFetch from "../APICall/apiCallFetch";
import InputText from "../InputBoxDisplayText/inputText";
import Counter from "../counter/counter";
import ListRenderening from "../listRenderning/listsRender";
import Parent from "../propsValues/parent";
import TodoApp from "../todo/todo";
import conditionalRendering from "../conditionalReandering/conditionalRendering";

function Spark()
{
    return(
        <>
            <Counter/> <hr />
            <TodoApp/> <hr />
            <conditionalRendering/> <hr />
            <InputText/> <hr />
            <Parent/> <hr />
            <ApiCallFetch/> <hr />
            <ApiCallAsync/> <hr />
            <ListRenderening/> <hr /> 
        </>
    )
}

export default Spark;
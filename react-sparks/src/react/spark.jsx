import InputText from "../InputBoxDisplayText/inputText";
import Counter from "../counter/counter";
import Parent from "../propsValues/parent";
import TodoApp from "../todo/todo";
import Toogle from "../toogleText/toogle";

function Spark()
{
    return(
        <>
            <Counter/> <hr />
            <TodoApp/> <hr />
            <Toogle/> <hr />
            <InputText/> <hr />
            <Parent/> <hr />
        </>
    )
}

export default Spark;
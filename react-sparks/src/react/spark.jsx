import ApiCallAsync from "../APICall/apiCallAsync";
import ApiCallFetch from "../APICall/apiCallFetch";
import InputText from "../InputBoxDisplayText/inputText";
import Counter from "../counter/counter";
import ListRenderening from "../listRenderning/listsRender";
import Parent from "../propsValues/parent";
import TodoApp from "../todo/todo";
import ConditionalRendering from "../conditionalReandering/conditionalRendering";
import LoginForm from "../LoginFormErroMessage/loginForm";
import ReducersHook from "../ReduerHooks/reducersHook";

function Spark() {
    return (
        <>
            <Counter /> <hr />
            <TodoApp /> <hr />
            <ConditionalRendering /> <hr />
            <InputText /> <hr />
            <Parent /> <hr />
            <ApiCallFetch /> <hr />
            <ApiCallAsync /> <hr />
            <ListRenderening /> <hr />
            <LoginForm /> <hr />
            <ReducersHook /> <hr />
        </>
    )
}

export default Spark;
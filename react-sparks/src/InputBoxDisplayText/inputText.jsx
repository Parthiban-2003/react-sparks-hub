import { useState } from "react";

function InputText() {
    const [text, setText] = useState('');

    return (
        <>
            <h1>Input Values Display Text</h1>
            <div>
                <input type="text"
                    placeholder="Type Anything" value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>

            <h2>Input Text Display:{text}</h2>
        </>
    )
}

export default InputText;
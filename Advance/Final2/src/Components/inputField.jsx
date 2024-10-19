import { useState } from "react";


function InputField () {
    const [input, setInput] = useState('')

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    return(
        <div>
            <input 
            type="text"
            placeholder="See the text below"
            value={input}
            onChange={handleChange}            
            />
            <p style={{color: '#81D8D0'}}>{input}</p>
        </div>
    )
}
export default InputField
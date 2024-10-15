import {useState} from "react"


const LoginForm = () =>{

    const [showPassword, setShowPassword] = useState(false)
    const handleShowPasswordToggle = () =>{
        setShowPassword(!showPassword)
    }

    return(
        <form className="form">
            <input type={showPassword ? "text" : "password"} id="password" placeholder="Enter your Password" />
            <input type="checkbox" id="showPassword" value={showPassword} onChange={handleShowPasswordToggle}/>
            <button id="submit" type="submit">Submit</button>
        </form>
    );
};

export default LoginForm;
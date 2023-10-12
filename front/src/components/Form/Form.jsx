import { useState } from "react";
import validation from "../validation";

const Form = ({login}) => {

    const [ userData , setUserData ] =  useState({
        email: "",
        password: "",
    })
    
    const [ errors , setErrors ] =  useState({
        email: "",
        password: "",
    })

    const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;
            
        setUserData({...userData, [property]: value})
        validation({...userData, [property]: value}, errors, setErrors)
    }

    
    const submitHandler = (event) => {
        event.preventDefault();
        login(userData);
    }

    return(
            <form onSubmit = {submitHandler} className="form">
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="text" name="email" value={userData.email} onChange={handleChange} />
                    <p>{errors.email}</p>
                </div>

                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" value={userData.password} onChange={handleChange} />
                    <p>{errors.password}</p>
                </div>

                <button type="submit">Entrar</button>

            </form>
    )
} 

export default Form;
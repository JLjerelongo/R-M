
const validation = (userData, errors, setErrors) => {

    if(!userData.email) 
        setErrors({...errors, email: "Por favor completa este campo"});
    else if(userData.email.length > 35) 
        setErrors({...errors, email: "No puede superar los 35 caracteres"});
    else if(
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(userData.email)
        ){
            setErrors({...errors, email: "Email inválido"})
        } else {
            setErrors({...errors, email: ""});
        }

        if(userData.password.length < 6 || userData.password.length > 10 ){
            setErrors({...errors, password: "La contraseña debe contener entre 6 y 10 caracteres"})}
        else if(!/\d/.test(userData.password)){
            setErrors({...errors, password: "La contraseña debe contener al menos 1 numero"})}
        else {
            setErrors({...errors, password: ""})
        }
};

export default validation;
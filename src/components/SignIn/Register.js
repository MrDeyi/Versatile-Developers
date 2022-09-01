import { useState } from "react";
import {auth} from '../../conf/fireconf'
import {useNavigate, Link} from "react-router-dom"

import {createUserWithEmailAndPassword, sendEmailVerification} from 'firebase/auth'
import { useAuthValue } from "./AuthContext";
import './styleform.css'


export const CorrectEmail = (str = "") => str.includes('@');

function Register(){

    //Declare some state variable...
    const[email,setEmail] = useState('')
    const[password, setPassword] = useState('')
    const[conPassword, setConPassword] = useState('')
    const[error, setError] = useState('')

    //store the user globally
    const navigate = useNavigate();
    const {setTimeActive} = useAuthValue

    //Check Password and confrim_Password if they match
    const validatePassword = () =>{
        let isValid = true
        if(password !== '' && conPassword !==''){
            if(password !==  conPassword){
                isValid = false
                setError("Passwords do not match")
            }
        }
        return isValid
    }

    // register the user
    // will change this later for specified error
    const register = e => {
        e.preventDefault()
        setError('')
        if(validatePassword()){
            createUserWithEmailAndPassword(auth,email,password)
            .then(() =>{
                sendEmailVerification(auth.currentUser)
                .then(() =>{
                    //registered
                    // setTimeActive(true)
                    navigate('/verify-email')
                }).catch((err) => alert("Connection Error Please TRY again!!"))
            })
            //network error
            .catch(err => setError("User EXISTs Please Log in if you have an ACCOUNT!!"))
        }

        //also this
        setEmail('')
        // setPassword('')
        // setConPassword('')
    }

//also this , just a simple form
    return(
        <div className="center">
            <div className="auth">
                <div className="col-1">
                    <h1>Register</h1>
                    {error && <div className="auth_error">{error}</div>}
                    <form onSubmit={register} name = 'form'>
                        <input
                            type = 'email'
                            value = {email}
                            placeholder = "Enter your Email address"
                            required
                            onChange={e => setEmail(e.target.value)}/>
                            
                        <input
                            type = 'password'
                            value = {password}
                            placeholder = "Enter your Password"
                            required
                            onChange={e => setPassword(e.target.value)}/>

                        <input
                            type = 'password'
                            value = {conPassword}
                            placeholder = "Confirm Password"
                            required
                            onChange={e => setConPassword(e.target.value)}/>

                        <button type="submit" className="button">Register</button>
                    </form>
                    <span>
                        
                        <Link to='/login'> Already have an account? Login</Link>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Register
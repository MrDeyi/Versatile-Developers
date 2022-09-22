import { useState } from "react";
import { auth } from "../../conf/fireconf";
import {useNavigate, Link} from "react-router-dom"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {createUserWithEmailAndPassword, sendEmailVerification} from 'firebase/auth'
import { useAuthValue } from "./AuthContext";
import Registerstyle from "./Register.module.css"
import loginpic from "../../pic/Login.jpg"


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

        <Routes>
         <section className="v-100" style={{backgroundColor: "gray"}} data-testid="section">
            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                            <img src={loginpic} alt = "Login"/>
                        
                    </div>

                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <h2 className={Registerstyle.title}>Welcome to Wits Social App</h2>
                        <span>Register in and enjoy the service</span>
                        {error && <div className={Registerstyle.auth_error}>{error}</div>}
                        <form onSubmit={register} name ="form" className="Loginfrom" data-testid="form">
                            <div className="form-outline mb-4" style={{backgroundColor: "white"}}>
                                <input
                                    className='form-control form-control-lg'
                                    type = 'email'
                                    value = {email}
                                    placeholder = "Enter your Email address"
                                    required
                                    onChange={e => setEmail(e.target.value)}/>
                            </div>

                            <div className="form-outline mb-4" style={{backgroundColor: "white"}}>
                                <input
                                    className='form-control form-control-lg'
                                    type = 'password'
                                    value = {password}
                                    placeholder = "Enter your Password"
                                    required
                                    onChange={e => setPassword(e.target.value)}/>
                            </div>
                            <div className="form-outline mb-4" style={{backgroundColor: "white"}}>
                            <input
                                className='form-control form-control-lg'
                                type = 'password'
                                value = {conPassword}
                                placeholder = "Confirm Password"
                                required
                                onChange={e => setConPassword(e.target.value)}/>
                            </div>
                            <div className="btn btn-primary btn-lg">
                                <button type="submit" className="btn btn-primary btn-lg">Register</button>
                                <Link to='/login' style={{backgroundColor: "#b3e6ff",
                                              padding:"5px",
                                              border:"2px solid black",
                                              borderRadius:"5px"}}> Already have an account? Login</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div
        class="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
        
        <div class="text-white mb-3 mb-md-0" data-testid="foot">
          Copyright © 2022. All rights reserved.
        </div>

        <div data-testid="icons">
            <a href="#!" class="text-white me-4">
                <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#!" class="text-white me-4">
                <i class="fab fa-twitter"></i>
            </a>
            <a href="#!" class="text-white me-4">
                <i class="fab fa-google"></i>
            </a>
            <a href="#!" class="text-white">
                <i class="fab fa-linkedin-in"></i>
            </a>
            </div>
        </div>
        </section>
        </Routes>

        
    )
}

export default Register
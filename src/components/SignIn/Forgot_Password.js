import { useState,useEffect } from "react";
import { auth } from "../../conf/fireconf";
import {useNavigate} from 'react-router-dom'
import {sendPasswordResetEmail} from 'firebase/auth'
import './styleform.css'

function ForgotPassword(){
    const[email,setEmail] = useState('')
    // const auth =  getAuth();
    const navigate = useNavigate()

    const triggerResetEmail = async()=>{
        await sendPasswordResetEmail(auth,email);
        // console.log("Password reset email sent");
    }

    return(
        <div className="center">
            <div className="auth">
            <p>
                <strong>Provide a registered Password !!</strong>
            </p>
            <span>Wits-Social-App Developers will send you a email to
                 reset your password
            </span>
                <form onSubmit={triggerResetEmail}>
                    <input
                    type='email' 
                    value={email}
                    required
                    placeholder="Enter your email"
                    onChange={e => setEmail(e.target.value)}>
                    </input>
                    <button
                        className="button"
                        type="submit" >
                        Password Reset Email
                    </button>
                </form> 
                <button
                    className="button"
                    type="button"
                    onClick={
                        ()=>
                        navigate('/login')
                }
                    >
                        Login Here
                    </button>
            </div>
        </div>
    )

}

export default ForgotPassword;
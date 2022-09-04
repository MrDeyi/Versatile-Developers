import {useState} from 'react'
import { Link } from 'react-router-dom'
import Loginstyle from "./Login.module.css"
import {signInWithEmailAndPassword, sendEmailVerification} from 'firebase/auth'
import {auth} from '../conf/fireconf'
import {useNavigate} from 'react-router-dom'
import {useAuthValue} from './AuthContext' //globilise our user details
import Back from "../pic/back.png"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import Back from "src\pic\back.jpg"
import loginpic from "../pic/Login.jpg"
import TWOFA from './TWOFA'


export function EmailCheck(email){
  return email.includes('@');
} 

function Login(){

    //declare some state variable
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('') 
  const [error, setError] = useState('')
  const [user,setUser] = useState('')
  
  const {setTimeActive} = useAuthValue()
  const navigate = useNavigate()

  const provider = new GoogleAuthProvider()

  const loginWIthGoogle = ()=>{
    const auth  = getAuth();
    signInWithPopup(auth,provider)
    .then(result=>{
      setUser(result.user)
      navigate('/')
    })
  }
    /*
        a simple function component that check if the user exist,and verified the email?
        if : not verified, then send a verification email
        else : take user to home page
    */
  const login = e => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
    .then(() => {
        /*
            if user is not verified yet
            navigate him to verify(/verify-email) 
            else Profile(/)
        */
       if(!auth.currentUser.emailVerified) {
        sendEmailVerification(auth.currentUser)
        .then(() => {
          setTimeActive(true)
          navigate('/verify-email')
        })
      .catch(err => alert("Connection Error Please TRY again!!"))
    }
    else{
      //Confirm user using 2FA
      // <TWOFA></TWOFA>
      navigate('/security');
    }
    })
    .catch(err => setError("INVALID User INPUT"))
  }




  //a simple log in page
  return(
    <section>
      <div className={Loginstyle.login}>
        <div className={Loginstyle.container}>
          <div className='log-content'>
            <div className='signin-image'>
              <figure>
                <img src={loginpic} alt = "Login"/>
              </figure>
                <Link to='/register'>  Don't have and account? Create one here</Link>
                <br></br>
                <Link to='/forgot_password'>  Forgot Password?</Link>
            </div>

            <div className='logform'>
              <h2 className='title'>Login</h2>
              <span>register and enjoy the service</span>

              {error && <div className='auth__error'>{error}</div>}
              <form onSubmit={login} className="Loginfrom" name='form' id = "form">

                <div className='form-group'>
                  <input 
                    type='email' 
                    value={email}
                    required
                    placeholder="Enter your email"
                    onChange={e => setEmail(e.target.value)}/>
                </div>

                <div className='form-group'>
                  <input 
                    type='password'
                    value={password}
                    required
                    placeholder='Enter your password'
                    onChange={e => setPassword(e.target.value)}/>
                </div>

                <div className='form-group form-button'>
                  <button type='submit' className='button'>Login</button>
                </div>

              </form>
            
            </div>
            

            
            {/* this appearsif there is error */}
            
          </div>

          <div className='col-2'>
            <button className='button' onClick={loginWIthGoogle}>Sign In with Google</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login
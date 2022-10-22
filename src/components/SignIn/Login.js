import {useState} from 'react'
import { Link } from 'react-router-dom'
import Loginstyle from "./Login.module.css"
import {signInWithEmailAndPassword, sendEmailVerification} from 'firebase/auth'
import { auth } from '../../conf/fireconf'
import {useNavigate} from 'react-router-dom'
import {useAuthValue} from './AuthContext' //globilise our user details
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import loginpic from "../../pic/Login.jpg"


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
      navigate('/')
      // navigate('/security'); currently fixing this
    }
    })
    .catch(err => setError("INVALID User INPUT"))
  }

  //a simple log in page
  return(
    <section className='v-100' style={{backgroundColor: "lightblue"}} >
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
                <img src={loginpic} alt = "Login" className='img-fluid'/>
            </div>

            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <h2 className={Loginstyle.title}>Wits Social App</h2>
              <span>Log in and enjoy the service</span>
              {error && <div className={Loginstyle.auth__error}>{error}</div>}
              <form onSubmit={login} className="Loginfrom" name='form' id = "form">

                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                  <p className='lead fw-normal mb-0 me-3'>Sign in with</p>

                  <button className="btn btn-primary btn-floating mx-1">
                    <i className="fab fa-facebook-f"></i>
                  </button>

                  <button className='btn btn-primary btn-floating mx-1'>
                    <i className='fab fa-linkedin-in'></i>
                  </button>

                  <button onClick={loginWIthGoogle} className="btn btn-primary btn-floating mx-1">
                    <i className="fab fa-google"></i>
                  </button>
                </div>
                
                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0">or</p>
                </div>
                <div className="form-outline mb-4" style={{backgroundColor: "white"}}>
                  <input 
                    className={Loginstyle.input}
                    type='email' 
                    value={email}
                    required
                    placeholder="Enter your email"
                    onChange={e => setEmail(e.target.value)}/>
                </div>

                <div className="form-outline mb-3" style={{backgroundColor: "white"}}>
                  <input
                    className= {Loginstyle.input}
                    type='password'
                    value={password}
                    required
                    placeholder='Enter your password'
                    onChange={e => setPassword(e.target.value)}/>
                </div>

                <div class="d-flex justify-content-between align-items-center">
                  <div class="form-check mb-0">
                    <input class="form-check-input me-2" type="checkbox" value="" id="" />
                    <label class="form-check-label" for="">
                      Remember me
                    </label>
                  </div>
                  <Link to='/forgot_password'>  Forgot Password?</Link>
                </div>

                <div className="btn btn-primary btn-lg">
                  <button type='submit' className="btn btn-primary btn-lg">Login</button>
                  <Link to='/register' style={{backgroundColor: "#b3e6ff",
                                              padding:"5px",
                                              border:"2px solid black",
                                              borderRadius:"5px"}}>  Don't have and account? Create one here</Link>
                </div>
              </form>
            </div>
        </div>
      </div>

      <div
        class="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
        <div class="text-white mb-3 mb-md-0">
          Copyright © 2022. All rights reserved.
        </div>

        <div>
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
  )
}

export default Login
import {useState} from 'react'
import { Link } from 'react-router-dom'
import './styleform.css'
import {signInWithEmailAndPassword, sendEmailVerification} from 'firebase/auth'
import {auth} from '../../conf/fireconf'
import {useNavigate} from 'react-router-dom'
import {useAuthValue} from './AuthContext' //globilise our user details
// import Back from "../pic/back.png"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import Back from "src\pic\back.jpg"


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
      navigate('/')
    }
    })
    .catch(err => setError("User details INVALID!!"))
  }




  //a simple log in page
  return(
    <section>
      <div className='center'>
        <div className='auth'>
          <div className='col-1'>
            <h2>Login</h2>
            <span>register and enjoy the service</span>
            {/* this appearsif there is error */}
            {error && <div className='auth__error'>{error}</div>}
            <form onSubmit={login} name='form' id = "form">
              <input 
                type='email' 
                value={email}
                required
                placeholder="Enter your email"
                onChange={e => setEmail(e.target.value)}/>

              <input 
                type='password'
                value={password}
                required
                placeholder='Enter your password'
                onChange={e => setPassword(e.target.value)}/>

              <button type='submit' className='button'>Login</button>
            </form>
            <p>
              <Link to='/register'>  Don't have and account? Create one here</Link>
              <br></br>
              <Link to='/forgot_password'>  Forgot Password?</Link>
            </p>
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
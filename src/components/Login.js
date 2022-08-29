import {useState} from 'react'
import { Link } from 'react-router-dom'
import './styleform.css'
import {signInWithEmailAndPassword, sendEmailVerification} from 'firebase/auth'
import {auth} from '../conf/fireconf'
import {useNavigate} from 'react-router-dom'
import {useAuthValue} from './AuthContext' //globilise our user details

export function EmailCheck(email){
  return email.includes('@');
} 
function Login(){

    //declare some state variable
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('') 
  const [error, setError] = useState('')
  
  const {setTimeActive} = useAuthValue()
  const navigate = useNavigate()

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
      .catch(err => alert(err.message))
    }
    else{
      navigate('/')
    }
    })
    .catch(err => setError(err.message))
  }

  //a simple log in page
  return(
    <div className='center'>
      <div className='auth'>
        <h1>Login</h1>
        {/* this appearsif there is error */}
        {error && <div className='auth__error'>{error}</div>}
        <form onSubmit={login} name='login_form'>
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

          <button type='submit'>Login</button>
        </form>
        <p>

          <Link to='/register'>  Don't have and account? Create one here</Link>
          <br></br>
          <Link to='/forgot_password'>  Forgot Password?</Link>

        </p>
      </div>
    </div>
  )
}

export default Login
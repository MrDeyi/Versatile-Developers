// import './verifyEmail.css'
// import {useAuthValue} from './AuthContext'
import { AuthContext } from '../../context/AuthContext'
import {useState,useContext, useEffect} from 'react'
import {auth} from '../../conf/fireconf'
import {sendEmailVerification} from 'firebase/auth'
import {useNavigate,Link} from 'react-router-dom'
import Login from './Login'
import './styleform.css'



export function AuthContextEmail(){
  const {user} = auth.currentUser;
  return user? 'Hello there ${user}' : "Please Login";
}

export function EmailCheck(email){
  return email.includes('@');
}
 
function VerifyEmail() {

  const {currentUser} = useContext(AuthContext);
  const [time, setTime] = useState(60)
  // const {timeActive, setTimeActive} = useAuthValue()
  const navigate = useNavigate()

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     currentUser?.reload()
  //     .then(() => {
  //       if(currentUser?.emailVerified){
  //         clearInterval(interval)
  //         navigate('/')
  //       }
  //     })
  //     .catch((err) => {
  //       alert(err.message)
  //     })
  //   }, 1000)
  // }, [navigate, currentUser])

  // useEffect(() => {
  //   let interval = null
  //   if(timeActive && time !== 0 ){
  //     interval = setInterval(() => {
  //       setTime((time) => time - 1)
  //     }, 1000)
  //   }else if(time === 0){
  //     setTimeActive(false)
  //     setTime(60)
  //     clearInterval(interval)
  //   }
  //   return () => clearInterval(interval);
  // }, [timeActive, time, setTimeActive])

  const resendEmailVerification = () => {
    sendEmailVerification(auth.currentUser)
    .then(() => {
      // setTimeActive(true)
    }).catch((err) => {
      alert(err.message)
    })
  }

  return (
    <div className='center'>
      <div className='verifyEmail'>
        <h1>Verify your Email Address</h1>
        <p>
          <strong>A Verification email has been sent to:</strong><br/>
          <span>{currentUser?.email}</span>
        </p>
        <span>Follow the instruction in the email to verify your account</span>       
        <button 
          className='button'
          onClick={resendEmailVerification}
          // disabled={timeActive}
        >Resend Email </button>
        
        <Link to='/login' style={{backgroundColor: "#b3e6ff",
                                              padding:"5px",
                                              border:"2px solid black",
                                              borderRadius:"5px"}}>Log in</Link>
      </div>
    </div>
  )
}

export default VerifyEmail
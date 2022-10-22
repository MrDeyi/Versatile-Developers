import React, {useEffect, useRef ,useState} from 'react';
import emailjs from '@emailjs/browser';
import { useAuthValue } from './AuthContext';
import TWO from './TWOFA.module.css'
import { useNavigate ,Link} from 'react-router-dom';
import { signOut } from 'firebase/auth'
import { auth } from '../../conf/fireconf'


function TWOFA() {

  // const form = useRef();
  const [conf,setConf] = useState('');
  const [pin,setPin] = useState('');
  const {currentUser} = useAuthValue();
  const [time, setTime] = useState(60)
  const {timeActive, setTimeActive} = useAuthValue()
  const navigate = useNavigate();

  const email = currentUser?.email;


  useEffect(()=>{

    function generatePassword() {
      var length = 6,
          charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
          retVal = "";
      for (var i = 0, n = charset.length; i < length; ++i) {
          retVal += charset.charAt(Math.floor(Math.random() * n));
      }
      return retVal;
    }
    const p = generatePassword();
    setPin(p);

    var templateParams = {
      user_name: "",
      user_email: email,
      message : p
    };
    
    // const sendEmail = () => {
      emailjs.send('service_drk9zp8', 'template_x8z5i2m', templateParams,'zQLP9B1pfaaLHLVyS')
        .then(function(response) {
  
          console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
          console.log('FAILED...', error);
        });
    // };
    // sendEmail();
  },[])


  const Confirm = e =>{
    e.preventDefault();
    if(conf === pin){
      //Correct token
      navigate('/')
      console.log(conf);

      // navigate('/')
    }
    else{
      //Wrong token
      signOut(auth);
      navigate('/login')
    }

  }

  return (
    <div className={TWO.box}>
      <h2 className={TWO.h2}>Wits Social App Verification</h2>
      <h1 className={TWO.h1}>for your security, we want to make sure it's really you,We have sent 6 code to your email</h1>
      <input
        className={TWO.input} 
        type ="text"
        placeholder='Enter 6 code digit'
        onChange={e=>setConf(e.target.value)}>
      </input>
      <button className={TWO.button} onClick={Confirm}>Confirm PIN</button>
    </div>
  ); 
};

export default TWOFA;
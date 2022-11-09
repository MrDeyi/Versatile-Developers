import React, {useEffect, useRef ,useState,useContext} from 'react';
import emailjs from '@emailjs/browser';
import { AuthContext } from '../../context/AuthContext';
import TWO from './TWOFA.module.css'
import { useNavigate ,Link} from 'react-router-dom';
import { signOut } from 'firebase/auth'
import { auth } from '../../conf/fireconf'


function TWOFA() {

  const [conf,setConf] = useState('');
  var [pin,setPin] = useState('');
  const {currentUser} = useContext(AuthContext);
  const navigate = useNavigate();
  const[error, setError] = useState('')

  const email = currentUser?.email;


  // // useEffect(()=>{

    
    // const p = generatePassword();
    // setPin(p);

    function generatePassword() {
      var length = 6,
          charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
          retVal = "";
      for (var i = 0, n = charset.length; i < length; ++i) {
          retVal += charset.charAt(Math.floor(Math.random() * n));
      }
      setPin(retVal);
      return retVal;
      // setPin(retVal);
    };
    
    function GetPin(){
      // e.preventDefault();
      pin = generatePassword();
      var templateParams = {
        user_name: "",
        user_email: email,
        message : pin
      };

      emailjs.send('service_drk9zp8', 'template_x8z5i2m', templateParams,'zQLP9B1pfaaLHLVyS')
        .then(function(response) {
          setError("PIN SENT")
        }, function(error) {
          setError("Some Error occured")
          navigate('/')
        });
    };

    function Confirm (){
   
    if(conf === pin){
      navigate('/')
    }
    else{
      //Wrong token
      // signOut(auth);
      setError("wrong Pin")
    }
  }

  return (
    <div className={TWO.box}>
      <h2 className={TWO.h2}>Wits Social App Verification</h2>
      <h1 className={TWO.h1}>for your security, we want to make sure it's really you,We will send 6 code to your email</h1>
      <h1 className={TWO.h1}>{email}</h1>
      {error && <div style={{backgroundColor:"red",width:"200px",height:"50px"}}>{error}</div>}
      <input
        className={TWO.input} 
        type ="text"
        placeholder='Enter 6 code digit'
        onChange={e=>setConf(e.target.value)}>
      </input>
      <button className={TWO.button} onClick={Confirm}>Confirm PIN</button>
      <button className={TWO.button} onClick={GetPin}>GetPin PIN</button>
    </div>
  ); 
};

export default TWOFA;
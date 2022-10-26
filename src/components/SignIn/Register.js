import { useState } from "react";
import { auth,db} from "../../conf/fireconf";
import {useNavigate, Link} from "react-router-dom"
import {createUserWithEmailAndPassword, sendEmailVerification,updateProfile} from 'firebase/auth'
import { useAuthValue } from "./AuthContext";
import Loginstyle from "./Login.module.css"
import loginpic from "../../pic/Login.jpg"
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";


export const CorrectEmail = (str = "") => str.includes('@');

function Register(){

    //Declare some state variable...
    const[email,setEmail] = useState('')
    const[password, setPassword] = useState('')
    const[conPassword, setConPassword] = useState('')
    const[error, setError] = useState('')
    const [loading, setLoading] = useState(false);

    //store the user globally
    const navigate = useNavigate();

    //Check Password and confrim_Password if they match
    const validatePassword = () =>{
        let isValid = true
        if(password !== '' && conPassword !==''){
            if(password !==  conPassword){
                isValid = false
                setError("Passwords do not match")
                return isValid
            }
            if(password.length<6){
                isValid = false
                setError("Passwords should have atleast length of 6")
                return isValid
            }
        }
        return isValid
    }

    // register the user
    // will change this later for specified error
    const register = async (e) => {
        setLoading(true);
        e.preventDefault()
        setError('')
        if(validatePassword()){
            // try{
          const res =  await createUserWithEmailAndPassword(auth,email,password);
          try {
            //Update profile
            updateProfile(res.user, {
                displayName: "New User",
                photoURL: "https://i.postimg.cc/vB4kbnMM/default-avatar.png",
            });
            //create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName: "New User",
              email,
              photoURL: "https://i.postimg.cc/vB4kbnMM/default-avatar.png",
            username:"",
            firstname:"",
            lastname:"",
            orgname:"",
            location:"",
            phonenumber:"",
            birthday:""
            });

            //create empty user chats on firestore
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          } catch (err) {
            console.log(err);
            // setErr(true);
            setLoading(false);
          }

            // .then(async() =>{
            //     // const user  = auth.currentUser
            //     await updateProfile(auth.currentUser, {
            //         displayName: "N0 Name", photoURL: "https://i.postimg.cc/vB4kbnMM/default-avatar.png"
            //       });

            //       await setDoc(doc(db, "users", res.user.uid), {
            //         uid: res.user.uid,
            //         displayName: "N0 Name",
            //         email,
            //         photoURL: "https://i.postimg.cc/vB4kbnMM/default-avatar.png",

            //       });

            //       await setDoc(doc(db, "userChats",  res.user.uid), {

            //       });
            //       navigate("/");
            //     // sendEmailVerification(auth.currentUser)
            //     // .then(async () =>{
            //     //     //registered
            //     //     // setTimeActive(true)
            //     //     // navigate('/verify-email')
            //     // }).catch((err) => alert(err),setLoading(false))
                  
            // })
            //network error
            // .catch(err => setError("User EXISTs Please Log in if you have an ACCOUNT!!")
            // ,setLoading(false))
            setEmail('')
            setPassword('')
            setConPassword('')
        }
    
       
    }

//also this , just a simple form
    return(
         <section className="v-100" style={{backgroundColor: "white"}} data-testid="section">
            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                            <img src={loginpic} alt = "Login"/>
                        
                    </div>

                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <h2 className={Loginstyle.title}>Welcome to Wits Social App</h2>
                        <span>Register in and enjoy the service</span>
                        {loading && "please wait..."}
                        {error && <div className={Loginstyle.auth_error}>{error}</div>}
                        <form onSubmit={register} name ="form" className="Loginfrom" data-testid="form">
                            <div className="form-outline mb-4" style={{backgroundColor: "white"}}>
                                <input
                                    className={Loginstyle.input}
                                    type = 'email'
                                    value = {email}
                                    placeholder = "Enter your Email address"
                                    required
                                    onChange={e => setEmail(e.target.value)}/>
                            </div>

                            <div className="form-outline mb-4" style={{backgroundColor: "white"}}>
                                <input
                                    className={Loginstyle.input}
                                    type = 'password'
                                    value = {password}
                                    placeholder = "Enter your Password"
                                    required
                                    onChange={e => setPassword(e.target.value)}/>
                            </div>
                            <div className="form-outline mb-4" style={{backgroundColor: "white"}}>
                            <input
                                className={Loginstyle.input}
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
    )
}

export default Register
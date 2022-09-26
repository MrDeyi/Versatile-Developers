import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuthValue } from "./AuthContext"
import {useNavigate,Link} from 'react-router-dom'
import { getAuth,updateProfile,updateEmail,updatePassword } from "firebase/auth"
import userP from "../../pic/Mosis_.png"
function UpdateProfile(){

    const emailRef = useRef();
    const firstnameRef = useRef();
    const lastnameRef = useRef();
    const phoneRef = useRef();
    const dobref = useRef();
    const phototiUrl = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { ctUser} = useAuthValue();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const auth = getAuth();
    const user = auth.currentUser;

    function handleSubmit(e) {
        e.preventDefault()
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
          return setError("Passwords do not match")
        }
    
        const promises = []
        setLoading(true)
        setError("")
    
        if (emailRef.current.value !== "mosismdlalose@gmail.com") {
          (updateEmail(user,emailRef.current.value)).then(()=>{
            setError("Nice")
          }).catch(()=>{
            setError("Failed to change email")
          })
        }
        if (passwordRef.current.value) {
          (updatePassword(user,"111111")).then(()=>{
            console.log("Changed")
            setError("Nice password")
          }).catch(()=>{
            console.log("not Changed")
            setError("Failed to change password")
          })
        }
    
        // Promise.all(promises)
        //   .then(() => {
        //     navigate('/')
        //   })
        //   .catch(() => {
        //     (setError("Failed to update account"))
        //   })
        //   .finally(() => {
        //     setLoading(false)
        //   })
      }

    return(
      <div className="container-xl px-4 mt-4">
        {error && <Alert variant="danger">{error}</Alert>}
        <hr className="mt-0 mb-4" />
        <div className="row">
          <div className="col-xl-4">
            {/* Profile picture card*/}
            <div className="card mb-4 mb-xl-0">
              <div className="card-header">Profile Picture</div>
              <div className="card-body text-center">
                {/* Profile picture image*/}
                <img className="img-account-profile rounded-circle mb-2" src= {userP} alt="" />
                {/* Profile picture help block*/}
                <div className="small font-italic text-muted mb-4">JPG or PNG no larger than 5 MB</div>
                {/* Profile picture upload button*/}
                <input type="file" className="form-control"/>
              </div>
            </div>
          </div>
          <div className="col-xl-8">
            {/* Account details card*/}
            <div className="card mb-4">
              <div className="card-header">Account Details</div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  {/* Form Group (username)*/}
                  <div className="mb-3">
                    <label className="small mb-1" htmlFor="inputUsername">Username (how your name will appear to other users on the site)</label>
                    <input className="form-control" id="inputUsername" type="text" placeholder="Leave blank to keep the same" defaultValue="MrDatabase" />
                  </div>
                  {/* Form Row*/}
                  <div className="row gx-3 mb-3">
                    {/* Form Group (first name)*/}
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputFirstName">First name</label>
                      <input className="form-control" id="inputFirstName" type="text" ref={firstnameRef} placeholder= "Leave blank to keep the same"/>
                    </div>
                    {/* Form Group (last name)*/}
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputLastName">Last name</label>
                      <input className="form-control" id="inputLastName" type="text" ref={lastnameRef} placeholder="Leave blank to keep the same"/>
                    </div>
                  </div>
                  {/* Form Row        */}
                  <div className="row gx-3 mb-3">
                    {/* Form Group (organization name)*/}
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputOrgName">Organization name</label>
                      <input className="form-control" id="inputOrgName" type="text" placeholder="Enter your organization name" defaultValue="Versetile Dev" />
                    </div>
                    {/* Form Group (location)*/}
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputLocation">Location</label>
                      <input className="form-control" id="inputLocation" type="text" placeholder="Enter your location" defaultValue="Braam" />
                    </div>
                  </div>
                  {/* Form Group (email address)*/}
                  <div className="mb-3">
                    <label className="small mb-1" htmlFor="inputEmailAddress">Email address</label>
                    <input className="form-control" id="inputEmailAddress" type="email" ref={emailRef} defaultValue="mosismdlalose@gmail.com" />
                  </div>
                  {/* Form Row*/}
                  <div className="row gx-3 mb-3">
                    {/* Form Group (phone number)*/}
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputPhone">Phone number</label>
                      <input className="form-control" id="inputPhone" type="tel" ref={phoneRef} placeholder="Enter your phone number" defaultValue="" />
                    </div>
                    {/* Form Group (birthday)*/}
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputBirthday">Birthday</label>
                      <input className="form-control" id="inputBirthday" type="text" name="birthday" ref={dobref} placeholder="Enter your birthday" defaultValue="" />
                    </div>
                  </div>
                  <div className="row gx-3 mb-3">
                    {/* Form Group (P)*/}
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputPhone">Password</label>
                      <input className="form-control" id="inputp" type="password" ref={passwordRef} placeholder="Leave blank to keep the same"/>
                    </div>
                    {/* Form Group PC*/}
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputBirthday">Password Confirmation</label>
                      <input className="form-control" id="inputpc" type="password" ref={passwordConfirmRef} placeholder="Leave blank to keep the same"/>
                    </div>
                  </div>
                  
                  {/* Save changes button*/}
                  <button className="btn btn-primary" type="submit">Save changes</button>
                  
                  <Link to='/' style={{backgroundColor: "#000",
                  
                    padding:"5px",
                    border:"2px solid black",
                    borderRadius:"5px"}}> Cancel</Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default UpdateProfile
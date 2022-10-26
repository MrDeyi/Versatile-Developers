import React, { useEffect, useRef, useState,useContext } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { AuthContext } from "../../context/AuthContext"
import {useNavigate,Link} from 'react-router-dom'
import { getAuth,updateProfile,updateEmail,updatePassword } from "firebase/auth"
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { async } from "@firebase/util"

function UpdateProfile(){

  function Home(){
    navigate('/')
 }

    const emailRef = useRef();
    const usernameRef = useRef();
    const firstnameRef = useRef();
    const lastnameRef = useRef();
    const phoneRef = useRef();
    const dobref = useRef();
    const orgref = useRef();
    const locationref = useRef();
    // const dobref = useRef();


    const photoUrlref = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const {currentUser} = useContext(AuthContext);
    const [error, setError] = useState("");
    const [url_user,set_url_user] = useState("")
    const [loading, setLoading] = useState(false);

    //from API
    const [username,setUserName] = useState("");
    const [firstrname,setFirstName] = useState("");
    const [lastname,setLastName] = useState("");
    const [orgname,setOrgName] = useState("");
    const [location,setLocation] = useState("");
    const [phonenumber,setPhone] = useState("");
    const [birthday,setBirthday] = useState("");



    const navigate = useNavigate();
    const auth = getAuth();
    const user = auth.currentUser;

    //for uploading user_photo
    const storage = getStorage();

    const metadata = {
      contentType: 'image/jpeg'
    };

    useEffect(()=>{
      // console.log(currentUser.uid)
      // console.log(auth.currentUser.uid)
      fetch(`http://localhost:4000/${auth.currentUser.uid}`)
      .then((response)=>response.json())
      .then((data)=>{
        setFirstName(data.firstname)
        setUserName(data.username)
        setLastName(data.lastname)
        setOrgName(data.orgname)
        setLocation(data.location)
        setPhone(data.phonenumber)
        setBirthday(data.birthday)
    });
    },[])

    function POST(){
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          uid:auth.currentUser.uid,
          email:user.email ,
          username: user?.displayName,
          firstname:firstrname,
          lastname:lastname,
          orgname:orgname,
          location:location,
          phonenumber:phonenumber,
          birthday:birthday,
          displayName:user.displayName,
          photoURL: user?.photoURL,
          }
        )};
      fetch("http://localhost:4000/RegisterUser",options)
        .then(response => response.json())
        .then(data =>setError("PROFILE changed"))
     
    }

    function handleSubmit(e) {
      console.log(currentUser.uid)
      console.log(auth.currentUser.uid)
        e.preventDefault()        
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
          return setError("Passwords do not match")
        }
    
        setLoading(true)
        setError("")

        var url_id = document.getElementById("url_id");

        //update photo profile
        if(url_id.value.length !== 0){
          var filename = url_id.files[0];
          // console.log(filename);
  
          // Upload file and metadata to the object 'images/mountains.jpg'
          const storageRef = ref(storage, 'images/' + filename);
          uploadBytesResumable(storageRef, filename).then(() => {
            getDownloadURL(storageRef).then(async(downloadURL) => {
              await updateProfile(auth.currentUser, {
                photoURL: downloadURL
              });
            });
          });
        }
      
        if (passwordRef.current.value) {
          (updatePassword(auth.currentUser,passwordRef.current.value)).then(()=>{
            // console.log("Changed")
            setError("Nice password")
          }).catch(()=>{
            // console.log("not Changed")
            setError("Failed to change password")
          })
        }
        
        if(usernameRef.current.value !== user.displayName && usernameRef.current.value!==""){
          updateProfile(auth.currentUser, {
            displayName: usernameRef.current.value
          }).then(() => {
            setUserName(usernameRef)
 
          }).catch((error) => {
            setError(error)
          });
        }if( firstnameRef.current.value !== ""){
          setFirstName(firstnameRef.current.value)
        }if(lastnameRef.current.value!=""){
          setLastName(lastnameRef.current.value)
        }if( orgref.current.value!=""){
          setOrgName(orgref.current.value)
        }if( locationref.current.value!=""){
          setLocation(locationref.current.value)
        }if( phoneRef.current.value!=""){
          setPhone(phoneRef.current.value)
        }if( dobref.current.value!=""){
            setBirthday(dobref.current.value)
        }
        POST();
          
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
                <img className="img-account-profile rounded-circle mb-2" src= {user.photoURL} alt="" />
                {/* Profile picture help block*/}
                <div className="small font-italic text-muted mb-4">JPG or PNG no larger than 5 MB</div>
                {/* Profile picture upload button*/}
                <input type="file" id="url_id" className="form-control"/>
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
                    <input className="form-control" id="inputUsername" type="text" ref={usernameRef} placeholder="Leave blank to keep the same" defaultValue={user?.displayName} />
                  </div>
                  {/* Form Row*/}
                  <div className="row gx-3 mb-3">
                    {/* Form Group (first name)*/}
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputFirstName">First name</label>
                      <input className="form-control" id="inputFirstName" type="text" ref={firstnameRef} placeholder= "Leave blank to keep the same" />
                    </div>
                    {/* Form Group (last name)*/}
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputLastName">Last name</label>
                      <input className="form-control" id="inputLastName" type="text" ref={lastnameRef} placeholder="Leave blank to keep the same" />
                    </div>
                  </div>
                  {/* Form Row        */}
                  <div className="row gx-3 mb-3">
                    {/* Form Group (organization name)*/}
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputOrgName">Organization name</label>
                      <input className="form-control" id="inputOrgName" type="text" ref={orgref} placeholder="Enter your organization name" />
                    </div>
                    {/* Form Group (location)*/}
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputLocation">Location</label>
                      <input className="form-control" id="inputLocation" type="text" ref={locationref} placeholder="Enter your location"  />
                    </div>
                  </div>
                  {/* Form Group (email address)*/}
                  <div className="mb-3">
                    <label className="small mb-1" htmlFor="inputEmailAddress">Email address</label>
                    <input className="form-control" id="inputEmailAddress" type="email" ref={emailRef} />
                  </div>
                  {/* Form Row*/}
                  <div className="row gx-3 mb-3">
                    {/* Form Group (phone number)*/}
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputPhone">Phone number</label>
                      <input className="form-control" id="inputPhone" type="tel" ref={phoneRef} placeholder="Enter your phone number" />
                    </div>
                    {/* Form Group (birthday)*/}
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputBirthday">Birthday</label>
                      <input className="form-control" id="inputBirthday" type="text" name="birthday" ref={dobref} placeholder="Enter your birthday"  />
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

                  <div className="mb-3">
                    <label className="small mb-1" htmlFor="photourl">Url of a photo</label>
                    <input className="form-control" id="photourl" type="url" ref={photoUrlref} />
                  </div>
                  
                  {/* Save changes button*/}
                  <button className="btn btn-primary" type="submit">Save changes</button>
                  </form>
                  
                  <button onClick={Home} >Home</button>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default UpdateProfile
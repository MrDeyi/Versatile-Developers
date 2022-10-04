import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuthValue } from "./AuthContext"
import {useNavigate,Link} from 'react-router-dom'
import { getAuth,updateProfile,updateEmail,updatePassword } from "firebase/auth"
import userP from "../../pic/Mosis_.png"
import { auth } from "../../conf/fireconf"
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

function UpdateProfile(){

    const emailRef = useRef();
    const usernameRef = useRef();
    const firstnameRef = useRef();
    const lastnameRef = useRef();
    const phoneRef = useRef();
    const dobref = useRef();
    const photoUrlref = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const {currentUser} = useAuthValue()
    const [error, setError] = useState("");
    const [url_user,set_url_user] = useState("")
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const auth = getAuth();
    const user = auth.currentUser;

    //for uploading user_photo
    const storage = getStorage();

    const metadata = {
      contentType: 'image/jpeg'
    };

    function handleSubmit(e) {
        e.preventDefault()
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
          return setError("Passwords do not match")
        }
    
        const promises = []
        setLoading(true)
        setError("")

        //no updating of email for now
        // if (emailRef.current.value !== user.email) {
        //   (updateEmail(user,emailRef.current.value)).then(()=>{
        //     setError("Nice")
        //   }).catch(()=>{
        //     setError("Failed to change email")
        //   })
        // }

        var url_id = document.getElementById("url_id");

        //update photo profile
        if(url_id.value.length != 0){
          var filename = url_id.files[0].name;
          // console.log(filename);
  
          // Upload file and metadata to the object 'images/mountains.jpg'
          const storageRef = ref(storage, 'images/' + filename);
          const uploadTask = uploadBytesResumable(storageRef, url_id, metadata);
  
          // Listen for state changes, errors, and completion of the upload.
          uploadTask.on('state_changed',
          (snapshot) => {
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
              case 'paused':
                console.log('Upload is paused');
                break;
              case 'running':
                console.log('Upload is running');
                break;
            }
          }, 
          (error) => {
            // A full list of error codes is available at
            // https://firebase.google.com/docs/storage/web/handle-errors
            switch (error.code) {
              case 'storage/unauthorized':
                // User doesn't have permission to access the object
                break;
              case 'storage/canceled':
                // User canceled the upload
                break;
  
              // ...
  
              case 'storage/unknown':
                // Unknown error occurred, inspect error.serverResponse
                break;
            }
          }, 
          () => {
            // Upload completed successfully, now we can get the download URL
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              console.log('File available at', downloadURL);
              set_url_user(downloadURL);
            });
          }
          );
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
        

        if(photoUrlref.current.value!=""){
          updateProfile(auth.currentUser, {
            photoURL: photoUrlref.current.value
          }).then(() => {
            // Profile updated!
            // ...
            // console.log("Changed")
            setError("Avater changed")
          }).catch((error) => {
            // An error occurred
            // ...
            // console.log("not Changed")
            setError("Failed to change Avatar")
          });
        }
        
        if(usernameRef.current.value !== user.displayName && usernameRef.current.value!=""){
          updateProfile(auth.currentUser, {
            displayName: usernameRef.current.value
          }).then(() => {
            // Profile updated!
            // ...
            // console.log("Changed")
            setError("UserName changed")
          }).catch((error) => {
            // An error occurred
            // ...
            // console.log("not Changed")
            setError("Failed to change Username")
          });
        }
        if(firstnameRef.current.value !== user.firstName  && firstnameRef.current.value!=""){
          updateProfile(auth.currentUser, {
            firstname: firstnameRef.current.value
          }).then(() => {
            // Profile updated!
            // ...
            // console.log("Changed")
            setError("Firstname changed")
          }).catch((error) => {
            // An error occurred
            // ...
            // console.log("not Changed")
            setError("Failed to change firstname")
          });
        }

        if(lastnameRef.current.value !== user.lastName && lastnameRef.current.value!=""){
          updateProfile(auth.currentUser, {
            lastName: lastnameRef.current.value
          }).then(() => {
            // Profile updated!
            // ...
            // console.log("Changed")
            setError("Lastname changed")
          }).catch((error) => {
            // An error occurred
            // ...
            // console.log("not Changed")
            setError("Failed to change lastname")
          });
        }

        if(phoneRef.current.value !== user.phoneNumber  && phoneRef.current.value!=""){
          updateProfile(auth.currentUser, {
            phoneNumber: phoneRef.current.value
          }).then(() => {
            // Profile updated!
            // ...
            // console.log("Changed")
            setError("Phone number changed")
          }).catch((error) => {
            // An error occurred
            // ...
            // console.log("not Changed")
            setError("Failed to change phone number")
          });
        }
        if(dobref.current.value !== user.dob && dobref.current.value!=""){
          updateProfile(auth.currentUser, {
            dob: dobref.current.value
          }).then(() => {
            // Profile updated!
            // ...
            // console.log("Changed")
            setError("Date of birth changed")
          }).catch((error) => {
            // An error occurred
            // ...
            // console.log("not Changed")
            setError("Failed to change date of birth")
          });
        }
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
                      <input className="form-control" id="inputFirstName" type="text" ref={firstnameRef} placeholder= "Leave blank to keep the same" defaultValue={user?.FName}/>
                    </div>
                    {/* Form Group (last name)*/}
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputLastName">Last name</label>
                      <input className="form-control" id="inputLastName" type="text" ref={lastnameRef} placeholder="Leave blank to keep the same" defaultValue={user?.LName}/>
                    </div>
                  </div>
                  {/* Form Row        */}
                  <div className="row gx-3 mb-3">
                    {/* Form Group (organization name)*/}
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputOrgName">Organization name</label>
                      <input className="form-control" id="inputOrgName" type="text" placeholder="Enter your organization name" defaultValue={user?.orgname} />
                    </div>
                    {/* Form Group (location)*/}
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputLocation">Location</label>
                      <input className="form-control" id="inputLocation" type="text" placeholder="Enter your location" defaultValue={user?.location} />
                    </div>
                  </div>
                  {/* Form Group (email address)*/}
                  <div className="mb-3">
                    <label className="small mb-1" htmlFor="inputEmailAddress">Email address</label>
                    <input className="form-control" id="inputEmailAddress" type="email" ref={emailRef} defaultValue={user?.email} />
                  </div>
                  {/* Form Row*/}
                  <div className="row gx-3 mb-3">
                    {/* Form Group (phone number)*/}
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputPhone">Phone number</label>
                      <input className="form-control" id="inputPhone" type="tel" ref={phoneRef} placeholder="Enter your phone number" defaultValue={user?.phoneNumber}/>
                    </div>
                    {/* Form Group (birthday)*/}
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputBirthday">Birthday</label>
                      <input className="form-control" id="inputBirthday" type="text" name="birthday" ref={dobref} placeholder="Enter your birthday" defaultValue={user?.dob} />
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
                  <Link to='/' style={{
                    backgroundColor: "#000",
                    width:"500px",
                    padding:"5px",
                    border:"2px solid black",
                    borderRadius:"5px"}}> Back</Link>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default UpdateProfile
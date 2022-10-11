import React, { useEffect, useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuthValue } from "./AuthContext"
import {useNavigate,Link} from 'react-router-dom'
import { getAuth,updateProfile,updateEmail,updatePassword } from "firebase/auth"
import userP from "../../pic/Mosis_.png"
import { auth } from "../../conf/fireconf"
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

function ViewProfile(){

    function Update(){
        navigate('/update')
     }
     function Home(){
        navigate('/')
     }

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
      fetch(`http://localhost:4000/${user.email}`)
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


    return(
        <div>
            <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" />
            <div className="container bootstrap snippets bootdey">
                <div className="row">
                <div className="profile-nav col-md-3">
                    <div className="panel">
                    <div className="user-heading round">
                        <img  src= {user.photoURL} alt="" />
                        <h1>{`${firstrname}`} {`${lastname}`}</h1>
                        <p>{user?.email} </p>
                    </div>
                    <div className="nav nav-pills nav-stacked">
                        <button className="active" onClick={Update}> Edit profile</button>
                        <button> Recent Activity </button>
                        <button onClick={Home}>Home</button>
                    </div>
                    </div>
                </div>
                <div className="profile-info col-md-9">
                    <div className="panel">
                        <form>
                            <textarea placeholder="Whats in your mind today?" rows={2} className="form-control input-lg p-text-area" defaultValue={""} />
                        </form>
                        <footer className="panel-footer">
                            <button className="btn btn-warning pull-right">Post something {username}</button>
                            <ul className="nav nav-pills">
                            <li>
                                <a href="#"><i className="fa fa-map-marker" /></a>
                            </li>
                            <li>
                                <a href="#"><i className="fa fa-camera" /></a>
                            </li>
                            <li>
                                <a href="#"><i className=" fa fa-film" /></a>
                            </li>
                            <li>
                                <a href="#"><i className="fa fa-microphone" /></a>
                            </li>
                            </ul>
                        </footer>
                    </div>
                    <div className="panel">
                    <div className="bio-graph-heading">
                    If this is your life
                    Then all that matters lives in your mind
                    And the truth is up for you to define
                    I hope that you choose to be mine
                    </div>
                    <div className="panel-body bio-graph-info">
                        <h1>Bio Graph</h1>
                        <div className="row">
                        <div className="bio-row">
                            <p><span>First Name </span>: {`${firstrname}`}</p>
                        </div>
                        <div className="bio-row">
                            <p><span>Last Name </span>: {`${lastname}`}</p>
                        </div>
                        <div className="bio-row">
                            <p><span>Country </span>: SouthAfrica {`${location}`}</p>
                        </div>
                        <div className="bio-row">
                            <p><span>Birthday</span>: {`${birthday}`}</p>
                        </div>
                        <div className="bio-row">
                            <p><span>Occupation </span>: UI Designer</p>
                        </div>
                        <div className="bio-row">
                            <p><span>Email </span>: {user?.email}</p>
                        </div>
                        <div className="bio-row">
                            <p><span>Orginazation </span>: {`${orgname}`}</p>
                        </div>
                        <div className="bio-row">
                            <p><span>Phone </span>: {`${phonenumber}`}</p>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div>
                    
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default ViewProfile
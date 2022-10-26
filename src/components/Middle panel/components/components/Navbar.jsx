import React, { useContext } from 'react'
import {signOut} from "firebase/auth"
import { AuthContext } from "../../../../context/AuthContext";
// import { ChatContext } from "../../../../context/ChatContext";
import { db ,auth} from "../../../../conf/fireconf";
import "./Navbar.css"
const Navbar = () => {
  const {currentUser} = useContext(AuthContext)

  return (
    <div className='navbarc'>
      {/* <span className="logo">Lama Chat</span> */}
      <div className="user">
        <img  src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button onClick={()=>signOut(auth)}>logout</button>
      </div>
    </div>
  )
}

export default Navbar
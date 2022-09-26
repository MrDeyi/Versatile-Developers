import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Rightpanel.css'
import ReactPlayer from 'react-player'
import { useAuthValue } from '../SignIn/AuthContext';
import { signOut } from 'firebase/auth';
import { auth,db } from '../../conf/fireconf';
import User_P from "../../pic/user.png"

import Edit_P from "../../pic/edit.jpg"
import Logout_P from "../../pic/logout.jpg"
import setting_P from "../../pic/setting.jpg"
import messege_P from "../../pic/message.png"
import { Link } from 'react-router-dom'
import { ReactComponent as BellIcon } from '../../icons/bell.svg';
import { ReactComponent as MessengerIcon } from '../../icons/messenger.svg';
import { ReactComponent as CaretIcon } from '../../icons/caret.svg';
import { ReactComponent as PlusIcon } from '../../icons/plus.svg';
import { ReactComponent as CogIcon } from '../../icons/cog.svg';
import { ReactComponent as ChevronIcon } from '../../icons/chevron.svg';
import { ReactComponent as ArrowIcon } from '../../icons/arrow.svg';
import { ReactComponent as BoltIcon } from '../../icons/bolt.svg';
import { ReactComponent as User_picture } from "../../pic/user.png";
import {useNavigate} from 'react-router-dom'

import React, { useState, useEffect, useRef } from 'react';
import { collection,addDoc } from 'firebase/firestore';

function SignOut(){
   signOut(auth)
}
function Rightpanel() {

   const navigate = useNavigate()
   const {currentUser} = useAuthValue()
   function Update(){
      navigate('/update')

      //testing somethng
      //this works

      /*const docref = addDoc(collection(db,"Test"),{
         data:"hello"
      });*/

   }
  return (
    
    <div className="rightpanel">
      <Navbar>
         
         <Navitems icon={<PlusIcon />} />
         <Navitems icon={<BellIcon />} />
         <Navitems icon={<MessengerIcon />} />
         <Navitems icon={<CaretIcon/>}>
            <DropdownMenu></DropdownMenu>
         </Navitems>
         <Navitems icon={<ArrowIcon/>}>
            <span onClick={() => signOut(auth)}>Sign Out</span>
            {/* {SignOut()} */}
         </Navitems>
      </Navbar>
      <div className='profile'>
         <h1>Profile</h1>
         <p><strong>Email: </strong>{currentUser?.email}</p>
         <p>
            <strong>Email verified: </strong>
            {`${currentUser?.emailVerified}`}
         </p>
         <button onClick={Update}>Edit Profile</button>
      </div>
      
         <div className='tiktok' data-testid="tiktok">
            <div className='videos' data-testid="video">
               <ReactPlayer
                  className='react-player'
                  url='https://www.youtube.com/watch?v=32GjzPu07M4'
                  width='100%'
                  height='100%'
                  border-radius='20%'
                  controls
                  data-testid="player"
                />
            </div>
            <div className='views' data-testid="views">view</div>
            <div className='comments' data-testid="comments">comments</div>
            <div className='comment ' data-testid="space">Add your comment</div>
         </div>
        
    </div>
  );
}

function DropdownMenu(){
   function DropdownItem(props){
      return(
         <a href='#' className='pmenu-item'>
            <span className='picon-button'>{props.leftIcon}</span>
            {props.children}
            <span className='picon-right'>{props.rightIcon}</span>
         </a>
      )
   }
   return(
      <div className='pdropdown'>
         <DropdownItem
            >My Profile
         </DropdownItem>
         <DropdownItem
            leftIcon={<CogIcon/>}
            >Setting
         </DropdownItem>
      </div>
   )
}

function Navbar(props){
   return(
      <nav className='pnav'>
         <ul className='pnav-nav'>{props.children}</ul>
      </nav>
   )
}

function Navitems(props){

   const [open,setOpen] = useState(false);
   return(
      <li className='pnav-item'>
         <a href='#' className='picon-button' onClick={() => setOpen(!open)}>
            {props.icon}
            {props.function}
         </a>
         {open && props.children}
      </li>
   )
}

export default Rightpanel;
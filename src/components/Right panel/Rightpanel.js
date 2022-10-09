import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Rightpanel.css'
import ReactPlayer from 'react-player'
import { useAuthValue } from '../SignIn/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../../conf/fireconf';
import User_P from "../../pic/user.png"
import Edit_P from "../../pic/edit.jpg"
import Logout_P from "../../pic/logout.jpg"
import setting_P from "../../pic/setting.jpg"
import messege_P from "../../pic/message.png"
import { Link } from 'react-router-dom'



function Rightpanel() {

 /*  const hide = e=>{
      const toggleMenu = document.querySelector(".menu");
      toggleMenu.classList.toggle("active")
  }*/


  return (
    
    <div className="rightpanel">
      {/* <div className='action'> */}
         <div 
            className='prof' 
           /* onClick={()=>{
               signOut(auth)
            }}*/>
            <img 
               src={User_P} 
               alt='User' 
               className='user'
               width={50} height = {50}>
            </img>
            {/* <div className='menu'>
               <h3>{currentUser?.email}<br></br><span>Computer Science</span></h3>
                  <ul>
                     <li><img src = {User_P} alt = "User" width={50} height = {50}/> <Link to = " ">My Profile </Link></li>
                        <li><img src = {Edit_P} alt = "User" width={50} height = {50}/> <Link to = " ">Edit Profile </Link></li>
                        <li><img src = {messege_P} alt = "User" width={50} height = {50}/> <Link to = " "> Chats </Link></li>
                        <li><img src = {setting_P} alt = "User" width={50} height = {50}/> <Link to = " "> Settings </Link></li>
                        <li><img src = {Logout_P} alt = "User" width={50} height = {50}/> 
                        <li
                           className='row'
                           onClick={
                           () => 
                           signOut(auth)
                           }
                           >Log Out        
                        </li>
                     </li>
                  </ul>
            </div> */}
                
            <div className='tiktok' data-testid="tiktok">
               <div className='videos' data-testid="video">
                  <ReactPlayer
                     className='react-player'
                     url='https://www.youtube.com/watch?v=32GjzPu07M4'
                     width='100%'
                     height='90%'
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
        {/* </div> */}
    </div>
  );
}

export default Rightpanel;
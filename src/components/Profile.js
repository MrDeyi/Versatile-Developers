import './profile.css'
import {useAuthValue} from './AuthContext'
import { signOut } from 'firebase/auth' 
import { auth } from '../conf/fireconf'
import User_P from "../pic/user.png"
import Edit_P from "../pic/edit.jpg"
import Logout_P from "../pic/logout.jpg"
import setting_P from "../pic/setting.jpg"
import messege_P from "../pic/message.png"
import { Link } from 'react-router-dom'
import TWOFA from './TWOFA'
// import Home from './Home/home'


function Profile() {

    const hide = e=>{
        const toggleMenu = document.querySelector(".menu");
        toggleMenu.classList.toggle("active")
    }
    const {currentUser} = useAuthValue()
    return (

        // <TWOFA></TWOFA>
      <div className='center'>
        <div className='action'>
            <div className='prof' onClick={hide}>
                <img 
                    src={User_P} 
                    alt='User' 
                    className='user'
                    width={50} height = {50}>
                </img>
                <div className='menu'>
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
                </div>

                <div className='tiktok'>
                    <div className='videos'>
                        Videos
                    </div>
                    <div className='views'>
                        view
                    </div>
                    <div className='comments'>
                        comments
                    </div>
                    <div className='comment'>
                        Add your comment
                    </div>
                </div>
            </div>
        </div>
      </div>
  )
}

export default Profile
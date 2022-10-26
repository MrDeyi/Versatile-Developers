import './Rightpanel.css'
import ReactPlayer from 'react-player'
import { AuthContext } from '../../context/AuthContext';
import { signOut ,deleteUser} from 'firebase/auth';
import { auth} from '../../conf/fireconf';
import { ReactComponent as BellIcon } from '../../icons/bell.svg';
import { ReactComponent as MessengerIcon } from '../../icons/messenger.svg';
import { ReactComponent as CaretIcon } from '../../icons/caret.svg';
import { ReactComponent as PlusIcon } from '../../icons/plus.svg';
import { ReactComponent as CogIcon } from '../../icons/cog.svg';
import { ReactComponent as ChevronIcon } from '../../icons/chevron.svg';
import { ReactComponent as ArrowIcon } from '../../icons/arrow.svg';
import { ReactComponent as DeleteIcon } from '../../icons/delete-user.svg';
import { ReactComponent as UserIcon } from '../../icons/user.svg';
import { ReactComponent as EditIcon } from '../../icons/edit.svg';
import { ReactComponent as BoltIcon } from '../../icons/bolt.svg';
import {useNavigate} from 'react-router-dom'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState,useContext,useRef } from 'react';

function Rightpanel() {

   const navigate = useNavigate()
   const {currentUser} =  useContext(AuthContext)
   // const img = currentUser.photoURL;
   function Update(){
      navigate('/update')
   }

   function SignOut(){
      signOut(auth)
   }

   function View(){
      navigate('/viewupdate')   
   }

   function DeleteUser(){
      deleteUser(currentUser).then(() => {
         // User deleted.
         navigate('/')
       }).catch((error) => {
         // An error ocurred
         // ...
         console.log("Couldn't Delete")
       });
   }

      
   function DropdownMenu(){
      function DropdownItem(props){
         return(
            <button onClick={props.fun} className='pmenu-item'>
               <span className='picon-button'>{props.leftIcon}</span>
               {props.children}
               <span className='picon-right'>{props.rightIcon}</span>
            </button>
         )
      }
      return(
         <div className='pdropdown'>
            <DropdownItem
               leftIcon = {<UserIcon/>} fun={View}
               >My Profile
            </DropdownItem>

            <DropdownItem
               leftIcon = {<EditIcon/>} fun={Update}
               >Edit Profile
            </DropdownItem>

            <DropdownItem
               leftIcon={<CogIcon/>}
               >Setting
            </DropdownItem>

            <DropdownItem
               leftIcon={<DeleteIcon/>} fun={DeleteUser}
               >Delete Account
            </DropdownItem>

            <DropdownItem
               leftIcon={<ArrowIcon/>} fun={SignOut}
               >Sign Out
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
      
      return(
         <li className='pnav-item'>
            <a  className='picon-button' onClick={() => setOpen(!open)}>
               {props.icon}
            </a>
            {open && props.children}
         </li>
      )
   }
   const [open,setOpen] = useState(false);
   const [show, setShow] = useState(false);
   const date = new Date();

   function Events(e){
      e.preventDefault()  
      const options = {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({
            id: "1",
            person_img: currentUser.photoURL,
            person_name: CreatorRef.current.value,
            person_role: "Orginizer",
            event_img: photoUrlref.current.value,
            event_title: EventTitleRef.current.value,
            month: DateRef.current.value,
            date: "30",
            dayname: "Sunday",
            time: "9am-14pm",
            description: EventDesRef.current.value,
            participants: 0,
            likes: 0,
            share: 0
           }
         )};
       fetch("http://localhost:4000/Event",options)
         .then(response => response.json())
         .then(console.log(options))
      
         setShow(false);
   }

const handleClose = () => setShow(false); 

const handleShow = () => setShow(true);

const EventTitleRef = useRef();
const EventDesRef = useRef();
const DateRef = useRef();
const CreatorRef = useRef();
const photoUrlref = useRef();
  return (
    
    <div className="rightpanel">
      <Navbar>
      <Navitems icon={<PlusIcon onClick={handleShow}/>}  />
         <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Post Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={Events}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Event title</Form.Label>
        <Form.Control type="text" placeholder="Title" ref = {EventTitleRef} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Event description</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="more about the event" ref = {EventDesRef}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Creator name</Form.Label>
        <Form.Control type="text" placeholder="name" ref = {CreatorRef}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Date</Form.Label>
        <Form.Control type="text" placeholder="AUG 27" ref = {DateRef}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <label class="form-label" for="customFile">Event image</label>
      <input type="file" class="form-control" id="customFile" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <label class="form-label" for="customFile">Event image link</label>
      <input class="form-control" id="photourl" type="url" ref={photoUrlref}/>
      </Form.Group>

      <Button variant="secondary" type = "submit">
            Submit
          </Button>
    </Form>
        </Modal.Body>
        <Modal.Footer>
          
          <Button variant="primary" onClick={handleClose}>Cancel</Button>
        </Modal.Footer>
      </Modal>

         <Navitems icon={<BellIcon />} fun={Update} />
         <Navitems icon={<MessengerIcon />} />
         <Navitems icon={<CaretIcon/>}>
            <DropdownMenu></DropdownMenu>
         </Navitems>
      </Navbar>
      
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


export default Rightpanel;
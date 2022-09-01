import './Middlepanel.css'
import Status from './components/Status.js'
import People from './components/People.js'
import Events from './components/Events.js'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUserFriends,FaComments } from "react-icons/fa";
import { HiUserGroup,HiOutlineHome,HiFlag } from "react-icons/hi";
import { useState } from 'react';

function Middlepanel() {
    const [home,setHome]=useState(true);
    const [freinds,setFreinds]=useState(false);
    const [chats,setChats]=useState(false);
    const [bus,setBus]=useState(false);

    const gethome=()=>{
        setHome(true)
        setFreinds(false)
    }
    const getfreinds=()=>{
        setHome(false)
        setFreinds(true)
    }
    const getalert=()=>{
        setHome(false)
        setFreinds(false)
        alert("oifejncjewr")
    }
    
    return ( 
        <div className='Middlepanel'>

        <Navbar bg="bg-info text-white" variant="light">
        <Container>
          <Nav className="me-auto">
            <Nav.Link ><HiOutlineHome onClick={gethome} className="homeicon"/></Nav.Link>
            <Nav.Link ><HiUserGroup onClick={getfreinds} className="homeicon"/></Nav.Link>
            <Nav.Link ><FaComments onClick={()=>setChats(!chats)} className="homeicon"/></Nav.Link>
            <Nav.Link ><HiFlag onClick={getalert} className="homeicon"/></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
   

            <Status/>
            <div className="display" style={{ width: '98%',height:'70%', backgroundColor: "lightblue",margin:'10px', padding:0 ,overflow: 'auto'}}>
     
              {freinds && <People/>} 
              {home && <Events/>}
            </div>
        </div>
       
     );
}

export default Middlepanel;
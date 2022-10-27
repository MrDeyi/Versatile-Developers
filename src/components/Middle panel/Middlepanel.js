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
import Bus from './components/Bus.js';
import Chats from './components/Chats';
import Public_Groups from './components/Public_Groups';

function Middlepanel() {
    const [home,setHome]=useState(true);
    const [freinds,setFreinds]=useState(false);
    const [bus,setBus]=useState(false);
    const [chat,setChats]=useState(false);
    const [groups,setGroups]=useState(false);

    const gethome=()=>{
        setHome(true)
        setFreinds(false)
        setBus(false)
        setChats(false)
        setGroups(false)
    }
    const getchats=()=>{
      setChats(true)
      setHome(false)
      setFreinds(false)
      setBus(false)
      setGroups(false)
  }
    const getfreinds=()=>{
        setHome(false)
        setFreinds(true)
        setBus(false)
        setChats(false)
        setGroups(false)
    }
    const getalert=()=>{
        setHome(false)
        setFreinds(false)
        setBus(true)
        setChats(false)
        setGroups(false)
    }
    const getGroup=()=>{
      setHome(false)
      setFreinds(false)
      setBus(false)
      setChats(false)
      setGroups(true)
  }
    
    return ( 
        <div className='Middlepanel'>

        <Navbar bg="bg-info text-white" variant="light">
        <Container>
        <Nav className="me-auto">
            <Nav.Link ><HiOutlineHome onClick={gethome} className="homeicon" data-testid="house" /></Nav.Link>
            <Nav.Link ><FaUserFriends onClick={getfreinds} className="homeicon" data-testid="group"/></Nav.Link>
            <Nav.Link ><HiUserGroup onClick={getGroup} className="homeicon" data-testid="group"/></Nav.Link>
            <Nav.Link ><FaComments onClick={getchats} className="homeicon" data-testid="chats"/></Nav.Link>
            <Nav.Link ><HiFlag onClick={getalert} className="homeicon" data-testid="flag"/></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
   
            <Status/>
            <div className="display" style={{ width: '98%',height:'78%', backgroundColor: "lightblue",margin:'10px', padding:0 ,overflow: 'auto'}}>
     //this is for commits 
              {freinds && <People />} 
              {home && <Events.Events />}
              {bus && <Bus />}
              {chat && <Chats />}
              {groups && <Public_Groups/>}
              <p data-testid="people">{freinds}</p>
              <p data-testid="events">{home}</p>
              <p data-testid="bus">{bus}</p>
              <p data-testid="chatting">{chat}</p>
            </div>
        </div>
       
     );
}

export default Middlepanel;

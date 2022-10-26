import Card from 'react-bootstrap/Card';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './People.css'
import { db } from '../../../conf/fireconf'
import {onSnapshot } from "firebase/firestore";
import { AuthContext } from "../../../context/AuthContext";
import { ChatContext } from "../../../context/ChatContext";
import React, {useState, useEffect,useContext} from 'react';
import { async } from '@firebase/util';
import {
    doc, 
    addDoc,
    setDoc, 
    collection, 
    getDocs,
    query,
    deleteDoc
} from "firebase/firestore"; 

const addFriend = async (friend) => {
    const REF_COLLECTION = collection(db, "Friend");
    addDoc(REF_COLLECTION, friend)
    .then(() => console.log("Data was saved"))
    .catch((err) => console.log(err.message))
}




function Display() {
  const [chats, setChats] = useState([]);

  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);
    
  const handleSelect = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u });
  };


  return (
    <Container style={{ width: '100%',height:'100%' }}>
      <Row>
      {Object.entries(chats)?.map((chat) => (
        
           <Card style={{ width: '12rem',margin:'0.5rem'  }}>
         <Card.Img variant="top" src={chat[1].userInfo.photoURL} className='imgperson' />
         <Card.Body>
           <Card.Title>{chat[1].userInfo.displayName}</Card.Title>
           <Button onLoad={() => handleSelect(chat[1].userInfo)} variant="primary">Unfollow</Button>
         </Card.Body>
         </Card>
     
      ))}
        </Row>    
     </Container>
  );
}

export default Display;
import Card from 'react-bootstrap/Card';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './People.css'
import { db } from '../../../conf/fireconf'
import React, {useState, useEffect} from 'react';
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
    const [ users, setUsers] = useState([])

    useEffect(() => {      
        const getPeople = async () => {
            const REF_COLLECTION = collection(db, "Contacts"); // reference the collection
            await getDocs(REF_COLLECTION)
                .then((response) => {
                    setUsers(response.docs.map( (user) => {
                            return {...user.data(), id: user.id}
                        }))
                })
                .catch((err) => console.log(err.message))
        }
        getPeople()
    }, []);

    

  return (
    <Container style={{ width: '100%',height:'100%' }}>
      <Row>
      {users.map(post=>(
         <Card style={{ width: '12rem',margin:'0.5rem'  }}>
         <Card.Img variant="top" src={post.photo} className='imgperson' />
         <Card.Body>
           <Card.Title>{post.username}</Card.Title>
           <Button onClick={ event => addFriend(post) } variant="primary">follow</Button>
         </Card.Body>
         </Card>
        ))
        }
        </Row>    
     </Container>
  );
}

export default Display;
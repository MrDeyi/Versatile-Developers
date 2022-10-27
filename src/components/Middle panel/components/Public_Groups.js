import Card from 'react-bootstrap/Card';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './People.css'
import { db } from '../../../conf/fireconf'
import React, {useState, useEffect,useContext} from 'react';
import { async } from '@firebase/util';
import {
    addDoc, 
    collection, 
    getDocs,
    deleteDoc,
    arrayUnion,
  doc,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from "firebase/firestore"; 
import { v4 as uuid } from "uuid";
import { AuthContext } from "../../../context/AuthContext";



// const addFriend = async (friend) => {
  
//     const REF_COLLECTION = collection(db, "Friend");
//     addDoc(REF_COLLECTION, friend)
//     .then(() => console.log("Data was saved"))
//     .catch((err) => console.log(err.message))

//     await updateDoc(doc(db, "chats", data.chatId), {
//       messages: arrayUnion({
//         id: uuid(),
//         text,
//         senderId: currentUser.uid,
//         date: Timestamp.now(),
//       }),
//     });
// }


async function AddGroup(group,user){
  console.log(user.uid)
  console.log(group)
  const g_id = group.id;
  const final = user.uid+g_id;
  
  await updateDoc(doc(db, "UserGroups",user.uid), {
   [final+".groupinfo"]:{
    id:group.id,
    name:group.name,
    photo:group.photo
   }
  });
}
function Public_Groups() {
  const { currentUser } = useContext(AuthContext);
    const [ users, setUsers] = useState([])

    useEffect(() => {      
        const getPeople = async () => {
            const REF_COLLECTION = collection(db, "Groups"); // reference the collection
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
           <Card.Title>{post.name}</Card.Title>
           <Button onClick={()=>{
             AddGroup(post,currentUser)
          }  } variant="primary">follow</Button>
         </Card.Body>
         </Card>
        ))
        }
        </Row>    
     </Container>
  );
}

export default Public_Groups;
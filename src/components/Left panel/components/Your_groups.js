import React ,{useContext}from 'react'
import './Your_group.css'
import Card from 'react-bootstrap/Card';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { auth, db } from '../../../conf/fireconf'
import {useState, useEffect} from 'react';
import { async } from '@firebase/util';
import {
    doc, 
    addDoc,
    setDoc, 
    collection, 
    getDocs,
    query,
    deleteDoc,getDoc
} from "firebase/firestore"; 
import { AuthContext } from '../../../context/AuthContext';
import {  onSnapshot } from "firebase/firestore";




function Your_groups() {
  const { currentUser } = useContext(AuthContext);
    const [ users, setUsers] = useState([])

    const [groupss, setgroup] = useState([]);
  // const { data } = useContext(ChatContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "UserGroups", currentUser.uid), (doc) => {
        setgroup(doc.data());
      });

      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);

  console.log(groupss)
   

  return (
    <div className="your_groups">
       <div className="header" data-testid="separator">Your Groups</div><br/>
        {Object.entries(groupss)?.map((groups) => (

          <div className="Single_friend">
          <img className="imgp" src={groups[1].groupinfo.photo} alt=""/>
           <span className="span">{groups[1].groupinfo.name}</span>
          </div>
        ))
        }
    </div>
  )
}

export default Your_groups
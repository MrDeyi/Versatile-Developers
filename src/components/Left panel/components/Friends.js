import React from 'react'
import { useContext, useState } from 'react';
import  './Friends.css'
import DetailedContext from './../../../Data_context';



function Friends() {
    const Contacts=useContext(DetailedContext);
    console.log(Contacts.fashions)
  return (
    <>
    <div className="friends">
        <div className="header" data-testid="separator">Friends</div><br/>
        {Contacts.fashions.map((post,i)=>(
          <div className="Single_friend" data-testid="profilep" key={post.id}>
          <img className="imgp" src={post.photo} />
           <span className="span" data-testid="name">{post.username}</span>
          </div>
        ))
        }
    </div>
    
    </>
  )
}

export default Friends
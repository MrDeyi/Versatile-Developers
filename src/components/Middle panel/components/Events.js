import './Event_organiser.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FcShare,FcLike,FcGoogle } from "react-icons/fc";
import { useState,useEffect } from 'react';
import { RWebShare } from "react-web-share";
import {
    doc, 
    addDoc,
    setDoc, 
    collection, 
    getDocs,
    query,
    deleteDoc
} from "firebase/firestore"; 
import { db } from '../../../conf/fireconf';

const EventComponent = ({event}) => {

    const [counter, setCounter] = useState(23);
    const [sharenum, setsharenum] = useState(34);
        const getalikes=()=>{
            setCounter(counter + 1);
        }
        const getashares=()=>{
            setsharenum(sharenum + 1);
     
        }
       
    return (
        <div className="cardp">
            <img data-testid="image" className="card_img" src={ event.event_img }/>
            <div className="card_body">
                <h2 data-testid="header" className="card_title">{ event.event_title }</h2>
                <div className="card_event_date">
                <p data-testid="month" >{ event.month }</p>
                <h3 data-testid="date" >{ event.date }</h3>
                </div>
                <p className="card_event_time">{ event.dayname } { event.time } Zoom Meeting</p>
                <p className="card_description">{ event.description }</p>
            </div>
            <div className="card_dots_menu">
            <span className="card_dots"></span>
            <span className="card_dots"></span>
            <span className="card_dots"></span>
            </div>
        <div className="card_footer">
            <div className="card_footer_participants">
                <h3 className="card_participants_num">{ event.participants }</h3>
                <h3 data-testid="event_parti" className="card_participants">Participants</h3>
            </div>
        </div>
        
        <div className="card_icons">
            <div className="card_fireicon">
            <FcLike onClick={getalikes} data-testid="likebutton"/>
                    <p data-testid="numLikes" >{counter}</p>
            </div>

            <div className="event_organiser">
            <img data-testid="person_img" src={ event.person_img}/>
            <h3 className="personname">{ event.person_name }</h3>
            <p className="event_organiser_role">{ event.person_role } at</p>
            <FcGoogle  className="company_logo"/>
            </div>

            <div className="card_share_icon">
                
                 
                 <RWebShare
                 data={{
                   text: "Like humans, flamingos make friends for life",
                   url: "https://on.natgeo.com/2zHaNup",
                   title: event.event_title,
                 }}
                 
                 onClick={getashares}
               >
                 <FcShare />
               
                
               </RWebShare> 
               <p data-testid="numShares">{sharenum}</p>
            </div>
        </div>
    </div>
    )
}

const Events = () => {

    const [ users, setUsers] = useState([])

    useEffect(() => {      
        const getPeople = async () => {
            const REF_COLLECTION = collection(db, "Events"); // reference the collection
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
        {users.map(data => <EventComponent key={data.id} event={data} /> )}

</Row>

      
</Container>
        
    );
}

export default {Events, EventComponent};
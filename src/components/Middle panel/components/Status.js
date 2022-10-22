import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Status.css';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Status() {
  const [show, setShow] = useState(false);

    const Contacts=[
        {
            id:"01",
            username:"Buhle Jayne",
            photo:"https://i0.wp.com/thatrandomagency.com/wp-content/uploads/2021/06/headshot.png?resize=618%2C617&ssl=1"
        },
        {
            id:"02",
            username:"Mosis M",
            photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzPfZtBIi9mrbG2-nAnaa7bVHaRzqmej0uiQ&usqp=CAU"
        },
        {
            id:"03",
            username:"Karabo M",
            photo:"https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
            status1:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyVctnX1cQDDzbCiDqiQCPz2OfcCf7KPkGfg&usqp=CAU",
            status2:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT946tW2RblxYwXh_xEeg_klDOzZ0PrtC-2bQ&usqp=CAU",
            status3:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXrfj-6-h5WiLkoUMfNfc0BJknBhWhk-Yb1w&usqp=CAU",        
          },
        {
            id:"04",
            username:"Amahle D",
            photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE_rqLv2P0vM2LkM0ugbx_O64jOdPM-YF7NA5uYeMl&s",
            status1:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAN00WFc7R-SdgafpQHhi63P48EAVMakaaPg&usqp=CAU",
            status2:"https://st.depositphotos.com/1146092/2514/i/950/depositphotos_25143517-stock-photo-cool-dog.jpg",
            status3:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdSBJlQHpAOQXyzu7_x3fTzyaunFLTqzNPw7chuUuVxSr_YS33uU0vbWWsLTzxjkfYz-I&usqp=CAU",
          },
        {
            id:"05",
            username:"Unathi H",
            photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUAQOSkZYfkEA301YD7ScojRUNG1lAeFC1tA&usqp=CAU",
            status1:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyVctnX1cQDDzbCiDqiQCPz2OfcCf7KPkGfg&usqp=CAU",
            status2:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT946tW2RblxYwXh_xEeg_klDOzZ0PrtC-2bQ&usqp=CAU",
            status3:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXrfj-6-h5WiLkoUMfNfc0BJknBhWhk-Yb1w&usqp=CAU",  
          }
    
    ]
    ;
  return (

      <Navbar bg="bg-info text-white" variant="light">
        <Container>
          <Nav className="me-auto">
           
           
        
        {Contacts.map((post,i)=>(
            <>
             <Nav.Link href="#home">
          <div className="Single_status" key={post.id}>
          <img className="imgstatus" src={post.photo} onClick={() => setShow(true)}/>
           <span className="spanstatus">{post.username}</span>
          </div>
          </Nav.Link>
           </>
           ))}
       
       {Contacts.map((st,j)=>(
      <Modal
        show={show}
        onHide={() => setShow(false)}
        key={j}
        aria-labelledby="example-custom-modal-styling-title"
      >
        
        <Modal.Header closeButton>
        <Modal.Title id="example-custom-modal-styling-title">
          <h3> Stories</h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Carousel slide={false} style={{ width: '25rem',height:'30rem' }}>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={st.status1}
        alt="First slide"
        width="500"
        height="400"
      />
     
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={st.status2}
        alt="Second slide"
        width="500"
        height="400"
      />

    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={st.status3}
        alt="Third slide"
        width="500"
        height="400"
      />
      </Carousel.Item>
     </Carousel>
      </Modal.Body>
      </Modal> 
      
      ))}
        
      

          </Nav>
        </Container>
      </Navbar>
   
  );
}

export default Status;
import Table from 'react-bootstrap/Table';
import useCountdown from './useCountdown';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
function Bus() {
  const endTime = new Date().getTime() + 60000 * 2; // 2 minutes
  const [timeLeft, setEndTime] = useCountdown('time');
  const [smShow, setSmShow] = useState(true);
  const modalshow=()=>{
    setSmShow(true);
}

  const minutes = Math.floor(timeLeft / 60000) % 60;
  const seconds = Math.floor(timeLeft / 1000) % 60;
  return (
   <>
     <style type="text/css">
        {`
    .btn-flat {
      background-color: purple;
      color: white;
    }
    `}
      </style>
   
   <Card style={{margin:'0.5rem',width: "50rem"  }}>
   <Table striped bordered hover variant="flat">
      <thead>
        <tr>
          <th><div style={{display: "flex"}}>
          <Button onClick={() => setEndTime(endTime)} style={{width: "110px",marginRight: '20px'}}>Reminder</Button>
          <p style={{
          background:"#42cef5",
          display: "flex",
          height: 40,
          width: 100,
          boxShadow: "0 0 3px 2px #cec7c759",
          alignItems: "center",
          padding: 20,
          paddingLeft:40,
          borderRadius: 20,
          marginLeft:"70"}}>{`${minutes}:${seconds}`}</p>

          {timeLeft===0 && 
          <Modal
          size="sm"
          show={smShow}
          onHide={() => setSmShow(false)}
          aria-labelledby="example-modal-sizes-title-sm"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-sm">
             TIMEOUT
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>...Please Catch the bus</Modal.Body>
        </Modal>
          
          }
            </div></th>
          <th data-testid="departure">Departure</th>
          <th data-testid="destination">Destination</th>
          <th data-testid="time">Time</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>CUMPUS</td>
          <td>AMIC,REN,WEC</td>
          <td>06:30-08:45</td>
        </tr>
        <tr>
          <td>2</td>
          <td>CUMPUS</td>
          <td>WJ,WEC,WJ</td>
          <td>06:45-09:15</td>
        </tr>
        <tr>
          <td>3</td>
          <td >KNK,EOH,AMIC</td>
          <td>CUMPUS</td>
          <td>10:00;11:00;12:00;</td>
        </tr>
      </tbody>
      <Modal
        size="sm"
        //show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Small Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>...</Modal.Body>
      </Modal>

    </Table>
   </Card>
   </>
    
  );
}

export default Bus;
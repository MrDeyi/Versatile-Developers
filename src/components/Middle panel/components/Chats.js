import React from "react";
import './Chats.css'
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBCardFooter,
  MDBIcon,
  MDBBtn,
  MDBScrollbar,
} from "mdb-react-ui-kit";

export default function Chats() {
  return (
    <MDBContainer fluid className="py-5" style={{ backgroundColor: "#eee"  }}>
      <MDBRow className="d-flex justify-content-center">
        <MDBCol md="10" lg="8" xl="6">
          <MDBCard id="chat2" style={{ borderRadius: "15px",width:'30rem' }}>
            <MDBCardHeader className="d-flex justify-content-between align-items-center p-3">
              <h5 className="mb-0">Chat</h5>
              <MDBBtn color="primary" size="sm" rippleColor="dark">
                Let's Chat App
              </MDBBtn>
            </MDBCardHeader>
            
              <MDBCardBody style={{width:'30rem'}} >
                <div className="d-flex flex-row justify-content-start"  >
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUAQOSkZYfkEA301YD7ScojRUNG1lAeFC1tA&usqp=CAU"
                    alt="avatar 1"
                    style={{ width:"50px",height:"50px",borderRadius:"50%"}}
                    data-testid="image"
                  />
                  <div>
                    <p
                      className="small p-2 ms-3 mb-1 rounded-3"
                      style={{ backgroundColor: "#f5f6f7" }}
                      data-testid="chaty12"
                    >
                      Hi
                    </p>
                    <p
                      className="small p-2 ms-3 mb-1 rounded-3"
                      style={{ backgroundColor: "#f5f6f7" }}
                      data-testid="chaty11"
                    >
                      How are you ...???
                    </p>
                    <p
                      className="small p-2 ms-3 mb-1 rounded-3"
                      style={{ backgroundColor: "#f5f6f7" }}
                      data-testid="chaty10"
                    >
                      What are you doing tomorrow? Can we come up a bar?
                    </p>
                    <p className="small ms-3 mb-3 rounded-3 text-muted" data-testid="timeiii">
                      23:58
                    </p>
                  </div>
                </div>

                <div className="divider d-flex align-items-center mb-4">
                  <p
                    className="text-center mx-3 mb-0"
                    style={{ color: "#a2aab7" }}
                    data-testid="chaty9"
                  >
                    Today
                  </p>
                </div>

                <div className="d-flex flex-row justify-content-end mb-4 pt-1">
                  <div>
                    <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary" data-testid="chaty8">
                      Hiii, I'm good.
                    </p>
                    <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary" data-testid="chaty7">
                      How are you doing?
                    </p>
                    <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary" data-testid="chaty6">
                      Long time no see! Tomorrow office. will be free on sunday.
                    </p>
                    <p className="small me-3 mb-3 rounded-3 text-muted d-flex justify-content-end" data-testid="timeii">
                      00:06
                    </p>
                  </div>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzPfZtBIi9mrbG2-nAnaa7bVHaRzqmej0uiQ&usqp=CAU"
                    alt="avatar 2"
                    style={{ width:"50px",height:"50px",borderRadius:"50%"}}
                    data-testid="image3"
                  />
                </div>

                <div className="d-flex flex-row justify-content-start mb-4">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUAQOSkZYfkEA301YD7ScojRUNG1lAeFC1tA&usqp=CAU"
                    alt="avatar 1"
                    style={{ width:"50px",height:"50px",borderRadius:"50%"}}
                    data-testid="image2"
                  />
                  <div>
                    <p
                      className="small p-2 ms-3 mb-1 rounded-3"
                      style={{ backgroundColor: "#f5f6f7" }}
                      data-testid="chaty5"
                    >
                      Okay
                    </p>
                    <p
                      className="small p-2 ms-3 mb-1 rounded-3"
                      style={{ backgroundColor: "#f5f6f7" }}
                      data-testid="chaty4"
                    >
                      We will go on Sunday?
                    </p>
                    <p className="small ms-3 mb-3 rounded-3 text-muted" data-testid="timei">
                      00:07
                    </p>
                  </div>
                </div>

                <div className="d-flex flex-row justify-content-end mb-4">
                  <div>
                    <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary" data-testid="chaty3">
                      That's awesome!
                    </p>
                    <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary" data-testid="chaty2">
                      I will meet you Sandon Square sharp at 10 AM
                    </p>
                    <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary" data-testid="chaty1">
                      Is that okay?
                    </p>
                    <p className="small me-3 mb-3 rounded-3 text-muted d-flex justify-content-end">
                      00:09
                    </p>
                  </div>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzPfZtBIi9mrbG2-nAnaa7bVHaRzqmej0uiQ&usqp=CAU"
                    alt="avatar 2"
                    style={{ width:"50px",height:"50px",borderRadius:"50%"}}
                  />
                </div>

                <div className="d-flex flex-row justify-content-start mb-4">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUAQOSkZYfkEA301YD7ScojRUNG1lAeFC1tA&usqp=CAU"
                    alt="avatar 1"
                    style={{ width:"50px",height:"50px",borderRadius:"50%"}}
                    data-testid="image1"
                  />
                  <div>
                    <p
                      className="small p-2 ms-3 mb-1 rounded-3"
                      style={{ backgroundColor: "#f5f6f7" }}
                    >
                      Okay i will meet you on Sandon Square
                    </p>
                    <p className="small ms-3 mb-3 rounded-3 text-muted">
                      00:11
                    </p>
                  </div>
                </div>

                <div className="d-flex flex-row justify-content-end mb-4">
                  <div>
                    <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
                      Do you have pictures of Matley Marriage?
                    </p>
                    <p className="small me-3 mb-3 rounded-3 text-muted d-flex justify-content-end">
                      00:11
                    </p>
                  </div>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzPfZtBIi9mrbG2-nAnaa7bVHaRzqmej0uiQ&usqp=CAU"
                    alt="avatar 2"
                    style={{ width:"50px",height:"50px",borderRadius:"50%"}}
                  />
                </div>

                <div className="d-flex flex-row justify-content-start mb-4">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUAQOSkZYfkEA301YD7ScojRUNG1lAeFC1tA&usqp=CAU"
                    alt="avatar 1"
                    style={{ width:"50px",height:"50px",borderRadius:"50%"}}
                  />
                  <div>
                    <p
                      className="small p-2 ms-3 mb-1 rounded-3"
                      style={{ backgroundColor: "#f5f6f7" }}
                    >
                      Sorry I don't have. i changed my phone.
                    </p>
                    <p className="small ms-3 mb-3 rounded-3 text-muted">
                      00:13
                    </p>
                  </div>
                </div>

                <div className="d-flex flex-row justify-content-end">
                  <div>
                    <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
                      Okay then see you on sunday!!
                    </p>
                    <p className="small me-3 mb-3 rounded-3 text-muted d-flex justify-content-end">
                      00:15
                    </p>
                  </div>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUAQOSkZYfkEA301YD7ScojRUNG1lAeFC1tA&usqp=CAU"
                    alt="avatar 1"
                    style={{ width:"50px",height:"50px",borderRadius:"50%"}}
                  />
                </div>
              </MDBCardBody>
            <MDBCardFooter className="text-muted d-flex justify-content-start align-items-center p-3">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUAQOSkZYfkEA301YD7ScojRUNG1lAeFC1tA&usqp=CAU"
                alt="avatar 1"
                style={{ width:"50px",height:"50px",borderRadius:"50%"}}
              />
              <input
                type="text"
                class="form-control form-control-lg"
                id="exampleFormControlInput1"
                placeholder="Type message"
                data-testid="type"
              ></input>
              <a className="ms-1 text-muted" href="#!">
                <MDBIcon fas icon="paperclip" />
              </a>
              <a className="ms-3 text-muted" href="#!">
                <MDBIcon fas icon="smile" />
              </a>
              <a className="ms-3" href="#!">
                <MDBIcon fas icon="paper-plane" />
              </a>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
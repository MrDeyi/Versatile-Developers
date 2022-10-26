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
import Sidebar from "../components/components/Sidebar"
import Chatt from "../components/components/Chat"

export default function Chats() {
  return (
    <div>
      {/* <Sidebar/> */}
      <Chatt/>
    </div>
  )
}
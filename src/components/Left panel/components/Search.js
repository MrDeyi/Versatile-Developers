import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import DetailedContext from './../../../Data_context';
import { useContext } from 'react';

function Search() {
  const detailedg=useContext(DetailedContext);
  return (
    
    <Form className="d-flex" data-testid="contain">
    <Form.Control
      type="search"
      placeholder="Search"
      className="me-2"
      aria-label="Search"
      data-testid="search"
      onChange={(event)=>{detailedg.getValue(event.target.value)}}
    />
    
  </Form>)
}

export default Search
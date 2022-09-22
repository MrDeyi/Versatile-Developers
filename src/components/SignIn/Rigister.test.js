import React from 'react';
import { ReactDOM } from 'react-dom';
import {render, cleanup, screen} from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect";
import Register from './Register';
import userEvent from '@testing-library/user-event';

afterEach(cleanup)

describe("Checking if the test file is working", () => {
    test("Hello world!", () => {
      expect(true).toEqual(true)
    })
  })

  //test if form is rendered
  it('render form',()=>{
    const {getByTestId}=render(<Register/>);
    expect(screen.getByTestId('section')).toBeInTheDocument();
    expect(screen.getByTestId('form')).toBeInTheDocument();
  
  })

  //test if foot is rendered
  it('render foot',()=>{
    const {getByTestId}=render(<Register/>);
    expect(screen.getByTestId('section')).toBeInTheDocument();
    expect(screen.getByTestId('foot')).toBeInTheDocument();
  
  })

  //test if icons is rendered
  it('render icons',()=>{
    const {getByTestId}=render(<Register/>);
    expect(screen.getByTestId('section')).toBeInTheDocument();
    expect(screen.getByTestId('icons')).toBeInTheDocument();
  
  })
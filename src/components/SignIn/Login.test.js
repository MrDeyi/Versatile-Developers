import React from 'react';
import { ReactDOM } from 'react-dom';
import {render, cleanup, screen} from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect";
import Login from './Login';
import userEvent from '@testing-library/user-event';

afterEach(cleanup)

describe("Checking if the test file is working", () => {
    test("Hello world!", () => {
      expect(true).toEqual(true)
    })
  })

  //test if login is rendered
  it('render profile',()=>{
    const {getByTestId}=render(<Login/>);
    expect(screen.getByTestId('login')).toBeInTheDocument();
  
  })

  //render icons
  it('render icons',()=>{
    const {getByTestId}=render(<Login/>);
    expect(screen.getByTestId('facebook')).toBeInTheDocument();
    expect(screen.getByTestId('twitter')).toBeInTheDocument();
    expect(screen.getByTestId('google')).toBeInTheDocument();
  })

  //render icons
  it('render footer',()=>{
    const {getByTestId}=render(<Login/>);
    expect(screen.getByTestId('footer')).toBeInTheDocument();
    
  })
  //render icons
  it('render buttons',()=>{
    const {getByTestId}=render(<Login/>);
    expect(screen.getByTestId('btn1')).toBeInTheDocument();
    expect(screen.getByTestId('btn2')).toBeInTheDocument();
    expect(screen.getByTestId('btn3')).toBeInTheDocument();
  })
  
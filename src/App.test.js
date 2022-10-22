
import React from 'react';
import { ReactDOM } from 'react-dom';
import {render, cleanup, screen} from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect";
import App from './App';
import userEvent from '@testing-library/user-event';

afterEach(cleanup)

describe("Checking if the test file is working", () => {
    test("Hello world!", () => {
      expect(true).toEqual(true)
    })
  })

  //test if App is rendered
  it('render App',()=>{
    const {getByTestId}=render(<App/>);
    expect(screen.getByTestId('app')).toBeInTheDocument();
   
  
  })
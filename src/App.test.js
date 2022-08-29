import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import React from 'react'
import '@testing-library/jest-dom'
import {BrowserRouter, MemoryRouter} from 'react-router-dom'

import App from './App';
import { CorrectEmail } from './components/Register';
 
  /*simple testing* or function testing*/
  test("CorrectEmail from Register function should pass on correct input",()=>{
    const text = "text@test.com";
    expect(CorrectEmail(text)).toBe(true)
  })

  test("Correct email should fail on incorrect input",()=>{
    const text = "text.com"
    expect(CorrectEmail(text)).not.toBe(true);
  })

  /*component testing*/

  test("Register should be in the document",()=>{
    const components = render(<App/>);
    // console.log(components)
    const c = components.container.onsubmit
    // const inputNode = components.getByText("Login")
    console.log(c)
    // expect(inputNode).toBeInTheDocument();
  })



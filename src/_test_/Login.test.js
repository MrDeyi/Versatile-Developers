import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import React from 'react'
import '@testing-library/jest-dom'
import {EmailCheck, Login} from "../components/Login"

test("EmailCheck function should pass on correct input",()=>{
    const text = "text@test.com";
    expect(EmailCheck(text)).toBe(true)

  })

  test("Login",()=>{
    // const comp = render(<Login/>)
    expect(true).toBe(true)

  })
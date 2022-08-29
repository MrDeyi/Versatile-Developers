import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import React from 'react'
import '@testing-library/jest-dom'
import VerifyEmail,{AuthContextEmai,EmailCheck} from '../components/VerifyEmail';

test("EmailVerification",()=>{
    const text = "text@test.com";
    expect(EmailCheck(text)).toBe(true)

})
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import React from 'react'
import '@testing-library/jest-dom'
import AuthContext,{AuthProvider} from "../components/AuthContext"
import VerifyEmail ,{AuthContextEmail} from '../components/VerifyEmail';
import { async } from '@firebase/util';

const renderComponent = ({username}) =>{
    return render(
        <AuthProvider user = {username}>
            <AuthContextEmail></AuthContextEmail>
        </AuthProvider>
    )
}

it("Verified the Email",async()=>{
    renderComponent('');
    expect(screen.queryByText("Please Login")).toBeInTheDocument()
})

it(`should show the username`, async () => {
    renderComponent({ username: 'Mosis' });
    expect(screen.queryByText('Hello there Mosis')).not.toBeInTheDocument();
});
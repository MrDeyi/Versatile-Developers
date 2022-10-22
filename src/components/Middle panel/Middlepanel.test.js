import React from 'react';
import { ReactDOM } from 'react-dom';
import {render, cleanup, screen} from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect";
import Middlepanel from './Middlepanel';
import userEvent from '@testing-library/user-event';

afterEach(cleanup)

describe("Checking if the test file is working", () => {
    test("Hello world!", () => {
      expect(true).toEqual(true)
    })
  })

  //test if user can navigate to the event page
  it('allow user to go to home page',()=>{
    const {getByTestId}=render(<Middlepanel />);
    expect(screen.getByTestId('house')).toBeInTheDocument();
    userEvent.click(screen.getByTestId('house'));
    expect(screen.getByTestId('events')).toBeInTheDocument();
  })

  //test if user can navigate to the freinds page
  it('allow user to go to freinds page',()=>{
    const {getByTestId}=render(<Middlepanel />);
    expect(screen.getByTestId('group')).toBeInTheDocument();
    userEvent.click(screen.getByTestId('group'));
    expect(screen.getByTestId('people')).toBeInTheDocument();
  })

  //test if user can navigate to the chats page
  it('allow user to go to chats page',()=>{
    const {getByTestId}=render(<Middlepanel />);
    expect(screen.getByTestId('chats')).toBeInTheDocument();
    userEvent.click(screen.getByTestId('chats'));
    expect(screen.getByTestId('chatting')).toBeInTheDocument();
  })

  //test if user can navigate to the bus page
  it('allow user to go to bus page',()=>{
    const {getByTestId}=render(<Middlepanel />);
    expect(screen.getByTestId('flag')).toBeInTheDocument();
    userEvent.click(screen.getByTestId('flag'));
    expect(screen.getByTestId('bus')).toBeInTheDocument();
  })
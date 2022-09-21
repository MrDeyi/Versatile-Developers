import React from 'react';
import { ReactDOM } from 'react-dom';
import {render, cleanup, screen} from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect";
import Chats from './Chats';
import userEvent from '@testing-library/user-event';

afterEach(cleanup)

describe("Checking if the test file is working", () => {
    test("Hello world!", () => {
      expect(true).toEqual(true)
    })
  })

  //test if friend is rendered
  it('render chats',()=>{
    const {getByTestId}=render(<Chats />);
    expect(screen.getByTestId('chaty1')).toBeInTheDocument();
    expect(screen.getByTestId('chaty2')).toBeInTheDocument();
    expect(screen.getByTestId('chaty3')).toBeInTheDocument();
    expect(screen.getByTestId('chaty4')).toBeInTheDocument();
    expect(screen.getByTestId('chaty5')).toBeInTheDocument();
    expect(screen.getByTestId('chaty6')).toBeInTheDocument();
    expect(screen.getByTestId('chaty7')).toBeInTheDocument();
    expect(screen.getByTestId('chaty8')).toBeInTheDocument();
    expect(screen.getByTestId('chaty9')).toBeInTheDocument();
    expect(screen.getByTestId('chaty10')).toBeInTheDocument();
    expect(screen.getByTestId('chaty11')).toBeInTheDocument();
    expect(screen.getByTestId('chaty12')).toBeInTheDocument();
    
  })

  it('render  time',()=>{
    const {getByTestId}=render(<Chats />);
    expect(screen.getByTestId('timei')).toBeInTheDocument();
    expect(screen.getByTestId('timeii')).toBeInTheDocument();
    expect(screen.getByTestId('timeiii')).toBeInTheDocument();
  })

  it('render image',()=>{
    const {getByTestId}=render(<Chats />);
    expect(screen.getByTestId('type')).toBeInTheDocument();
    expect(screen.getByTestId('image')).toBeInTheDocument();
    expect(screen.getByTestId('image1')).toBeInTheDocument();
    expect(screen.getByTestId('image2')).toBeInTheDocument();
    expect(screen.getByTestId('image3')).toBeInTheDocument();
  })
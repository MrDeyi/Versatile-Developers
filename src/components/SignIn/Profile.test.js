import React from 'react';
import { ReactDOM } from 'react-dom';
import {render, cleanup, screen} from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect";
import Profile from './Profile';
import userEvent from '@testing-library/user-event';

afterEach(cleanup)

describe("Checking if the test file is working", () => {
    test("Hello world!", () => {
      expect(true).toEqual(true)
    })
  })

  //test if home is rendered
  it('render profile',()=>{
    const {getByTestId}=render(<Profile/>);
    expect(screen.getByTestId('profile')).toBeInTheDocument();
  
  })
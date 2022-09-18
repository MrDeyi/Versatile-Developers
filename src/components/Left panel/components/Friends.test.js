import React from 'react';
import { ReactDOM } from 'react-dom';
import {render, cleanup, screen} from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect";
import Friends from './Friends';
import userEvent from '@testing-library/user-event';

afterEach(cleanup)

describe("Checking if the test file is working", () => {
    test("Hello world!", () => {
      expect(true).toEqual(true)
    })
  })

  //test if friend is rendered
  it('render friend',()=>{
    const {getByTestId}=render(<Friends />);
    expect(screen.getByTestId('separator')).toBeInTheDocument();
  
  })
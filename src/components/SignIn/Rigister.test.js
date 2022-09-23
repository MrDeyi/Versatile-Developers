import React from 'react';
import { ReactDOM } from 'react-dom';
import {render, cleanup, screen} from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect";
import Index from '../../App';
import userEvent from '@testing-library/user-event';

afterEach(cleanup)

describe("Checking if the test file is working", () => {
    test("Hello world!", () => {
      expect(true).toEqual(true)
    })
  })

  //test if index is rendered
  it('render index',()=>{
    const {getByTestId}=render(<Index/>);
    expect(screen.getByTestId('app')).toBeInTheDocument();
   
  
  })
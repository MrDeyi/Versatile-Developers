import React from 'react';
import { ReactDOM } from 'react-dom';
import {render, cleanup, screen} from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect";
import Bus from './Bus.js';
import userEvent from '@testing-library/user-event';

afterEach(cleanup)

describe("Checking if the test file is working", () => {
    test("Hello world!", () => {
      expect(true).toEqual(true)
    })
  })

  //test if bus schedule is rendered
  it('render schedule',()=>{
    const {getByTestId}=render(<Bus />);
    expect(screen.getByTestId('departure')).toBeInTheDocument();
    expect(screen.getByTestId('destination')).toBeInTheDocument();
    expect(screen.getByTestId('time')).toBeInTheDocument();
  })
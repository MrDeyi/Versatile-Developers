import React from 'react';
import { ReactDOM } from 'react-dom';
import {render, cleanup, screen} from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect";
import TWOFA from './TWOFA';
import userEvent from '@testing-library/user-event';

afterEach(cleanup)

describe("Checking if the test file is working", () => {
    test("Hello world!", () => {
      expect(true).toEqual(true)
    })
  })

  //test if TWOFA is rendered
  it('render TWOFA',()=>{
    const {getByTestId}=render(<TWOFA/>);
    expect(screen.getByTestId('two')).toBeInTheDocument();
    expect(screen.getByTestId('make')).toBeInTheDocument();
    expect(screen.getByTestId('wits')).toBeInTheDocument();
  })
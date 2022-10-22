import React from 'react';
import { ReactDOM } from 'react-dom';
import {render, cleanup, screen} from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect";
import Search from './Search';
import userEvent from '@testing-library/user-event';

afterEach(cleanup)

describe("Checking if test work", () => {
    test("Hello world!", () => {
      expect(true).toEqual(true)
    })
  })

  //Checking if search bar renders
  it('Checking if search bar renders',()=>{
    const {getByTestId}=render(<Search />);
    expect(screen.getByTestId('contain')).toBeInTheDocument();
    expect(screen.getByTestId('search')).toBeInTheDocument();
    
  })
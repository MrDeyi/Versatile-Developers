import React from 'react';
import { ReactDOM } from 'react-dom';
import {render, cleanup, screen} from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect";
import Events from '../Events'

afterEach(cleanup)

describe("Checking if the test file is working", () => {
    test("Hello world!", () => {
      expect(true).toEqual(true)
    })
  })

test("Header renders with correct text", () => {
   const {getByTestId}=render(<Events />)
    const hearderEl = getByTestId("header")

    expect(hearderEl.textContent).toBeDefined()
})

describe("Date working correctly", () => {

    test("Month", () => {
        const { getByTestId } = render(<Events />)
        expect(getByTestId('month').textContent).toBeDefined()
    })

    test("Date", () => {
        const { getByTestId } = render(<Events />)
        expect(getByTestId('date').textContent).toBeDefined()
    })
})

test("Likes working", () => {
    const { getByTestId } = render(<Events />)
    const likes = getByTestId("numLikes")

    expect(likes.textContent).toBe("23")
})


it('renders Event component correctly', () => {
    const { getByTestId } = render(<Events />)

    expect(getByTestId('numShares').textContent).toBeDefined()
})

it('renders Event component correctly', () => {
    const { getByTestId } = render(<Events />)
    expect(getByTestId('numLikes').textContent).not.toBeNull()
    expect(getByTestId('numLikes').textContent).toBeDefined()
})


test('Image working', () => {
    const { getByTestId} = render(<Events />)
    expect(getByTestId('image').textContent).not.toBeNull()
    expect(getByTestId('image').textContent).toBeDefined()
})

test('Person image working', () => {
    const { getByTestId} = render(<Events />)
    expect(getByTestId('person_img').textContent).not.toBeNull()
    expect(getByTestId('person_img').textContent).toBeDefined()
})

test("Card participants", () => {
    const { getByTestId } = render(<Events />);
  
      const par = getByTestId("event_parti");
  
      expect(par.textContent).toBeDefined()
  
  });



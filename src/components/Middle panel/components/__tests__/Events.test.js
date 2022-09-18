import React from 'react';
import { ReactDOM } from 'react-dom';
import {render, cleanup, screen} from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect";
import event from '../Events'
import userEvent from '@testing-library/user-event';

const Eventdata=[
    {
        id:'1',
        person_img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3WEmfJCME77ZGymWrlJkXRv5bWg9QQmQEzw&usqp=CAU',
        person_name:'Angelina Joly',
        person_role:'Content creator',
        event_img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq5eMRxkFIQMnfAe5p_L-BJUdf6xv6CvD0zw&usqp=CAU',
        event_title:'How To Manage Your Time & Get More Done',
        month:'Aug',
        date:'27',
        dayname:'Sat',
        time:'18.27',
        description:'Using these methodologies will help you determine what tasks you should prioritize and what tasks you should schedule and plan for, delegate, or delete.',
        participants:'87',
        likes:'23',
        shares:'54',
    }]

afterEach(cleanup)

describe("Checking if the test file is working", () => {
    test("Hello world!", () => {
      expect(true).toEqual(true)
    })
  })

test("Header renders with correct text", () => {
   const {getByTestId}=render(<event.EventComponent event={ Eventdata[0] } />)
    const hearderEl = getByTestId("header")

    expect(hearderEl.textContent).toBeDefined()
})

describe("Date working correctly", () => {

    test("Month", () => {
        const { getByTestId } = render(<event.EventComponent event={ Eventdata[0] } />)
        expect(getByTestId('month').textContent).toBeDefined()
    })

    test("Date", () => {
        const { getByTestId } = render(<event.EventComponent event={ Eventdata[0] } />)
        expect(getByTestId('date').textContent).toBeDefined()
    })
})

test("Likes working", () => {
    const { getByTestId } = render(<event.EventComponent event={ Eventdata[0] } />)
    const likes = getByTestId("numLikes")

    expect(likes.textContent).toBe("23")
})


it('renders Event component correctly', () => {
    const { getByTestId } = render(<event.EventComponent event={ Eventdata[0] } />)

    expect(getByTestId('numShares').textContent).toBeDefined()
})

it('renders Event component correctly', () => {
    const { getByTestId } = render(<event.EventComponent event={ Eventdata[0] } />)
    expect(getByTestId('numLikes').textContent).not.toBeNull()
    expect(getByTestId('numLikes').textContent).toBeDefined()
    expect(screen.getByTestId('numLikes')).toBeInTheDocument()
    
})
//testing  the liking user story
it('should increase likes by one when clicked',()=>{
    const { getByTestId } = render(<event.EventComponent event={ Eventdata[0] } />)
    expect(screen.getByTestId('likebutton')).toBeInTheDocument();
    userEvent.click(screen.getByTestId('likebutton'));
    expect(screen.getByTestId('numLikes')).toHaveTextContent('24');

})
it('should not increase likes when clicked somewhere else',()=>{
    const { getByTestId } = render(<event.EventComponent event={ Eventdata[0] } />)
    expect(screen.getByTestId('numLikes')).toBeInTheDocument();
    userEvent.click(screen.getByTestId('numLikes'));
    expect(screen.getByTestId('numLikes')).toHaveTextContent('23');

})


test('Image working', () => {
    const { getByTestId} = render(<event.EventComponent event={ Eventdata[0] } />)
    expect(getByTestId('image').textContent).not.toBeNull()
    expect(getByTestId('image').textContent).toBeDefined()
})

test('Person image working', () => {
    const { getByTestId} = render(<event.EventComponent event={ Eventdata[0] } />)
    expect(getByTestId('person_img').textContent).not.toBeNull()
    expect(getByTestId('person_img').textContent).toBeDefined()
})

test("Card participants", () => {
    const { getByTestId } = render(<event.EventComponent event={ Eventdata[0] } />);
  
      const par = getByTestId("event_parti");
  
      expect(par.textContent).toBeDefined()
  
  });



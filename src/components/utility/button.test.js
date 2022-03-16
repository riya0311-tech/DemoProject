import React from 'react';
import { render,fireEvent } from '@testing-library/react';
import {Button} from './button';

const initialProps={
    text :'test',
    hanldeClick :jest.fn()
}


describe('Button Component',()=>{
    test('renders the text Content', () => {
        const {getByTestId}= render(<Button {...initialProps} />);
        const button =getByTestId('button')
         expect(button).toHaveTextContent(initialProps.text);
       });

       test('check for the click event on button', () => {
        const {getByTestId}= render(<Button {...initialProps} />);
        const button =getByTestId('button')
        fireEvent.click(button);
         expect(initialProps.hanldeClick).toHaveBeenCalled()
       });
})


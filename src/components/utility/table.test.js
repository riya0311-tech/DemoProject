import React from 'react';
import { render,fireEvent } from '@testing-library/react';
import {Table} from './table';

const initialProps={
  cols:['testCol'],
  data:['test']
}


describe('Table Component',()=>{
    test('renders the Col and Row  ', () => {
        const {getByTestId}= render(<Table {...initialProps} />);
        const col =getByTestId(`0_${initialProps.cols[0]}`)
        const row =getByTestId(`0_${initialProps.data[0]}`)
         expect(col).toHaveTextContent(initialProps.cols[0]);
         expect(row).toHaveTextContent(initialProps.data[0]);
       });

})


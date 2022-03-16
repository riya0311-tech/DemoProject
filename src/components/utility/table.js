import PropTypes from 'prop-types';

export const Table=({cols,data})=>{
    return(<table>
        <thead>
        <tr>
            {cols.map((heading , index)=>{
              return   <th data-testid={`${index}_${heading}`} key={index}>{heading}</th>
            })}
        
        </tr>
        </thead>
        <tbody>
        <tr> 
            {  data.map((ele , index)=>{
               return  <td data-testid={`${index}_${ele}`} key={index}>{ele}</td>           
                 })
            }
              </tr>
       
        
      
        </tbody>
      </table>)
}

Table.propTypes = {
  cols: PropTypes.array,
  data: PropTypes.array
};
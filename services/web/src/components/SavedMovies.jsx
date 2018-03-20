
import React from 'react';
import { Link } from 'react-router-dom';

const SavedMovies = (props) => {

  return (
    <div>
      <h1>Cart</h1>
      <hr/>
      <div><Link to='/'>Home</Link></div>
      <br/><br/>
      <table className='table table-hover'>
        
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Rate</th>
            <th></th>
          </tr>
    
         
	   {
            
             props.saved.map((movie) => {
              return (

                <tr key={movie.id}>
                  <td>{ movie.id }</td>
                  <td>{ movie.title }</td>
                  <td>{ movie.created_at }</td>
                </tr>
              )
          
            })
	 
          }
      
      </table>
    </div>
  )
}

export default SavedMovies;

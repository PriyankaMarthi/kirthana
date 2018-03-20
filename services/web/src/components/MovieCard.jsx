import React from 'react';

const MovieCard = (props) => {
  return (
    <div className='col-md-4'>
      <div className='panel panel-info'>
        <div className='panel-heading'>
     {// <h3 className='panel-title'>{props.title}</h3>
   }
     <h3 className='panel-title'>Gradle</h3>
       

  </div>
      
        <div className='panel-body'>
    {//    <img src={props.posterUrl} alt='Presentation' />
     }
         <img src="img1.png" alt='Gradle' />
     
        </div>
        <button
          className='btn btn-primary btn-sm'
          onClick={ () => props.saveMovie(props.title) }
        >Add to Cart
        </button>
      </div>
    </div>
  )
}

export default MovieCard;

import React from 'react';
import ReactDOM from 'react-dom';

function Heading() {
    const date = new Date();
  const formattedDate = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
    return (
   
<div>
        <div className='headingtab'>
         <p>{formattedDate}</p>
        </div>
</div>
       

       
      
    );
  }
    
    export default Heading;


import React, { useEffect, useState } from 'react';
import clint_1 from '../../../images/customer-1.png';
import clint_2 from '../../../images/customer-2.png';
import clint_3 from '../../../images/customer-3.png';
const FeedBack = () => {
     const [review,setReview] = useState([])
  

  useEffect(()=>{
      fetch('http://localhost:8080/givenReview')
      .then(res=>res.json())
      .then(data=>setReview(data))
  },[])


  



    return (
        <div style={{marginTop:'15%',}}>
                <h2 className="text-center pb-5">Clint <span className="text-success">Feedback</span></h2>
              
            <div className="row justify-content-around"> 
              {review.map(review =>   <div class="card col-md-3 m-3">
             <div className='d-flex'>   
            
                <img src={review.photoURL} class="card-img-top w-25 rounded p-2" alt="..."/>
                
                    <div className='p-2'>
                    <h5>{review.name}</h5>
                    <h6>{review.designation}</h6>
                    </div>
             </div>
                <div class="card-body">
                <p class="card-text">{review.description}</p>
               </div>
              </div>)}
              
             </div>
          </div>
    );
};

export default FeedBack;
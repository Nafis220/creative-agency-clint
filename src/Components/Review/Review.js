import FormData from 'form-data';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import icon from '../../images/logos/logo.png'
const Review = () => {
 const [loggedInUser,setLoggedInUser] = useContext(userContext);
   const [review, setReview] = useState({})

   const handleBlur = (e) =>{
    
     const newReview = {...review,...loggedInUser}
     newReview[e.target.name] = e.target.value
     setReview(newReview)    

   }

   const handleSubmit = () =>{
       fetch('http://localhost:8080/review',{
           method: 'POST',
           headers: {'Content-Type': 'application/json'},
           body: JSON.stringify(review)
       })
   
     
 
    }


    return (
        <div>
            <div className='row'>
            <div className="col-md-3 p-5"> 
            <img className="w-75 pb-5" src={icon} alt=""/>
               <Link to='/order'><p>Order</p></Link>
               <Link to='/serviceList'><p>Service List</p></Link>
               <Link to='/review'> <p>Review</p></Link>
            </div>
            <div className="col-md-8 rounded shadow bg-white p-5 mt-5">
            
        < div class="form-group row">
            
            
            <div className="col-md-5">
            <form onSubmit={handleSubmit}>
            <input name="name" type="text" className="form-control mb-3" onBlur={handleBlur}  placeholder="Your Name"/>
            <input name="designation" type="text" className="form-control mb-3" onBlur={handleBlur}  placeholder="Company's name, Designation"/>
            <label for="exampleFormControlTextarea1">Description</label>
            <textarea class="form-control" type="text" name='description' onBlur={handleBlur}  id="exampleFormControlTextarea1" rows="3"></textarea>
            <input  placeholder='description'  type="submit" className='m-4 d-block btn btn-dark'/>
            </form>
            
            </div>
       
            <div className="col-md-5"> 
            
            
              </div> 
            </div>
          </div>
         </div>
        </div>
    );
};

export default Review;
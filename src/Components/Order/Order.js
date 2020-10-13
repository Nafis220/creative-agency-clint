import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {  orderContext, userContext } from '../../App';
import icon from '../../images/logos/logo.png'

const Order = () => {
    const [loggedInUser,setLoggedInUser] = useContext(userContext);
    const [order,setOrder] = useContext(orderContext)
    const   newOrder = {...order,...loggedInUser}
    const handleOrder = () =>{
        fetch('http://localhost:8080/addOrder',{
                method:'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({newOrder})
             })
    }
    return (
        <div>
            <div className='row'>
            <div className="col-md-3 p-5"> 
            <img className="w-75 pb-5" src={icon} alt=""/>
               
               <p>Order</p>
               <Link to='/serviceList'><p>Service List</p></Link>
               <p>Review</p>
            </div>
            <div className="col-md-8 rounded shadow bg-white p-5 mt-5">
             
        < div class="form-group row">
            
            
            <div className="col-md-5">
             <h4>Assalamu Alaikum {loggedInUser.displayName}</h4>
        
           <h5>To confirm Your Order </h5>
           <button onClick={handleOrder} className='btn btn-success m-3'>Click Here</button>


            <form onSubmit=''>
            <input name="exampleRequired" className="form-control mb-3"  placeholder="Your Name"/>
            <input name="exampleRequired" className="form-control mb-3"  placeholder="Email address"/>
            <input name="exampleRequired" className="form-control mb-3"  placeholder="Graphic Design "/>
            <label for="exampleFormControlTextarea1">Project Details</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            <input name="exampleRequired" className="form-control mb-3 mt-3"  placeholder="Price"/>
            <input onClick='' placeholder='description' type="submit" className='m-4 d-block btn btn-dark'/>
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

export default Order;
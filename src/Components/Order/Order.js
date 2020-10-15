import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {  orderContext, userContext } from '../../App';
import icon from '../../images/logos/logo.png'

const Order = () => {
    const [loggedInUser,setLoggedInUser] = useContext(userContext);

    const [order,setOrder] = useContext(orderContext)

    const   newOrder = {...order,...loggedInUser}

    const [isAdmin, setIsAdmin] = useState(false)

    const handleOrder = () =>{
        fetch('http://localhost:8080/addOrder',{
                method:'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({...order,...loggedInUser})
             })
             alert('Order Placed  Successfully')
    }
    

    useEffect(()=>{
        fetch('http://localhost:8080/isAdmin',{
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(loggedInUser)
        })
        .then(res => res.json())
        .then(data =>setIsAdmin(data))
    },[])

    return (
        <div>
            <div className='row'>
            <div className="col-md-3 p-5"> 
            <img className="w-75 pb-5" src={icon} alt=""/>
               
               <p>Order</p>
               <Link to='/serviceList'><p>Service List</p></Link>
               <Link to='/review'> <p>Review</p></Link>

               {isAdmin && <div>   <Link to='/adminService'><p>Service List</p></Link>
               <Link to='/addServices'> <p>Add Service</p> </Link>
               <Link to='/addAdmin'> <p>Make Admin</p></Link></div>}

            </div>
            <div className="col-md-8 rounded shadow bg-white p-5 mt-5">
             
        < div class="form-group row">
            
            
            <div className="col-md-5">
             <h4>Assalamu Alaikum {loggedInUser.displayName}</h4>
        
           


            <form onSubmit=''>
            <input name="name" className="form-control mb-3"  placeholder={newOrder.displayName}/>
            <input name="email" className="form-control mb-3"  placeholder={newOrder.email}/>
            <input name="" className="form-control mb-3"  placeholder={newOrder.name}/>
            <label for="exampleFormControlTextarea1">Project Details</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3">{newOrder.description}</textarea>
            <input name="exampleRequired" className="form-control mb-3 mt-3"  placeholder={newOrder.name?`$223`:`$0`}/>
            <input onClick={handleOrder} placeholder='description' type="submit" className='m-4 d-block btn btn-dark'/>
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
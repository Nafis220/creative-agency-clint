import React from 'react';
import  { useContext } from 'react';
import { orderContext, userContext } from '../../App';
const ServiceList = () => {
    const [order,setOrder] = useContext(orderContext)
    const [loggedInUser,setLoggedInUser] = useContext(userContext)
    console.log(order,loggedInUser)
    return (
        
        <div className='row text-left'>
            <div className="card col-md-3 m-3" >
            <img src={order.img} className="card-img-top w-25 rounded mx-auto d-block p-4" alt="..."/>
            <div className="card-body">
            <h4>{order.title}</h4>
            <p className="card-text">{order.details}</p>
            </div>
            </div>
        </div>
    );
};

export default ServiceList;
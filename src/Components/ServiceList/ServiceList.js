import React, { useEffect, useState } from 'react';
import  { useContext } from 'react';
import { orderContext, userContext } from '../../App';
const ServiceList = () => {
    const [order,setOrder] = useContext(orderContext)
    const [loggedInUser,setLoggedInUser] = useContext(userContext)
    const [selectedOrder , setSelectedOrder] = useState([])

    useEffect(() => {
        fetch(`http://localhost:8080/selectedOrders?email=` +loggedInUser.email )
        .then(res => res.json())
        .then(data => {
            setSelectedOrder(data)
        })
    })



    return (
        
        <div className='row text-left'>
         {selectedOrder.map( data=>   <div className="card col-md-3 m-3" >
            <img src={data.img} className="card-img-top w-25 rounded mx-auto d-block p-4" alt="..."/>
            <div className="card-body">
            <h4>{data.title}</h4>
            <p className="card-text">{data.details}</p>
            </div>
            </div>)}
        </div>
    );
};

export default ServiceList;
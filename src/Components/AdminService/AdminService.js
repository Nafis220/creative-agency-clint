import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import icon from '../../images/logos/logo.png'
const AdminService = () => {
    const [orders,setOrders] = useState([])
  useEffect(()=>{
      fetch('http://localhost:8080/allOrders')
      .then(res=>res.json())
      .then(data=>setOrders(data))
  },[])
  

    return (
        <div>
            <div className='row'>
            <div className="col-md-3 p-5"> 
            <img className="w-75 pb-5" src={icon} alt=""/>
               
               
               <Link to='/serviceList'><p>Service List</p></Link>
               <Link to='/addServices'> <p>Add Service</p> </Link>
               <Link to='/addAdmin'> <p>Make Admin</p></Link>
            </div>
            <div className="col-md-8 rounded shadow bg-white p-5 mt-5">
             
        < div class="form-group">
            
            
          
             <h4>Assalamu Alaikum </h4>
        
           
             <table class="table">
                    <thead class="thead-dark">
                        <tr>
                        <th scope="col">No</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col"> Service</th>
                        <th scope="col">Project Detail</th>
                        <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                     { orders.map(data => <tr>
                        <th scope="row">#</th>
                     <td>{data.displayName}</td>
                     <td>{data.email}</td>
                     <td>{data.title}</td>
                     <td>{data.details}</td>
                     <td>pending</td>
                        </tr>)}
                      
                        
                      </tbody>
                     </table>    
                    </div>
                   </div>
                  </div>
                 </div>
    );
};

export default AdminService;
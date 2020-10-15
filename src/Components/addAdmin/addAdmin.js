import { from } from 'form-data';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import icon from '../../images/logos/logo.png'

const AddAdmin = () => {
 const [admin,setAdmin] = useState({})
    const handleBlur = e => {
        const newAdmin = { ...admin };
        newAdmin[e.target.name] = e.target.value;
        setAdmin(newAdmin);
    }

    const handleSubmit = () => {
      fetch('http://localhost:8080/addAdmin',{
          method: 'POST',
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify({admin})
      })
    
    }

    return (
        <div>
             <div className='row'>
            <div className="col-md-3 p-5"> 
            <img className="w-75 pb-5" src={icon} alt=""/>
               
               
               <Link to='/adminService'><p>Service List</p></Link>
               <Link to='/addServices'> <p>Add Service</p> </Link>
               <Link to='/addAdmin'> <p>Make Admin</p></Link>
            </div>
            <div className="col-md-8 rounded shadow bg-white p-5 mt-5">
             
        < div class="form-group">
            
            
       <from onSubmit=''>   
        <input htmlFor="exampleInputEmail1" className="form-control mb-3" onBlur={handleBlur} type="email" name="email" placeholder="yourname@gmail.com"/>
        <input onClick={handleSubmit} placeholder='description' type="submit" className='m-4 d-block btn btn-dark'/>
      </from>
             
                    </div>
                   </div>
                  </div>
        </div>
    );
};

export default AddAdmin;
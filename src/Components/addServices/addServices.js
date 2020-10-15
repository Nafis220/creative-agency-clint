import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import icon from '../../images/logos/logo.png'
const AddServices = () => {

    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = () => {
        const formData = new FormData()
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('description', info.description);

        fetch('http://localhost:8080/addServices', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
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
            
            
          
             <h4>Assalamu Alaikum </h4> 


             < div class="form-group row">
            
            
            
            
            
           
               
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Enter Title</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Enter Title" />
                        </div>

                        <div className="form-group">
                        <label for="exampleFormControlTextarea1">Project Details</label>
                        <textarea onBlur={handleBlur} type="text" class="form-control" id="exampleFormControlTextarea1" rows="3" name='description'></textarea>
                        </div>

                        <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Upload a image</label>
                        <input onChange={handleFileChange} type="file" className="form-control" id="exampleInputPassword1" placeholder="Picture" />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>

                </form>
            </div>
       
            </div>
       
            <div className="col-md-5"> 
            
            
              </div> 
            </div>
                    </div>
                   </div>
                 
        
    );
};

export default AddServices;
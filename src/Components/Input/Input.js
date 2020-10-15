import React from 'react';
import './Input.css'



const Input = () => {
    

    return (
        <div style={{marginTop:'15%'}} className='bg-warning p-5'>
                <div className="row" > 
                
                  <div className="col-md-5"> 
                 <h2>Let us handle your project, professionally.</h2> 
                 <p>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                  </div>
                <form  className='col-md-5'>
                <div className="form-group">
                    
                    <input type="email" placeholder='Your email address' className="form-control" id="" aria-describedby="emailHelp"/>
                    
                </div>
                <div class="input-group ">
                <div class="input-group-prepend">
                </div>
                <input type="text" class="form-control" placeholder='Your name/company"s Name' aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                </div>

                <div class="input-group ">
                <div class="input-group-prepend">
                </div>
                <input type="text" class="form-control-handMade mt-2 mb-2" placeholder='Your massage' aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                </div>
                
                <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                                
                
                </div>
                

        </div>
    );
};

export default Input;
import React from 'react';
import clint_1 from '../../../images/customer-1.png';
import clint_2 from '../../../images/customer-2.png';
import clint_3 from '../../../images/customer-3.png';
const FeedBack = () => {
   const cardData = [
        {
            img:clint_1,
            Name : 'Nash Patrik',
            designation:'CEO, Manpol',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ',
        },
        {
            img:clint_2,
            Name : 'Miriam Barron',
            designation:'CEO, Manpol',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ',
        },
        {
            img:clint_3,
            Name : 'Bria Malone',
            designation:'CEO, Manpol',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ',
        }
    ]
    return (
        <div style={{marginTop:'15%',}}>
                <h2 className="text-center pb-5">Clint <span className="text-success">Feedback</span></h2>
              
            <div className="row justify-content-around"> 
            
      
            {cardData.map(data =>   <div class="card col-md-3">
             <div className='d-flex'>   
            
                <img src={data.img} class="card-img-top w-25 rounded p-2" alt="..."/>
                
                    <div className='p-2'>
                    <h5>{data.Name}</h5>
                    <h6>{data.designation}</h6>
                    </div>
             </div>
                <div class="card-body">
                <p class="card-text">{data.description}</p>
               </div>
              </div>)}
             </div>
          </div>
    );
};

export default FeedBack;
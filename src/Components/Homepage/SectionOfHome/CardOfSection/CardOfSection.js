import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { orderContext } from '../../../../App';
import cardImg_1 from '../../../../images/icons/service1.png';
import cardImg_2 from '../../../../images/icons/service2.png';
import cardImg_3 from '../../../../images/icons/service3.png';
const CardOfSection = () => {
  const  cardData = [
        {
            id:1,
            img:cardImg_1,
            title:'Web & Mobile design',
            details:'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.'
        },
        { 
            id:2,
            img:cardImg_2,
            title:'Graphic design',
            details:'Amazing flyers, social media posts and brand representations that would make your brand stand out..'
        },
        {
            id:3,
            img:cardImg_3,
            title:'Web development',
            details:'With well written codes, we build amazing apps for all platforms, mobile and web apps in general..'
        }
    ]
    
    const [order,setOrder] = useContext(orderContext)
  const handleOrder = (ordered) => {

    setOrder(ordered)
  }

  

    return (
        <Link to='/order'>
        <div  className='row justify-content-around'>
           {cardData.map(data => <div onClick={()=>handleOrder(data)} className="card col-md-3 text-center" >
            <img  style={{width:'25%'}} src={data.img} className="card-img-top rounded mx-auto d-block" alt="..."/>
            <div className="card-body ">
             <h2>{data.title}</h2>
             <p className="card-text">{data.details}</p>
            </div>
            </div>)}
        </div>
        </Link>);
};

export default CardOfSection;
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { orderContext, userContext } from '../../../../App';
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion"
import { useHover } from 'react-hover-animation'
const CardOfSection = () => {
 
    const [loggedInUser,setLoggedInUser] = useContext(userContext)
    const [order,setOrder] = useContext(orderContext)
    const handleOrder = (ordered) => {

    setOrder(ordered)
  }
  
  const [services,setServices] = useState([])

  useEffect(()=>{
    fetch('http://localhost:8080/allServices')
    .then(res => res.json())
    .then(data =>setServices(data))
  },[])
  const { spring, animated, setHover } = useHover({
    color: {
      initial: 'black',
      onHover: 'red',
    },
    animationConfig: {
      duration: 500,
    },
  })

    return (
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
        
        <motion.div drag="x" drag='y'
        initial={{scale:0.5, y:-1000 }}
          animate={{ scale: 1,transition: { duration:2 },y:0,rotate:720}}
          
          className='row justify-content-around'>
            
           {services.map(data => <animated.div 

             style={spring} onPointerOver={() => {
              setHover(true)
            }}
            onPointerOut={() => {
              setHover(false)
            }}

           className="card col-md-3 text-center" >
            <img  style={{width:'25%'}} src={`http://localhost:8080/${data.img}`} className="card-img-top rounded mx-auto d-block" alt="..."/>
            <motion.div className="card-body ">
            <Link to='/order'>
             <h2 onClick={()=>handleOrder(data)}>{data.name}</h2>
             </Link>
               <p className="card-text">{data.description}</p>
            </motion.div>
           </animated.div>)}
          </motion.div>
         </AnimatePresence>
        </AnimateSharedLayout>);
};

export default CardOfSection;
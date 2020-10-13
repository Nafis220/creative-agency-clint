import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import slide_1 from '../../../images/carousel-1.png';
import slide_2 from '../../../images/carousel-2.png';
import slide_3 from '../../../images/carousel-3.png'
import './slider.css'
const Slider = () => {
    return (
       
        <div style={{marginTop:'15%'}} className='bg-dark'>
            <h2 style={{marginBottom:'10%'}} className="text-center text-white pt-5">How are some of <span className="text-success">our works</span></h2>
            
            <AliceCarousel  autoPlay autoPlayInterval="3000">
                <img src={slide_1} className="sliderimg"/>
                <img src={slide_2} className="sliderimg"/>
                <img src={slide_3} className="sliderimg"/>
          </AliceCarousel>
        </div>
    );
};

export default Slider;
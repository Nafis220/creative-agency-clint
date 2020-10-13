import React from 'react';
import logo_1 from '../../../images/logos/netflix.png'
import logo_2 from '../../../images/logos/airbnb.png'
import logo_3 from '../../../images/logos/google.png'
import logo_4 from '../../../images/logos/uber.png'
import logo_5 from '../../../images/logos/slack.png'
import './SectionOfHeader.css'
import CardOfSection from './CardOfSection/CardOfSection';
const SectionOfHome = () => {
    return (
        <>
        <div className="row d-flex justify-content-around sectionOfHeader">
            <div className="col-md-2"><img className='w-50'src={logo_5} alt=""/></div>
            <div className="col-md-2"><img className='w-50'src={logo_3} alt=""/></div>
            <div className="col-md-2"><img className='w-50'src={logo_4} alt=""/></div>
            <div className="col-md-2"><img className='w-50'src={logo_1} alt=""/></div>
            <div className="col-md-2"><img className='w-50'src={logo_2} alt=""/></div>
        </div>
        <h2 className='text-center p-5 m-5'>Provide awesome <span className="text-success " >services</span></h2>
        <CardOfSection></CardOfSection>
       </>
    );
};

export default SectionOfHome;
import React from 'react';
import HeaderOfHome from '../HeaderOfHome/HeaderOfHome';
import Input from '../Input/Input';
import FeedBack from './FeedBack/FeedBack';
import SectionOfHome from './SectionOfHome/SectionOfHome';
import Slider from './Slider/Slider';

const HomePage = () => {
    return (
        <div>
                <HeaderOfHome/>
                <SectionOfHome/>
                <Slider/>
                <FeedBack/>
                <Input/>
        </div>
    );
};

export default HomePage;
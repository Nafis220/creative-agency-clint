import React from 'react';
import navIcon from '../../images/logos/logo.png'
import headerImg from '../../images/logos/Frame.png'
import './HeaderOfHome.css'
const HeaderOfHome = () => {
    return (
      <>
        <div className='bg-header'>
        <nav className="navbar navbar-expand-lg navbar-light ">
        <a className="navbar-brand" href="#"><img className='w-25' src={navIcon} alt=""/></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav ">
            <a className="nav-link active p2" href="#">Home <span className="sr-only">(current)</span></a>
            <a className="nav-link p2" href="#">Our Porfolio</a>
            <a className="nav-link p2" href="#">Our Team</a>
            <a className="nav-link p2" href="#" tabindex="-1" aria-disabled="true">Contact Us</a>
            <button className='p3 btn btn-lg btn-dark'>Login</button>
          </div>
        </div>
      </nav>

      <header className='row d-flex justify-content-between'>  
          <div className="col-md-3 offset p-5">
              <h1>Let’s Grow Your 
                Brand To The 
                Next Level</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                <button className='btn btn-dark btn-lg'>Hire Us</button>
          </div>
          <div className="col-md-7 p-4 header-img">
              <img className='w-75' src={headerImg} alt=""/>
          </div>
      </header>
      <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffc107" fill-opacity="0.61" d="M0,288L1440,128L1440,0L0,0Z"></path></svg>
      </div>
      
      </>
    );
};

export default HeaderOfHome;